---
title: CentOS初始化配置
tags: ['CentOS']
categories: 教程
date: 2023-01-10 20:00:00
description: 经常薅羊毛带来的问题就是需要频繁更换服务器，shell之类的工具就得重新安装一遍，决定写个文记录一下，方便以后操作
---

# CentOS

## Update

到手先更新

```
sudo yum -y update
sudo yum -y install bzip2 wget gcc gcc-c++ gmp-devel mpfr-devel libmpc-devel make
```

## Oh my zsh

我的评价是，**Bash 狗都不用**

```shell
yum install zsh

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

## Neovim

vim 是世界上最好的文本编辑器！

夹带点私货，自己改的[Neovim 配置](https://github.com/WitchElaina/Neovim-Hikari)

```shell
wget https://github.com/neovim/neovim/releases/download/v0.8.0/nvim-linux64.tar.gz
tar -zxvf nvim-linux64.tar.gz
mkidr ~/.config
git clone https://github.com/WitchElaina/Neovim-Hikari.git ~/.config/nvim
echo -e "\nexport PATH=\"/root/nvim-linux:PATH\"" >> ~/.zshrc
source ~/.zshrc
```

## Python3.9

CentOS 上装高版本 Python 绝对是折磨

```shell
yum -y groupinstall "Development tools"
yum -y install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel
yum install -y libffi-devel
yum install zlib* -y
yum install yum-utils
yum-builddep python
```

```shell
wget https://www.python.org/ftp/python/3.9.12/Python-3.9.12.tar.xz
tar -xvJf Python-3.9.12.tar.xz
cd Python-3.9.12
```

```shell
yum install centos-release-scl
yum install devtoolset-8-gcc devtoolset-8-gcc-c++
scl enable devtoolset-8 -- bash
```

```shell
./configure --prefix=/usr/local/python3 --enable-optimizations --with-ssl
make && make install
# /usr/local/python3/bin
```
