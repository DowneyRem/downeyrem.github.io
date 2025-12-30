// .vitepress/theme/index.ts
import Teek from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";
import "vitepress-theme-teek/theme-chalk/tk-code-block-mobile.css";
import "vitepress-theme-teek/theme-chalk/tk-sidebar.css";
import "vitepress-theme-teek/theme-chalk/tk-aside.css";
import "vitepress-theme-teek/theme-chalk/tk-nav.css";
import "vitepress-theme-teek/theme-chalk/tk-doc-h1-gradient.css";
import "vitepress-theme-teek/theme-chalk/tk-doc-fade-in.css";

import "vitepress-theme-teek/vp-plus/code-block-mobile.scss";
import "vitepress-theme-teek/vp-plus/sidebar.scss";
import "vitepress-theme-teek/vp-plus/aside.scss";
import "vitepress-theme-teek/vp-plus/nav.scss";
import "vitepress-theme-teek/vp-plus/doc-h1-gradient.scss";
// import "vitepress-theme-teek/vp-plus/doc-doc-fade-in.scss";

import "vitepress-theme-teek/theme-chalk/tk-banner-desc-gradient.css";
import "vitepress-theme-teek/theme-chalk/tk-banner-full-img-scale.css";
import "vitepress-theme-teek/theme-chalk/tk-fade-up-animation.css";
import "vitepress-theme-teek/theme-chalk/tk-home-card-hover.css";

import "vitepress-theme-teek/tk-plus/banner-desc-gradient.scss";
import "vitepress-theme-teek/tk-plus/banner-full-img-scale.scss";
import "vitepress-theme-teek/tk-plus/fade-up-animation.scss";
import "vitepress-theme-teek/tk-plus/home-card-hover.scss";

import ContributeChart from "./components/ContributeChart.vue";
import CalendarCard from "./components/CalendarCard.vue";
import SponsorTable from "./components/SponsorTable.vue";
import { h } from "vue";

export default {
    extends: Teek,
    Layout: () =>
        h(Teek.Layout, null, {
            "teek-archives-top-before": () => h(ContributeChart),
            "teek-home-card-my-after": () => h(CalendarCard),
        }),
    enhanceApp({ app }) {
        app.component('SponsorTable', SponsorTable);
    }
};