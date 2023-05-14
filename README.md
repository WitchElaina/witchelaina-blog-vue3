# WitchElaina's Blog

[![wakatime](https://wakatime.com/badge/user/b2ca97db-bce2-4b9b-8588-23c0de16890a/project/ef93ba9e-ab20-40ca-8247-af1418aaba42.svg)](https://wakatime.com/badge/user/b2ca97db-bce2-4b9b-8588-23c0de16890a/project/ef93ba9e-ab20-40ca-8247-af1418aaba42)

基于 Vue3 和 Vite 的博客系统

## 前言

之前的博客是基于 [Hexo](https://hexo.io/zh-cn/) 搭建的，但是 Hexo 文档不是很详细，想开发一套自己的主题比较困难，于是决定自己造一个轮子，就有了这个项目。

## 原理

本项目基于 Vite 和 Vue.js3 构建，文章采用 Markdown 格式编写，前端通过 Markdown-it 渲染成 HTML，存储依赖 Github Pages，后端采用 Github Actions 自动化部署。所以基本上和 Hexo 原理一致，唯一区别是 Hexo 会在构件时就渲染出 HTML 文件，而本系统则会在前端需要时再获取 Markdown 文件并渲染。

## 部署

Folk 项目，将其 Clone 到本地，安装依赖

```bash
git clone {your forked repo}
npm install
```

修改 `src/config.js` 中的配置，然后在 Github 仓库的 Settings 中开启 Github Pages 功能，选择 `gh-pages` 分支，点击保存即可。

在 `public/post` 目录下添加 Markdown 文件，完成后依次执行以下命令即可。

```bash
npm run build
npm run deploy
```
