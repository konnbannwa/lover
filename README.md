# love

一个基于 Astro 的 GitHub Pages 静态站点，用来记录两个人的日常、纪念日、照片和小文章。

这个项目已经按 GitHub Pages 项目站点配置完成，仓库名固定为 `love`，构建后的资源路径会自动挂在 `/love/` 下。

## 本地开发

在项目根目录执行：

```bash
npm install
npm run dev
```

开发服务器默认地址：

```text
http://localhost:4321/love/
```

## 常用命令

```bash
npm run dev
npm run build
npm run preview
npm run check
```

说明：

- `npm run dev`：本地开发
- `npm run build`：生成静态产物到 `dist/`
- `npm run preview`：本地预览构建结果
- `npm run check`：执行 Astro 类型检查

## 内容怎么改

常改的地方如下：

- 站点标题、副标题、起始日期、关于文案：`src/config/site.ts`
- 日记内容：`src/content/diary/*.md`
- 相册数据：`src/data/album.ts`
- 相册占位图片：`public/images/album/`
- 全局样式：`src/styles/global.css`

### 修改“已经一起走过多少天”

编辑 `src/config/site.ts` 里的 `startDate`：

```ts
startDate: '2024-02-14'
```

改完重新构建即可。

### 新增一篇日记

在 `src/content/diary/` 下新建一个 Markdown 文件，例如：

```text
src/content/diary/2026-04-15-new-memory.md
```

示例 frontmatter：

```md
---
title: 新的一天
date: 2026-04-15
summary: 用一句简短的话概括这篇日记。
tags:
  - 日常
  - 纪念
---

这里写正文。
```

新文件会自动出现在时间线列表和详情页路由中。

### 替换相册图片

1. 把真实图片放到 `public/images/album/`
2. 修改 `src/data/album.ts` 中对应条目的 `image` 路径

例如：

```ts
image: '/images/album/our-trip.jpg'
```

## GitHub Pages 部署

项目已包含工作流文件：

```text
.github/workflows/deploy.yml
```

默认逻辑：

- 推送到 `main` 分支时自动构建
- 使用 GitHub Actions 部署到 GitHub Pages
- 产物目录为 `dist/`

首次使用时请确认仓库设置：

1. 仓库名是 `love`
2. 默认分支是 `main`
3. GitHub Pages 的 Source 选择 `GitHub Actions`

## 路径说明

本项目已经在 `astro.config.mjs` 中固定配置：

```js
base: '/love/'
```

如果你将来修改仓库名，必须同步修改这里的 `base`，否则部署后的样式、图片和跳转路径会失效。
