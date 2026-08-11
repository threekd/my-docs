---
title: uv
createTime: 2026/08/10 20:55:33
permalink: /Pydocs/uv/
---
## for Windows

### 安装 uv
在 Windows 上最简单的安装方式：
``` PowerShell
pip install uv
```
安装后检查版本：
``` PowerShell
uv --version
```

### 基础用法

初始化新项目:
```PowerShell
cd my-project
# app
uv init -- app
# package
uv init -- package
```

指定 Python 版本:
```PowerShell
# 查看可用版本
uv python list

# 安装特定版本
uv python install 3.12.10

# 为当前项目指定版本（写入 .python-version）
uv python pin 3.12.10
```

添加依赖:
```PowerShell
# 添加最新版
uv add requests

# 添加指定版本
uv add "numpy>=1.26,<2.0"
```

安装/同步环境:
```PowerShell
# 根据 pyproject.toml 和 uv.lock 装好所有依赖（已存在环境则同步更新）
uv sync

# 强制重新创建虚拟环境
uv sync --reinstall
```