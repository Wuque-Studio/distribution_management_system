import { createApp } from "vue";
import { createPinia } from "pinia";
import naive from "naive-ui";

import App from "./App.vue";
import router from "./router";
import "vfonts/Lato.css";
import "vfonts/FiraCode.css";
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(naive);

app.mount("#app");
