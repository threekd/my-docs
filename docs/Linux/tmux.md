---
title: tmux
createTime: 2025/10/23 18:45:28
permalink: /Linux/vn6twse7/
---
# TMUX

### tmux 安装
```bash
sudo apt update
sudo apt install tmux -y
``` 
### 启动 tmux 会话
```bash
tmux new -s mysession  # 创建并进入名为 mysession 的新会话
tmux attach -t mysession  # 重新连接到名为 mysession 的会
```
### tmux 常用快捷键
```
Ctrl + b, c       # 创建新窗口
Ctrl + b, n       # 切换到下一个窗口
Ctrl + b, p       # 切换到上一个窗口
Ctrl + b, w       # 列出所有窗口
Ctrl + b, &       # 关闭当前窗口
Ctrl + b, d       # 分离当前会话
Ctrl + b, [       # 进入复制模式，使用方向键移动光标
Ctrl + b, ]       # 粘贴复制的内容
Ctrl + b, "       # 水平分割窗格
Ctrl + b, %       # 垂直分割窗格
Ctrl + b, o       # 在窗格间切换
Ctrl + b, x       # 关闭当前窗格
```
### 重新连接 tmux 会话
```bash
tmux ls                # 列出所有会话
tmux attach -t mysession  # 重新连接到名为 mysession 的会话
```
### 退出 tmux 会话
```bash
exit                   # 退出当前窗口，关闭会话
tmux kill-session -t mysession  # 关闭名为 mysession 的会话
```
```
### 退出 tmux 会话
```bash
exit                   # 退出当前窗口，关闭会话
tmux kill-session -t mysession  # 关闭名为 mysession 的会话
```