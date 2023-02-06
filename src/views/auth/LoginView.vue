<template>
  <div style="display: flex">
    <n-card
      title="登陆"
      size="large"
      hoverable="true"
      :bordered="false"
      style="margin: calc(25vh) calc(15vw) 0px calc(15vw)"
    >
      <n-form ref="formRef" :model="model" :rules="rules">
        <n-form-item path="username" label="用户名">
          <n-input
            v-model:value="model.username"
            @keydown.enter.prevent
            placeholder="输入用户名"
          />
        </n-form-item>
        <n-form-item path="password" label="密码">
          <n-input
            v-model:value="model.password"
            type="password"
            placeholder="输入密码"
            @keydown.enter.prevent
          />
        </n-form-item>
        <div style="text-align: center">
          <n-button
            :disabled="
              model.username === '' ||
              model.password === '' ||
              model.username === null ||
              model.password === null ||
              model.password.length < 6
            "
            round
            type="primary"
            size="large"
            attr-type="submit"
            @click="signinClick"
            style="margin: 4px 2px; padding: 20px 50px"
          >
            登陆
          </n-button>
        </div>
        <div style="text-align: center">
          还没有账号？ <router-link to="/auth/register">注册</router-link>
        </div>
      </n-form>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import type { FormInst, FormItemRule, FormRules } from "naive-ui";
import { useMessage } from "naive-ui";
import axios from "axios";
import { useTokenStore } from "@/stores/token";

import router from "@/router";

interface ModelType {
  username: string | null;
  password: string | null;
}

const formRef = ref<FormInst | null>(null);
const message = useMessage();
const token = useTokenStore();
const model = ref<ModelType>({
  username: null,
  password: null,
});
interface UserInfo {
  name: string;
  role: string;
}

const signinClick = (e: MouseEvent) => {
  e.preventDefault();
  formRef.value?.validate(async () => {
    try {
      await axios
        .post("https://www.wuque.studio/api/auth/signin", model.value, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res.data);
          token.token = res.data.accessToken;
          token.user = {
            name: res.data.username,
            role: res.data.roles,
          } as UserInfo;
          message.success("登陆成功");
          setTimeout(() => {
            router.push({ path: "/home" });
          }, 1000);
        });
    } catch (e: any) {
      message.error("登陆失败: " + e.response!.data.message);
    }
  });
};

const rules: FormRules = {
  username: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value) {
          return new Error("输入正确的用户名");
        }
        return true;
      },
      trigger: ["input", "blur"],
    },
  ],
  password: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (value.length < 6) {
          return new Error("请输入正确的密码");
        }
      },
      trigger: "input",
    },
  ],
};
</script>

<style scoped></style>
