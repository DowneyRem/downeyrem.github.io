// .vitepress/theme/index.ts
import Teek from "vitepress-theme-teek";
import "vitepress-theme-teek/index.css";
import ContributeChart from "./components/ContributeChart.vue";
import CalendarCard from "./components/CalendarCard.vue";
import { h } from "vue";

export default {
    extends: Teek,
    Layout: () =>
        h(Teek.Layout, null, {
            "teek-archives-top-before": () => h(ContributeChart),
            "teek-home-card-my-after": () => h(CalendarCard),
        }),
};