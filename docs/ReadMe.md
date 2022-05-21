---
title: "VuePress的使用"
---

# VuePress的使用

## (1).创建项目，打包及运行。
### 1.进入文档，然后执行 (npm init) 产生package.json 
### 2.配置package.json，添加下述兩行.
```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
### 3.进入docs文件夹 创建 README.md文件
### 4.（npm run docs:dev）
### 5. (sudo npm run docs:build）也就是打包，文件会多出node_modules docs文件下会多出一个.vuepress文件。
### 参考官网 http://caibaojian.com/vuepress/guide/getting-started.html

## (2).导航栏logo。
### 1.导航栏logo, docs/.vuepress/config.js: 配置文件的入口文件配置logo，也可以是 YML 或 toml。设置logo图片。logo图片的路径：docs/.vuepress/public: 静态资源目录 public/assets/img

```
module.exports = {
  themeConfig: {
    logo: '/assets/img/logo.png',
     nav:[
     {text:'首页',link:'/'},   
     {text:'项目的创建',link:'/guide'},   
     {text:'关于',link:'/about'},   
    ]
  }
}
```
### 2.右侧导航栏。

官网地址https://www.vuepress.cn/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F%E9%93%BE%E6%8E%A5

```
module.exports = {
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav:[
     {
       text:'首页',
       link:'/',
       items:[
        {text:'子列表1',link:'/guide'},   
        {text:'子列表2',link:'/about'},   
       ]
    },   
     {text:'项目的创建',link:'/guide'},   
     {text:'关于',link:'/about'},   
    ]
  }
}
```

### 3.如果对于页面不要导航条 在md页面写:navbar:false 
```
---
navbar: false
---
```

### 4.左边侧边栏 侧边栏分组 config.js 在md页面使用 在页面中使用## #
   如果对某一个页面去掉侧边栏 在页面使用，sidebar: false

```json

  sidebar: [
      {
      title: '接口文档',
      // collapsable: false,
      children: [
        '/',
        '/about',
        '/guide',
        '/about'
      ]
    }, {
      title: '接口文档',
      collapsable: false,
      children: [
        '/',
        '/about',
        '/guide',
        '/about'
      ]
    }
  ]
```

### 5.左边侧边栏  多个侧边栏 config.js 在md页面使用 在页面中使用## #

```json
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: {
      '/foo/': [
        '',     /* /foo/ 需要创建fool文件，然后创建README.md */ 
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',     /* /bar/ 需要创建bar文件，然后创建README.md */ 
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],

      // fallback
      '/': [
        '',        /* 然后创建README.md 就是入口/ */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  }
}
```

## (3).默认主题。

```
如果是默认主题 在md页面拷贝。

home: true
# heroImage: /hero.png
heroText: VuePress的使用
tagline: VuePress的使用
actionText: 快速上手 →
actionLink: /guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
```

## (4).seo 图片和设置。
```
  title:'QAS文档',
  descrition:"描述1111",
  head:[
    ['link',{rel:'icon',href:'/assets/img/logo.png'}],
    ['meta',{name:'author',content:'作者aofeilin'}],
    ['link',{name:'keywords',content:'aofeilin00000'}],
  ],
```

## (5).添加更新时间。

```
module.exports = {
  themeConfig: {
    lastUpdated: 'Last Updated', // string | boolean
  }
}
```
## (6).官方时间插件。

1.npm install moment 

```
添加更新时间  - 官方插件添加-并且有git提交时间。
plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment npm install moment
          const moment = require('moment')
          moment.locale("zh-cn")
          return moment(timestamp).format("YYYY-MM-DD HH:mm:ss")//更新时间: 2022-05-18 16:55:56
        }
      }
    ]
  ],

```