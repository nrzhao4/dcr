import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import CollectionListItem from "@/components/collections/CollectionListItem.vue";
import CollectionDisplay from "@/components/collections/CollectionDisplay.vue";

const app = createApp(App);

app.use(router);
app.component("CollectionListItem", CollectionListItem);
app.component("CollectionDisplay", CollectionDisplay);

app.mount("#app");
