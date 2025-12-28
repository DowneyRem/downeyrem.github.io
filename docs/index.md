---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

tk:
  banner:
    enabled: true
    name: "DowneyRem's Blog"
    bgStyle: "fullImg"
    imgSrc:
      - /img/bg1.png
#      - /img/bg2.jpg
    imgInterval: 15000
    imgShuffle: false
    imgWaves: true
    mask: true
    maskBg: "rgba(0, 0, 0, 0.4)"
    textColor: "#ffffff"
    titleFontSize: "3.2rem"
    descFontSize: "1.4rem"
    descStyle: "types"
    typesInTime: 200
    typesOutTime: 100
    typesNextTime: 800
    typesShuffle: false
  description:
    - 故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt
    - 积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu
  
  wallpaper:
    enabled: true
    hideBanner: true
    hideMask: true

  blogger:
    name: "唐尼瑞姆"
#    slogan: 朝圣的使徒，正在走向编程的至高殿堂！
    avatar: https://www.github.com/DowneyRem.png
    shape: circle-rotate
#    circleBgImg: /blog/bg4.webp
    circleBgMask: true
    circleSize: 100
    color: #ffffff
    status:
      icon: 😪
      size: 24
      title: "困"

  topArticle:
    enabled: true
    title: 📌精选文章
    emptyLabel: 暂无精选文章
    limit: 5
    autoPage: false
    pageSpeed: 4000
    dateFormat: yyyy-MM-dd hh:mm:ss
    
  category:
    enabled: true
    path: /categories
    pageTitle: 📚全部分类
    homeTitle: 📁文章分类
    moreLabel: 更多 ...
    emptyLabel: 暂无文章分类
    limit: 5
    autoPage: false
    pageSpeed: 4000

  tag:
    enabled: true
    path: /tags
    pageTitle: 📚全部标签
    homeTitle: 🔥热门标签
    moreLabel: 更多 ...
    emptyLabel: 暂无标签
    limit: 5
    autoPage: false
    pageSpeed: 4000

  friendLink:
    enabled: true
    list:
      - name: Pixiv 书源
        desc: 最好的 Pixiv 小说阅读器
        avatar: https://cdn.jsdelivr.net/gh/DowneyRem/PixivSource@main/doc/pic/BookSourcePixiv.png
        link: https://downeyrem.github.io/PixivSource
        
    title: 🤝友情链接
    emptyLabel: 暂无友情链接
    limit: 5
    autoScroll: false
    scrollSpeed: 2500
    autoPage: false
    pageSpeed: 4000
---

