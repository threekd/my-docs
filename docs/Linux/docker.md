---
title: docker
createTime: 2025/10/23 18:45:28
permalink: /Linux/49v91v4r/
---
# 部署docker

### 安装docker

#### 推荐安装（官方脚本）
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

#### 手动安装
```bash
# 卸载旧版本
sudo apt remove docker docker-engine docker.io containerd runc docker-doc docker-compose podman-docker
# 更新apt包索引
sudo apt update
# 安装必要的包
sudo sudo apt install -y apt-transport-https ca-certificates curl gnupg lsb-release
# 添加Docker的官方GPG密钥
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
# 添加软件源
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
# 安装 Docker Engine
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

```

### 启动docker并验证安装

```bash
# 启动并设置开机自启
sudo systemctl start docker
sudo systemctl enable docker
# 验证安装
sudo docker run hello-world
```

