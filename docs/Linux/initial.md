---
title: initial
createTime: 2025/10/23 18:45:28
permalink: /Linux/14zi2m0a/
---
# Linux 服务器初始配置

### 更新系统软件包索引并升级已安装的软件包：

```bash
sudo apt update # 更新软件包索引
sudo apt upgrade -y # 升级已安装的软件包， -y 选项表示自动确认
sudo apt autoremove -y # 删除不再需要的软件包
```

### 开启防火墙 (UFW)

```bash
sudo ufw enable # 启用防火墙
sudo ufw status # 查看防火墙状态
sudo ufw allow ssh # 允许 SSH 连接
sudo ufw allow 80/tcp # 允许 HTTP 连接
sudo ufw allow 443/tcp # 允许 HTTPS 连接
sudo ufw reload # 重新加载防火墙规则

# 允许特定端口（例如 8080）
sudo ufw allow 8080/tcp # 允许 TCP 端口 8080
# 拒绝特定端口（例如 8080）
sudo ufw deny 8080/tcp # 拒绝 TCP 端口 8080

sudo ufw delete allow 8080/tcp # 删除允许规则
sudo ufw delete deny 8080/tcp # 删除拒绝规则

```

### 安装 fail2ban（防暴力破解）

```bash
sudo apt install fail2ban -y # 安装 fail2ban
sudo systemctl enable fail2ban # 设置 fail2ban 开机自启
sudo systemctl start fail2ban # 启动 fail2ban 服务
```

### 配置docker和nginx请参考以下文档：
- [部署docker](docker.md)
- [配置nginx](nginx.md)
