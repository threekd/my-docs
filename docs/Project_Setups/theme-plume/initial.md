# 基础配置

### 安装运行
```bash
npm install
npm run docs:dev
pnpm docs:dev-clean
```


### .gitignore
```
node_modules
.cache
.temp
dist
```

### config.js

```js
readingTime: false,
lastUpdated: false,
contributors: false,

```

### plume.config.js
```js
footer: false,

```

### doc Frontmatter
``` frontmatter
---
title: 
tags:
  - 

PageLayout: 'custom' 
navbar: true
aside: false
outline: [2,4]
contributors: false
---
```

### 一些模板

#### 标题+文件引用
```
::: card title="" icon=" "
::ri:file-pdf-2-line:: []()

::ri:file-pdf-2-line:: []()

::ri:file-pdf-2-line:: []()
:::
```

### 常用icon

```js
pdf:
ri:file-pdf-2-line

zip:
ri:folder-zip-line

```

### 引用视频
```
<ArtPlayer src="" fullscreen height="200px" />
```
### 安装轮播图
```js
pnpm add swiper
```

```ts
import Swiper from 'vuepress-theme-plume/features/Swiper.vue'
import { defineClientConfig } from 'vuepress/client'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Swiper', Swiper)
  },
})
```

```
<Swiper :items="['img_link1', 'img_link2']" />
<Swiper :items="[
    '/images/Research_Field/Realistic_Rendering_01.png', 
    '/images/Research_Field/Realistic_Rendering_02.png', 
    '/images/Research_Field/Realistic_Rendering_03.png', 
    '/images/Research_Field/Realistic_Rendering_04.png', 
    ]" />
```

