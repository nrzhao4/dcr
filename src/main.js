import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueApexCharts from "vue3-apexcharts";
import CollectionListItem from "@/components/collections/CollectionListItem.vue";
import CollectionDisplay from "@/components/collections/CollectionDisplay.vue";
import RoverInfo from "@/components/rover/RoverInfo.vue";
import RoverCycleConfig from "@/components/rover/RoverCycleConfig.vue";

const app = createApp(App);

app.use(router);
app.use(VueApexCharts);
app.component("CollectionListItem", CollectionListItem);
app.component("CollectionDisplay", CollectionDisplay);
app.component("RoverInfo", RoverInfo);
app.component("RoverCycleConfig", RoverCycleConfig);

app.mount("#app");
