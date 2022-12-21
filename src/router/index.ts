import { createRouter, createWebHistory } from "vue-router";
import LayoutView from "../views/LayoutView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "mainpage",
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
  ],
});

export default router;
