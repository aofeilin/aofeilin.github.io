
module.exports = {
  // base:'docs',
  title:'aofeilin的学习记录',
  descrition:"描述1111",
  base: '.',
  head:[
    ['link',{rel:'icon',href:'/assets/img/logo.png'}],
    ['meta',{name:'author',content:'作者aofeilin'}],
    ['link',{name:'keywords',content:'aofeilin00000'}],
  ],
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
  themeConfig: {
    logo: '/assets/img/logo.png',
    lastUpdated: '更新时间', // string | boolean
    nav:[
     {text:'VuePress',link:'/guide'},   
     {
      text:'首页',
      link:'/',
      items:[
       {text:'子列表1',link:'/guide',items:[{text:'子列表11',link:'/about'},{text:'子列表12',link:'/about'}]},   
       {text:'子列表2',link:'/about'},   
      ]
     },   
     {text:'关于',link:'/about'},   
    ],
    sidebar: {
      '/foo/': [
        '', 
        'read',     /* /foo/ */
      ],

      '/bar/': [
        '', 
        'read', /* /bar/three.html */
      ],

      // fallback
      '/': [
        '', 
        'guide', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  }
}