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
        name: "DowneyRem", // 作者名称
        link: "https://github.com/DowneyRem", // 点击作者名称后跳转的链接
    },
});

// VitePress 配置
// https://vitepress.dev/reference/site-config
export default defineConfig({
    extends: teekConfig,
    title: "DowneyRem's Blog",
    description: "唐尼瑞姆的博客",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/markdown-examples' }
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    { text: 'Markdown Examples', link: '/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/api-examples' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
    }
})
