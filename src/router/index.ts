import { createRouter, createWebHistory } from "vue-router";
import LayoutView from "../views/LayoutView.vue";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      meta: {
        title: " 无缺工作室",
      },
      component: LayoutView,
      children: [
        {
          path: "home",
          name: "home",
          meta: {
            title: "主页",
          },
          component: HomeView,
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      meta: {
        title: "登陆",
      },
      component: LoginView,
    },
  ],
});

export default router;
