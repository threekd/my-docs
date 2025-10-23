---
title: commands
createTime: 2025/10/23 18:45:28
permalink: /Linux/fytozf9g/
---
# 常用命令

### 压缩和解压
```bash
tar -czvf archive.tar.gz <directory_or_file>  # 创建 gzip 压缩的 tar 包
tar -xzvf archive.tar.gz                       # 解压 gzip 压缩的 tar 包
zip -r archive.zip <directory_or_file>         # 创建 zip 压缩包
unzip archive.zip                              # 解压 zip 压缩包
```
### 查看文件大小
```bash
du -sh <directory_or_file>  # 查看目录或文件的大小
du -h --max-depth=1 <directory> # 查看目录下各子目录和文件的大小
ls -lh <file>               # 查看文件的大小和权限
ls -lhS                     # 按文件大小排序列出当前目录下的文件
ls -lhSr                    # 按文件大小逆序排序列出当前目录下的文件
```

### systemctl
```bash
sudo systemctl start <service_name>      # 启动服务
sudo systemctl stop <service_name>       # 停止服务
sudo systemctl restart <service_name>    # 重启服务
sudo systemctl status <service_name>     # 查看服务状态
sudo systemctl enable <service_name>     # 设置服务开机自启
sudo systemctl disable <service_name>    # 取消服务开机自启
sudo systemctl is-enabled <service_name> # 检查服务是否开机自启
systemctl list-unit-files --type=service | grep enabled # 列出所有开机自启的服务
```

### ufw (Uncomplicated Firewall)
```bash
sudo ufw enable               # 启用防火墙
sudo ufw disable              # 禁用防火墙
sudo ufw status               # 查看防火墙状态
sudo ufw allow <port/protocol> # 允许特定端口和协议（例如：80/tcp, 53/udp）
sudo ufw deny <port/protocol>  # 拒绝特定端口和协议
sudo ufw delete allow <port/protocol> # 删除允许规则
sudo ufw delete deny <port/protocol>  # 删除拒绝规则
sudo ufw reload               # 重新加载防火墙规则
```
### apt
```bash
sudo apt update               # 更新软件包索引
sudo apt upgrade -y           # 升级已安装的软件包，-y 选项表示自动确认
sudo apt install <package_name> -y # 安装软件包
sudo apt remove <package_name> -y  # 卸载软件包
sudo apt autoremove -y        # 删除不再需要的软件包
```
### fail2ban
```bash
sudo systemctl start fail2ban      # 启动 fail2ban 服务
sudo systemctl stop fail2ban       # 停止 fail2ban 服务
sudo systemctl restart fail2ban    # 重启 fail2ban 服务
sudo systemctl status fail2ban     # 查看 fail2ban 服务状态
sudo systemctl enable fail2ban     # 设置 fail2ban 开机自启
sudo systemctl disable fail2ban    # 取消 fail2ban 开机自启
```
### 查看系统信息
```bash
uname -a               # 查看内核版本和系统信息
lsb_release -a        # 查看发行版信息
df -h                 # 查看磁盘使用情况
free -h               # 查看内存使用情况
top                   # 实时查看系统资源使用情况
htop                  # 更友好的实时系统资源监控（需要安装）
```
### 网络相关
```bash
ip a                  # 查看网络接口和IP地址
ping <host>           # 测试网络连通性
traceroute <host>     # 跟踪路由路径（需要安装）
netstat -tuln        # 查看监听的端口和服务
ss -tuln             # 查看监听的端口和服务（更现代的替代品）
```
### 文件和目录操作
```bash
ls -l                 # 列出目录内容
cd <directory>       # 切换目录
pwd                  # 显示当前目录路径
mkdir <directory>    # 创建目录
rm -rf <file/directory> # 删除文件或目录
cp <source> <destination> # 复制文件或目录
mv <source> <destination> # 移动或重命名文件或目录
```
### 用户和权限管理
```bash
sudo adduser <username>        # 添加新用户
sudo deluser <username>        # 删除用户
sudo usermod -aG <group> <username> # 将用户添加到组
sudo passwd <username>          # 修改用户密码
sudo chown <user>:<group> <file/directory> # 更改文件或目录的所有者
sudo chmod <permissions> <file/directory> # 更改文件或目录的权限
```
### 进程管理
```bash
ps aux                # 查看所有运行的进程
top                  # 实时查看系统资源使用情况
htop                 # 更友好的实时系统资源监控（需要安装）
kill <PID>          # 终止进程
kill -9 <PID>       # 强制终止进程
```
### 文件编辑
```bash
nano <file>          # 使用 nano 编辑文件
vim <file>           # 使用 vim 编辑文件
cat <file>           # 查看文件内容
less <file>          # 分页查看文件内容
tail -n 100 <file>    # 查看文件的最后100行
head -n 100 <file>    # 查看文件的前100行
```
### 其他有用命令
```bash
which <command>       # 查找命令的路径
history               # 查看命令历史
clear                 # 清屏
date                  # 显示当前日期和时间
uptime                # 查看系统运行时间和负载
```
