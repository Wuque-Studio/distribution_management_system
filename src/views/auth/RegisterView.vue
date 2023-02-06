<template>
  <div style="display: flex">
    <n-card
      title="注册"
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
        <n-form-item
          ref="rPasswordFormItemRef"
          first
          path="reenteredPassword"
          label="重复密码"
        >
          <n-input
            v-model:value="model.reenteredPassword"
            :disabled="!model.password"
            type="password"
            placeholder="重复输入密码"
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
              model.password.length < 6 ||
              model.password != model.reenteredPassword
            "
            round
            type="primary"
            size="large"
            attr-type="submit"
            @click="signupClick"
            style="margin: 4px 2px; padding: 20px 50px"
          >
            注册
          </n-button>
        </div>
      </n-form>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import type { FormInst, FormItemInst, FormItemRule, FormRules } from "naive-ui";
import axios from "axios";
import router from "@/router";
import { useMessage } from "naive-ui";

interface ModelType {
  username: string | null;
  password: string | null;
  reenteredPassword: string | null;
}

const formRef = ref<FormInst | null>(null);
const rPasswordFormItemRef = ref<FormItemInst | null>(null);
const message = useMessage();
const model = ref<ModelType>({
  username: null,
  password: null,
  reenteredPassword: null,
});

const signupClick = (e: MouseEvent) => {
  e.preventDefault();
  formRef.value?.validate(async () => {
    try {
      await axios
        .post("https://120.79.0.147:9999/api/auth/signup", model.value, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          message.success("注册成功");
          setTimeout(() => {
            router.push({ name: "login" });
          }, 1000);
        });
    } catch (e: any) {
      console.log(e.response!.data.message);
      message.error("注册失败: " + e.response!.data.message);
    }
  });
};

function validatePasswordStartWith(rule: FormItemRule, value: string): boolean {
  return (
    !!model.value.password &&
    model.value.password.startsWith(value) &&
    model.value.password.length >= value.length
  );
}
function validatePasswordSame(rule: FormItemRule, value: string): boolean {
  return value === model.value.password;
}
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
  reenteredPassword: [
    {
      required: true,
      message: "请再次输入密码",
      trigger: ["input", "blur"],
    },
    {
      validator: validatePasswordStartWith,
      message: "两次密码输入不一致",
      trigger: "input",
    },
    {
      validator: validatePasswordSame,
      message: "两次密码输入不一致",
      trigger: ["blur", "password-input"],
    },
  ],
};
</script>

<style scoped></style>
