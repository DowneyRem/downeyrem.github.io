import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";
import { teekConfig } from "./teekConfig";


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
    markdown: {
        // 开启行号
        lineNumbers: true,
        image: {
            // 默认禁用；设置为 true 可为所有图片启用懒加载。
            lazyLoading: true,
        },
        // 更改容器默认值标题
        container: {
            tipLabel: "提示",
            warningLabel: "警告",
            dangerLabel: "危险",
            infoLabel: "信息",
            detailsLabel: "详细信息",
        },
    },
    sitemap: {
        hostname: "https://downeyrem.github.io", // ** 换成你的域名
        transformItems: (items) => {
            const permalinkItemBak: typeof items = [];
            // 使用永久链接生成 sitemap
            const permalinks = (globalThis as any).VITEPRESS_CONFIG.site.themeConfig
                .permalinks;
            items.forEach((item) => {
                const permalink = permalinks?.map[item.url];
                if (permalink)
                    permalinkItemBak.push({ url: permalink, lastmod: item.lastmod });
            });
            return [...items, ...permalinkItemBak];
        },
    },
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
})
