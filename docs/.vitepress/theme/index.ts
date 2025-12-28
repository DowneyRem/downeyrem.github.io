// .vitepress/theme/index.ts
import Teek from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";

// 公告配置
// import MyNoticeContent from "./components/MyNoticeContent.vue";
// import { h } from "vue";

export default {
    extends: Teek,
    // 公告配置
    // Layout() {
    //     return h(Teek.Layout, null, {
    //         "teek-notice-content": () => h(MyNoticeContent),
    //     });
    // },
};