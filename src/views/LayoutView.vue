<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-layout style="margin: 0 auto">
      <n-layout has-sider>
        <n-layout-sider
          style="height: 100vh"
          collapse-mode="width"
          :collapsed-width="95"
          :width="235"
          show-trigger="arrow-circle"
          trigger-style="top:200px"
          collapsed-trigger-style="top:200px"
          content-style="padding: 10px;"
          bordered
        >
          <div>
            <img src="@/assets/imgs/logo.png" width="220" />
            <n-image
              width="100px"
              height="100px"
              src="@/assets/imgs/logo.png"
            ></n-image>
          </div>

          <n-menu
            :inverted="inverted"
            :collapsed-width="75"
            :collapsed-icon-size="25"
            :options="menuOptions"
          />
        </n-layout-sider>
        <n-layout content-style="padding: 24px;" :native-scrollbar="false">
          <div class="header">
            <h1 style="font-size: 50px">{{}}</h1>
          </div>
          <div class="content">
            <router-view
              :key="($route.meta.repository as string)"
            ></router-view>
          </div>
        </n-layout>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>
<script setup lang="ts">
import { h, ref, reactive } from "vue";
import type { MenuOption } from "naive-ui";
import type { Component } from "vue";
import { NIcon } from "naive-ui";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from "@vicons/ionicons5";

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const themeOverrides = reactive({
  common: {
    primaryColor: "#1F29C0",
  },
  Slider: {
    railColor: "#FFFFFF",
    fillColor: "#FFFFFF",
    railColorHover: "#1F29C0",
    fillColorHover: "#1F29C0",
  },
});
const menuOptions: MenuOption[] = [
  {
    label: "且听风吟",
    key: "hear-the-wind-sing",
    icon: renderIcon(BookIcon),
  },
  {
    label: "舞，舞，舞",
    key: "dance-dance-dance",
    icon: renderIcon(BookIcon),
    children: [
      {
        type: "group",
        label: "人物",
        key: "people",
        children: [
          {
            label: "叙事者",
            key: "narrator",
            icon: renderIcon(PersonIcon),
          },
          {
            label: "羊男",
            key: "sheep-man",
            icon: renderIcon(PersonIcon),
          },
        ],
      },
      {
        label: "饮品",
        key: "beverage",
        icon: renderIcon(WineIcon),
        children: [
          {
            label: "威士忌",
            key: "whisky",
          },
        ],
      },
      {
        label: "食物",
        key: "food",
        children: [
          {
            label: "三明治",
            key: "sandwich",
          },
        ],
      },
      {
        label: "过去增多，未来减少",
        key: "the-past-increases-the-future-recedes",
      },
    ],
  },
];

const inverted = ref(false);
</script>
<style scoped>
.header {
  height: 56px;
}
</style>
