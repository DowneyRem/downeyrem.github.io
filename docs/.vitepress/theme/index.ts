// .vitepress/theme/index.ts
import Teek from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";
import CalendarCard from "./components/CalendarCard.vue";
import { h } from "vue";
// 公告配置
// import MyNoticeContent from "./components/MyNoticeContent.vue";
// import { h } from "vue";

export default {
    extends: Teek,
    Layout: () =>
        h(Teek.Layout, null, {
            "teek-home-card-my-after": () => h(CalendarCard),
        }),
};