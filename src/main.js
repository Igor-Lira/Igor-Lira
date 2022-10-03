import { createApp } from "vue";
import router from "./routes";
import App from "./App.vue";
import { createMetaManager } from "vue-meta";
createApp(App).use(router).use(createMetaManager()).mount("#app");
