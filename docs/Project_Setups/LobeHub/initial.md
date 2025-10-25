---
title: initial
createTime: 2025/10/23 18:45:28
permalink: /Project_Setups/LobeHub/6kx6roy0/
---
# LobeChat 初始化配置

## 使用Docker compose部署LobeChat

### 获取并执行部署脚本
```bash
mkdir lobe-chat-db && cd lobe-chat-db
bash <(curl -fsSL https://lobe.li/setup.sh) -l zh_CN
```

### 启动与停止服务
```bash
docker compose up -d
docker compose down
```
### 检查日志
```bash
docker logs -f lobe-chat
```
## 配置反向代理
```nginx
# ============================
# HTTP → HTTPS 强制跳转
# ============================
server {
    listen 80;
    server_name threekd.com lobe.threekd.com auth.threekd.com minio.threekd.com minio-ui.threekd.com;
    return 301 https://$host$request_uri;
}

# ============================
# 全局 SSL 配置
# ============================
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ciphers HIGH:!aNULL:!MD5;
ssl_prefer_server_ciphers on;
ssl_session_timeout 5m;
ssl_session_cache shared:SSL:10m;

# HSTS 强制使用 HTTPS
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

# ============================
# 域名 → 后端端口映射表
# 域名必须完整匹配，才能正确代理到指定端口
# ============================
map $host $upstream {
    lobe.threekd.com       127.0.0.1:3210;
    auth.threekd.com       127.0.0.1:8000;
    minio.threekd.com      127.0.0.1:9000;
    minio-ui.threekd.com   127.0.0.1:9001;
}

# ============================
# 单一 HTTPS Server 块（模板化管理多个域名）
# ============================
server {
    listen 443 ssl;
    http2 on;
    server_name lobe.threekd.com auth.threekd.com minio.threekd.com minio-ui.threekd.com;

    ssl_certificate     /usr/local/nginx/conf/ssl/threekd.com/fullchain.cer;
    ssl_certificate_key /usr/local/nginx/conf/ssl/threekd.com/threekd.com.key;

    # 默认请求处理，反代到映射端口
    location / {
        proxy_pass http://$upstream;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # 特殊处理 OIDC Discovery & SSL相关文件
    # 确保访问 /.well-known/... 能通
    location ~ ^/\.well-known {
        allow all;
        proxy_pass http://$upstream;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## 配置 Casdoor 身份验证服务

## 配置Minio对象存储服务

## 配置自动更新脚本
```bash
#!/bin/bash
# 自动更新 Lobe Chat（docker-compose管理）
# 项目路径
PROJECT_DIR="/opt/lobe/lobe-chat-db"
SERVICE_NAME="lobe"  # 你的 docker-compose.yml 的服务名

cd "${PROJECT_DIR}" || { echo "[ERROR] 项目目录不存在"; exit 1; }

echo "[INFO] 加载 .env 环境变量..."
if [ -f ".env" ]; then
    set -a
    source .env
    set +a
fi

echo "[INFO] 正在检查 Lobe Chat 镜像更新..."

# 获取本地镜像 ID
LOCAL_IMAGE_ID=$(docker images lobehub/lobe-chat-database:latest --format "{{.ID}}" 2>/dev/null)

if [ -z "$LOCAL_IMAGE_ID" ]; then
    echo "[WARN] 本地没有镜像 lobehub/lobe-chat-database:latest，首次拉取..."
fi

# 拉取最新镜像
docker compose pull "${SERVICE_NAME}"
if [ $? -ne 0 ]; then
    echo "[ERROR] 拉取镜像失败"
    exit 1
fi

# 获取新的镜像 ID
REMOTE_IMAGE_ID=$(docker images lobehub/lobe-chat-database:latest --format "{{.ID}}" 2>/dev/null)

if [ -z "$REMOTE_IMAGE_ID" ]; then
    echo "[ERROR] 拉取后未找到镜像 ID"
    exit 1
fi

# 比较镜像 ID
if [ "$LOCAL_IMAGE_ID" == "$REMOTE_IMAGE_ID" ] && [ -n "$LOCAL_IMAGE_ID" ]; then
    echo "[INFO] 镜像无更新 (ID: $LOCAL_IMAGE_ID)"
    exit 0
fi

# 有更新，开始重启
echo "[INFO] 检测到更新: $LOCAL_IMAGE_ID -> $REMOTE_IMAGE_ID"
docker compose up -d --force-recreate "${SERVICE_NAME}"

# 输出更新信息
UPDATE_TIME=$(date "+%Y-%m-%d %H:%M:%S")
VERSION=$(docker inspect lobehub/lobe-chat-database:latest | grep 'org.opencontainers.image.version' | awk -F'"' '{print $4}')
echo "[INFO] 更新完成时间: $UPDATE_TIME"
echo "[INFO] 新版本号: ${VERSION:-未知}"

# 清理不再使用的镜像
echo "[INFO] 清理无用镜像..."
docker image prune -f >/dev/null 2>&1
echo "[INFO] 清理完成 🚀"
```
## OIDC 环境变量配置
