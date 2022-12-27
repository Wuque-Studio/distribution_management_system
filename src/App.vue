<script setup lang="ts">
const themeOverrides = reactive({
  common: {
    primaryColor: "#2545C0",
    primaryColorHover: "#2545C0",
  },
});
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-message-provider>
      <main>
        <RouterView />
      </main>
    </n-message-provider>
  </n-config-provider>
</template>

<style>
@import url("@/assets/fonts/font.css");

body {
  font-family: AcariSans, SiYuan;
}
</style>
