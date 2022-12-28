<template>
  <div class="loginBackground">
    <RouterView style="display: flex" />
  </div>
</template>

<script setup lang="ts"></script>

<style>
.loginBackground {
  background: url("@/assets/imgs/bg-login.jpg") no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  position: fixed;
}
</style>
