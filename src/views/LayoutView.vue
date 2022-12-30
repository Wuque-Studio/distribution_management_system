<template>
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
          <img src="@/assets/imgs/logo.png" width="220" @click="click_img" />
        </div>

        <n-menu
          :inverted="inverted"
          :collapsed-width="75"
          :collapsed-icon-size="25"
          :options="menuOptions"
        />
      </n-layout-sider>
      <n-layout content-style="padding: 18px;" :native-scrollbar="false">
        <n-space vertical>
          <div class="header">
            <n-space justify="space-between">
              <n-h1 class="title" style="font-size: 40px; margin: 0">
                {{ $route.meta.title as string }}
              </n-h1>

              <div
                style="
                  display: inline-flex;
                  text-align: center;
                  justify-content: center;
                  align-items: center;
                "
              >
                <n-dropdown
                  trigger="click"
                  :options="SelectOptions"
                  @select="handleSelect"
                  size="huge"
                >
                  <div
                    style="
                      display: inline-flex;
                      text-align: center;
                      justify-content: center;
                      align-items: center;
                    "
                  >
                    <n-avatar
                      :style="{
                        color: 'black',
                        backgroundColor: 'white',
                      }"
                      round
                      size="large"
                    >
                      <n-icon>
                        <PersonCircleIcon />
                      </n-icon>
                    </n-avatar>
                    <div>Admin</div>
                  </div>
                </n-dropdown>
                <n-divider vertical />
                <n-avatar
                  :style="{
                    color: 'black',
                    backgroundColor: 'white',
                  }"
                  round
                  size="large"
                  onclick=""
                >
                  <n-icon>
                    <LanguageIcon />
                  </n-icon>
                </n-avatar>
              </div>
            </n-space>
          </div>
          <div class="content background">
            <router-view :key="($route.meta.title as string)" /></div
        ></n-space>
      </n-layout>
    </n-layout>
  </n-layout>
</template>
<script setup lang="ts">
import type { MenuOption } from "naive-ui";
import type { Component } from "vue";
import { NIcon } from "naive-ui";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
  HomeOutline as HomeIcon,
  PersonCircleOutline as PersonCircleIcon,
  LanguageOutline as LanguageIcon,
  SettingsOutline as SettingsIcon,
  LogOutOutline as LogOutIcon,
} from "@vicons/ionicons5";

import { RouterLink } from "vue-router";
import router from "@/router/index";
import { useTokenStore } from "../stores/token";
const token = useTokenStore();
console.log(token.token);

const click_img = () => {
  router.push({ path: "/home" });
};

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "home",
          },
        },
        { default: () => "主页" }
      ),
    key: "home",
    icon: renderIcon(HomeIcon),
  },
  {
    key: "divider-1",
    type: "divider",
    props: {
      style: {
        marginLeft: "32px",
      },
    },
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "login",
          },
        },
        { default: () => "login" }
      ),
    key: "login",
    icon: renderIcon(HomeIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "register",
          },
        },
        { default: () => "register" }
      ),
    key: "register",
    icon: renderIcon(HomeIcon),
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
const SelectOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "index",
          },
        },
        { default: () => "管理" }
      ),
    key: "manage",
    icon: renderIcon(SettingsIcon),
  },
  {
    label: "登出",
    key: "signout",
    icon: renderIcon(LogOutIcon),
    props: {
      onClick: () => {
        token.token = "";
        router.push({ name: "login" });
      },
    },
  },
];

const handleSelect = () => {
  console.log("click");
};

const inverted = ref(false);
</script>
<style scoped>
@import url("@/assets/fonts/font.css");
.header {
  height: 56px;
}
.content {
  padding: 20px;
  height: calc(100vh - 140px);
}
</style>
