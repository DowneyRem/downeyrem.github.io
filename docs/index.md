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
      - /img/bg2.png
      - /img/bg3.png
    imgInterval: 3000
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
    - Stay hungry, stay foolish —— Steve Jobs
    - Done is better than perfect —— FaceBook
    - Talk is cheap. Show me the code. —— Linus Torvalds
    - 种一棵树最好的时间是十年前，其次是现在
    - 不积跬步，无以至千里；不积小流，无以成江海 —— 荀子
    - 万物皆有裂痕，那是光照进来的地方 —— 萊昂納德·科恩
    - 不如意事常八九，可与言者无二三

  wallpaper:
    enabled: true
    hideBanner: true
    hideMask: true

  blogger:
    name: "唐尼瑞姆"
    slogan: DowneyRem
    avatar: https://www.github.com/DowneyRem.png
    shape: circle-rotate
    circleBgImg: /img/bg0.png
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
        avatar: https://downeyrem.github.io/PixivSource/favicon-512x512.png
        link: https://downeyrem.github.io/PixivSource
      - name: 兽人阅读
        desc: 兽人小说，精品阅读
        avatar: /img/FurryReading.jpg
        link: https://t.me/FurryReading
    title: 🤝友情链接
    emptyLabel: 暂无友情链接
    limit: 5
    autoScroll: false
    scrollSpeed: 2500
    autoPage: false
    pageSpeed: 4000
---

