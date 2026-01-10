// .vitepress/theme/index.ts
import Teek from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";

import "vitepress-theme-teek/vp-plus/code-block-mobile.scss";
import "vitepress-theme-teek/vp-plus/sidebar.scss";
import "vitepress-theme-teek/vp-plus/aside.scss";
import "vitepress-theme-teek/vp-plus/nav.scss";
// import "vitepress-theme-teek/vp-plus/doc-h1-gradient.scss";
// import "vitepress-theme-teek/vp-plus/doc-doc-fade-in.scss";

import "vitepress-theme-teek/tk-plus/banner-desc-gradient.scss";
import "vitepress-theme-teek/tk-plus/banner-full-img-scale.scss";
import "vitepress-theme-teek/tk-plus/fade-up-animation.scss";
// import "vitepress-theme-teek/tk-plus/home-card-hover.scss";

import ContributeChart from "./components/ContributeChart.vue";
import CalendarCard from "./components/CalendarCard.vue";
import SponsorTable from "./components/SponsorTable.vue";
import DragonChat from './components/DragonChat.vue'
import NotFound from "./components/404.vue";
import HomeUnderline from "./components/HomeUnderline.vue"
import { h, watch } from "vue";
import './styles/index.css'

// 彩虹背景动画样式
let homePageStyle: HTMLStyleElement | undefined

export default {
    extends: Teek,
    Layout: () =>
        h(Teek.Layout, null, {
            "teek-archives-top-before": () => h(ContributeChart),
            "teek-home-card-my-after": () => h(CalendarCard),
            "not-found": () => h(NotFound),
        }),
    enhanceApp({app , router }) {
        app.component('SponsorTable', SponsorTable)
        app.component('DragonChat', DragonChat)
        app.component('HomeUnderline', HomeUnderline)

        // 彩虹背景动画样式
        if (typeof window !== 'undefined') {
            watch(
                () => router.route.data.relativePath,
                () => updateHomePageStyle(location.pathname.includes("FurryReading")),
                { immediate: true },
            )
        }
    },
};


// 彩虹背景动画样式
function updateHomePageStyle(value: boolean) {
    if (value) {
        if (homePageStyle) return

        homePageStyle = document.createElement('style')
        homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
        document.body.appendChild(homePageStyle)
    } else {
        if (!homePageStyle) return

        homePageStyle.remove()
        homePageStyle = undefined
    }
}