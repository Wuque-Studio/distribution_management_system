import { useTokenStore } from "./stores/token";
import { createApp } from "vue";
import { createPinia } from "pinia";
import naive from "naive-ui";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(naive);
app.use(createPinia());

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
