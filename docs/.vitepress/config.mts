import { defineConfig } from "vitepress";
import { defineTeekConfig } from "vitepress-theme-teek/config";

// Teek 主题配置
const teekConfig = defineTeekConfig({
    teekTheme: true,
    teekHome: true,
    vpHome: false,
    // loading: true, // 启用 Loading 动画，为 false 则关闭 Loading 动画
    loading: "正在加载中...", // 修改 Loading 文案
    anchorScroll: true,
    themeSize: "default",
    viewTransition: {
        enabled: true, // 是否启用深浅色切换动画效果
        mode: "out-in", // 动画模式，out 始终从点击点往全屏扩散，out-in 第一次从点击点往全屏扩散，再次点击从全屏回到点击点
        duration: 300, // 动画持续时间，当 mode 为 out 时，默认为 300ms，mode 为 out-in 时，默认为 600ms
        easing: "ease-in", // 缓动函数
    },
    backTop: {
        enabled: true, // 是否启动回到顶部功能
        content: "icon", // 回到顶部按钮的显示内容，可选配置 progress | icon
        done: TkMessage => TkMessage.success("返回顶部成功"), // 回到顶部后的回调
    },
    toComment: {
        enabled: true, // 是否启动滚动到评论区功能
        done: TkMessage => TkMessage.success("已抵达评论区"), // 滚动到评论区后的回调
    },
    codeBlock: {
        enabled: true, // 是否启用新版代码块
        collapseHeight: 700, // 超出高度后自动折叠，设置 true 则默认折叠，false 则默认不折叠
        overlay: false, // 代码块底部是否显示展开/折叠遮罩层
        overlayHeight: 400, // 当出现遮罩层时，指定代码块显示高度，当 overlay 为 true 时生效
        langTextTransform: "capitalize", // 语言文本显示样式，为 text-transform 的值:none, capitalize, lowercase, uppercase
        copiedDone: TkMessage => TkMessage.success("复制成功！"), // 复制代码完成后的回调
    },
    sidebarTrigger: false,
    windowTransition: true,
    // bodyBgImg: {
    //     imgSrc: ["/img/bg1.png"], // body 背景图片链接。单张图片 string | 多张图片 string[], 多张图片时每隔 imgInterval 秒换一张
    //     imgOpacity: 1, // body 背景图透明度，选值 0.1 ~ 1.0
    //     imgInterval: 15000, //  body 当多张背景图时（imgSrc 为数组），设置切换时间，单位：毫秒
    //     imgShuffle: false, // body 背景图是否随机切换，为 false 时按顺序切换
    //     mask: false, // body 背景图遮罩
    //     maskBg: "rgba(0, 0, 0, 0.2)", // body 背景图遮罩颜色，如果为数字，则是 rgba(0, 0, 0, ${maskBg})，如果为字符串，则作为背景色。mask 为 true 时生效
    // },
    themeEnhance: {
        enabled: true, // 启用主题增强功能
        position: "top", // 位置，top 为导航栏右侧，bottom 为右下角
        // 布局切换配置
        layoutSwitch: {
            disabled: false, // 禁用布局切换
            defaultMode: "original", // 布局切换的默认模式
            disableHelp: false, // 禁用帮助提示
            disableAnimation: false, // 禁用布局切换动画
            defaultDocMaxWidth: 90, // 内容布局最大宽度的默认百分比，仅限 0-100
            disableDocMaxWidthHelp: false, // 禁用帮助提示
            defaultPageMaxWidth: 95, // 页面布局最大宽度的默认百分比，仅限 0-100
            disablePageMaxWidthHelp: false, // 禁用帮助提示
        },
        // 布局主题色配置
        themeColor: {
            disabled: false, // 禁用布局主题色切换
            defaultColorName: "vp-default", // 布局默认主题色
            defaultSpread: false, // 是否将主题色扩散到其他元素（根据主题色计算其他元素需要的颜色）
            disableHelp: false, // 禁用帮助提示
            disabledInMobile: false, // 是否在移动端禁用
        },
        // 聚光灯配置
        spotlight: {
            disabled: false, // 禁用聚光灯
            defaultStyle: "aside", //  聚光灯默认样式
            disableHelp: false, // 禁用帮助提示
            defaultValue: true, // 聚光灯默认开关状态
        },
    },
    author: {
        name: "唐尼瑞姆", // 作者名称
        link: "https://github.com/DowneyRem", // 点击作者名称后跳转的链接
    },
    // siteAnalytics: [
    //     {
    //         provider: "google",
    //         options: {
    //             id: "G-X0J76E1E8Y",
    //         },
    //     },
    //     {
    //         provider: "baidu",
    //         options: {
    //             id: "******",
    //         },
    //     },
    // ],
    post: {
        postStyle: "list", // 文章列表风格
        excerptPosition: "top", // 文章摘要位置
        showMore: true, // 是否显示更多按钮
        moreLabel: "阅读全文 >", // 更多按钮文字
        emptyLabel: "暂无文章", // 文章列表为空时的标签
        coverImgMode: "default", // 文章封面图模式
        showCapture: false, // 是否在摘要位置显示文章部分文字，当为 true 且不使用 frontmatter.describe 和 <!-- more --> 时，会自动截取前 300 个字符作为摘要
        splitSeparator: false, // 文章信息（作者、创建时间、分类、标签等信息）是否添加 | 分隔符
        transition: true, // 是否开启过渡动画
        transitionName: "tk-slide-fade", // 自定义过渡动画名称
        listStyleTitleTagPosition: "right", // 列表模式下的标题标签位置（postStyle 为 list）
        cardStyleTitleTagPosition: "left", // 卡片模式下的标题标签位置（postStyle 为 card）
        defaultCoverImg: [], // 默认封面图地址，如果不设置封面图则使用默认封面图地址
    },
    page: {
        disabled: false, // 是否禁用
        pageSize: 10, // 每页显示条目数
        pagerCount: 5, // 设置最大页码按钮数。 页码按钮的数量，当总页数超过该值时会折叠
        layout: "prev, pager, next, jumper, ->, total", // 组件布局，子组件名用逗号分隔
        size: "default", // 分页大小
        background: true, // 是否为分页按钮添加背景色
        hideOnSinglePage: false, // 只有一页时是否隐藏
        // ...
    },
    docAnalysis: {
        enabled: true, // 是否启用站点信息卡片
        createTime: "2025-12-31", // 站点创建时间
        wordCount: true, // 是否开启文章页的字数统计
        readingTime: true, // 是否开启文章页的阅读时长统计
        // 访问量、访客数统计配置
        statistics: {
            provider: "google", // 网站流量统计提供商
            siteView: true, // 是否开启首页的访问量和排名统计
            pageView: true, // 是否开启文章页的浏览量统计
            tryRequest: false, // 如果请求网站流量统计接口失败，是否重试
            tryCount: 5, // 重试次数，仅当 tryRequest 为 true 时有效
            tryIterationTime: 2000, // 重试间隔时间，单位：毫秒，仅当 tryRequest 为 true 时有效
            permalink: true, // 是否只统计永久链接的浏览量，如果为 false，则统计 VitePress 默认的文档目录链接
        },
        // 自定义现有信息
        overrideInfo: [
            {
                key: "lastActiveTime",
                label: "活跃时间",
                value: (_, currentValue) => (currentValue + "").replace("前", ""),
                show: true,
            },
            { key: "totalPosts", label: "文章总数" }
        ],
        // 自定义额外信息
        // appendInfo: [{ key: "index", label: "序号", value: "天客 99" }],
    },
    social: [
        {
            icon: "mdi:github",
            name: "GitHub",
            link: "https://github.com/DowneyRem",
        },
        {
            icon: "mdi:telegram",
            name: "Gitee",
            link: "https://t.me/DowneyRem",
        },
        {
            icon: "mdi:twitter",
            name: "Twitter",
            link: "https://x.com/DowneyRemDragon",
        },
        {
            icon: "https://asset.brandfetch.io/idIlKj_n7C/idSsbP7h1m.png",
            name: "Pixiv",
            link: "https://www.pixiv.net/users/119908520",
        },
    ],
    footerInfo: {
        // 页脚信息，支持 HTML 格式（位于主题版权上方）
        // topMessage: ["下面的内容和图标都可以修改（本条内容也可以隐藏的）"],
        // 页脚信息，支持 HTML 格式（位于主题版权下方）
        // bottomMessage: ["上面的内容和图标都可以修改（本条内容也可以隐藏的）"],
        // 主题版权配置
        theme: {
            show: true, // 是否显示主题版权，建议显示
            name: "Theme By Teek@1.5.4", // 自定义名称
            link: "https://github.com/Kele-Bingtang/vitepress-theme-teek", // 自定义链接
        },
        // 博客版权配置
        copyright: {
            show: true, // 是否显示博客版权
            createYear: 2025, // 创建年份
            suffix: "唐尼瑞姆", // 后缀
        },
        // // ICP 备案信息配置
        // icpRecord: {
        //     name: "桂ICP备2021009994号",
        //     link: "http://beian.miit.gov.cn/",
        // },
        // // 网络安全备案信息配置
        // securityRecord: {
        //     name: "",
        //     link: "",
        // },
    },
    articleBanner: {
        enabled: true, // 是否启用单文章页 Banner
        showCategory: true, // 是否展示分类
        showTag: true, // 是否展示标签
        defaultCoverImg: "", // 默认封面图
        defaultCoverBgColor: "", // 默认封面背景色，优先级低于 defaultCoverImg
    },
    articleAnalyze: {
        showIcon: true, // 作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息的图标是否显示
        dateFormat: "yyyy-MM-dd hh:mm:ss", // 文章日期格式，首页和文章页解析日期时使用
        dateUTC: true, // 是否使用 UTC 时间
        showInfo: true, // 是否展示作者、日期、分类、标签、字数、阅读时长、浏览量等文章信息，分别作用于首页和文章页
        showAuthor: true, // 是否展示作者
        showCreateDate: true, // 是否展示创建日期
        showUpdateDate: false, // 是否展示更新日期，仅在文章页显示
        showCategory: false, // 是否展示分类
        showTag: false, // 是否展示标签
        teleport: {
            selector: "h1",
            position: "after",
            className: "h1-bottom-info",
        },
    },

    // breadcrumb: {
    //     enabled: true, // 是否启用面包屑
    //     showCurrentName: false, // 面包屑最后一列是否显示当前文章的文件名
    //     separator: "/", // 面包屑分隔符
    //     homeLabel: "首页", // 鼠标悬停首页图标的提示文案
    // },
    pageStyle: "segment-nav",
    // appreciation: {
    //     position: "doc-after", // 赞赏位置
    //     // 赞赏配置
    //     options: {
    //         icon: "weChatPay", // 赞赏图标，内置 weChatPay 和 alipay
    //         expandTitle: "打赏支持", // 展开标题，支持 HTML
    //         collapseTitle: "下次一定", // 折叠标题，支持 HTML
    //         content: `<img src='/teek-logo-large.png'>`, // 赞赏内容，支持 HTML
    //         expand: false, // 是否默认展开，默认 false
    //
    //         icon: "alipay", // 赞赏图标，内置 weChatPay 和 alipay
    //         expandTitle: "打赏支持", // 展开标题，支持 HTML
    //         collapseTitle: "下次一定", // 折叠标题，支持 HTML
    //         content: `<img src='/teek-logo-large.png'>`, // 赞赏内容，支持 HTML
    //         expand: false, // 是否默认展开，默认 false
    //     },
    // },
    articleShare: {
        enabled: true, // 是否开启文章链接分享功能
        text: "分享此页面", // 分享按钮文本
        copiedText: "链接已复制", // 复制成功文本
        query: false, // 是否包含查询参数
        hash: false, // 是否包含哈希值
    },
    articleTopTip: (frontmatter, localeIndex, page) => {
        const tip: Record<string, string> = {
            type: "warning",
            text: "文章发布较早，内容可能过时，阅读注意甄别。",
        };

        // 大于半年，添加提示
        const longTime = 6 * 30 * 24 * 60 * 60 * 1000;
        if (frontmatter.date && Date.now() - new Date(frontmatter.date).getTime() > longTime) return tip;
    },
    // articleBottomTip: frontmatter => {
    //     if (typeof window === "undefined") return;
    //
    //     const hash = false;
    //     const query = false;
    //     const { origin, pathname, search } = window.location;
    //     const url = `${origin}${frontmatter.permalink ?? pathname}${query ? search : ""}${hash ? location.hash : ""}`;
    //     const author = "唐尼瑞姆";
    //
    //     return {
    //         type: "tip",
    //         // title: "声明", // 可选
    //         text: `<p>作者：${author}</p>
    //          <p style="margin-bottom: 0">链接：<a href="${decodeURIComponent(url)}" target="_blank">${decodeURIComponent(url)}</a></p>
    //          <p>版权：此文章版权归 ${author} 所有，如有转载，请注明出处!</p>
    //         `,
    //     };
    // },
    articleUpdate: {
        enabled: true, // 是否启用文章最近更新栏
        limit: 3, // 文章最近更新栏显示数量
    },
    private: {
        enabled: true,
        expire: "1h",
        session: true,
        siteLogin: false,
        pages: [
            { username: "teek", password: "teek", expire: "1d", session: true, strategy: "once" },
        ],
        realm: {
            blog: [
                { username: "teek", password: "teek", expire: "1d", session: true, strategy: "once" },
            ],
            comment: [
                { username: "teek", password: "teek", expire: "1d", session: true, strategy: "always" },
            ],
        },
        // onFocus: (value, formName) => {},
        // onBlur: (value, formName) => {},
        // doLogin: (loginInfo, type, nativeExecLogin) => true,
        // doValidate: (type, frontmatter, nativeExecLogin) => true,
        // encrypt: (value, frontmatter) => value,
        // decrypt: (value, frontmatter) => value,
    },
    vitePlugins: {
        permalink: true,
        sidebarOption: {
            collapsed: false, // true 开启侧边栏折叠功能，并默认折叠，false 开启侧边栏折叠功能，但是默认不折叠
        },
    },
});

// VitePress 配置
// https://vitepress.dev/reference/site-config
export default defineConfig({
    extends: teekConfig,
    title: "DowneyRem's Blog",
    description: "唐尼瑞姆的博客",
    lang: "zh-CN",
    cleanUrls: true,        // 简洁URL
    ignoreDeadLinks: true,  // 忽略死链
    appearance: true,       // 默认主题由用户配色方案决定
    lastUpdated: true,      // 获取页面最后更新的时间戳
    head: [
        // 优化：预连接到 Google 统计，减少代理环境下的连接延迟
        ["link", { rel: "preconnect", href: "https://www.googletagmanager.com" }],
        ["link", { rel: "preconnect", href: "https://www.google-analytics.com", crossorigin: "" }],

        // ["link", { rel: "manifest", href: "/manifest.json" }]
        ["script", {
            async: "", src: "https://www.googletagmanager.com/gtag/js?id=G-X0J76E1E8Y" }],
        ["script", {},
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            gtag("config", "G-X0J76E1E8Y");`
        ],
        ["noscript", {}, '<meta http-equiv="refresh" content="0; url={https://www.google.com}">'],
    ],
    themeConfig: {
        // logo: "/favicon.png",
        // siteTitle: false,   // 隐藏站点标题
        outline: {
            level: [2, 3],     // H2 H3 标题
            label: '本页目录'
        },
        returnToTopLabel: "回到顶部",
        lightModeSwitchTitle: "",
        sidebarMenuLabel: "菜单",
        lastUpdated: { text: '上次更新'},
        editLink: {
            pattern: "https://github.com/DowneyRem/downeyrem.github.io/blob/main/docs/:path",
            text: "在 GitHub 上编辑本文"
        },
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "🏠 首页", link: "/" },
            { text: "🅿️ Pixiv 书源", link: "https://downeyrem.github.io/PixivSource" },
            {
                text: "🚧 开发项目",
                items: [
                    { text: "🅿️ Pixiv 书源", link: "https://downeyrem.github.io/PixivSource" },
                    { text: "📚 兽人阅读频道", link: "https://t.me/FurryReading" },
                ],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/DowneyRem" },
            { icon: "telegram", link: "https://t.me/DowneyRem" },
            { icon: "twitter", link: "https://x.com/DowneyRemDragon" },
            { icon: "pixiv", link: "https://www.pixiv.net/users/119908520" },
        ],
        search: {
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "搜索文档",
                        buttonAriaLabel: "搜索文档"
                    },
                    modal: {
                        noResultsText: "无法找到相关结果",
                        resetButtonTitle: "清除查询条件",
                        footer: {
                            selectText: "选择",
                            navigateText: "切换",
                            closeText: "Esc 键",
                        }
                    }
                }
            }
        }
    },
    markdown: {
        config: (md) => {
            // 新增：自动为所有图片添加懒加载属性，解决加载竞争导致的跳转慢问题
            md.renderer.rules.image = (tokens, idx, options, env, self) => {
                const token = tokens[idx]
                token.attrSet('loading', 'lazy')    // 开启懒加载
                token.attrSet('decoding', 'async')  // 异步渲染图片
                return self.renderToken(tokens, idx, options)
            }
        }
    },
})
