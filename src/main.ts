import { useTokenStore } from "./stores/token";
import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import naive from "naive-ui";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(naive);
app.use(pinia);

app.mount("#app");

router.beforeEach((to, from, next) => {
  const tokenStore = useTokenStore();
  console.log(from.path + "->" + to.path);
  if (tokenStore.token != "" || to.name === "login" || to.name === "register") {
    return next();
  } else {
    router.push({ name: "login" });
    return next();
  }
});
