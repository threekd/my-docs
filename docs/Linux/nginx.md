---
title: nginx
createTime: 2025/10/23 18:45:28
permalink: /Linux/qizd5z85/
---
# Nginx

### Nginx
``` 
### 启动和管理nginx服务
```bash
sudo systemctl start nginx      # 启动nginx服务
sudo systemctl enable nginx     # 设置nginx开机自启
sudo systemctl status nginx     # 查看nginx服务状态
sudo systemctl stop nginx       # 停止nginx服务
sudo systemctl restart nginx    # 重启nginx服务
sudo systemctl reload nginx     # 重新加载nginx配置
```
### 配置防火墙
```bash
sudo ufw allow 'Nginx Full'  # 允许HTTP和HTTPS流量
```

