<script setup>
import { useDark } from '@vueuse/core';
import MainCard from './layout/MainCard.vue';
import { onBeforeMount, watch } from 'vue';

const darkMode = useDark();

onBeforeMount(() => {
  // 创建link标签并指定id
  const link = document.createElement('link');
  link.id = 'theme';
  link.rel = 'stylesheet';
  link.href = darkMode.value
    ? '/style/theme.dark.css'
    : '/style/theme.light.css';
  // 将link标签插入head
  document.head.appendChild(link);
  watch(
    () => darkMode.value,
    () => {
      const link = document.getElementById('theme');
      link.href = darkMode.value
        ? '/style/theme.dark.css'
        : '/style/theme.light.css';
    },
    {
      immediate: true,
    },
  );
});
</script>

<template>
  <div class="wrapper">
    <MainCard class="view-card" />
    <RouterView class="router-view" />
  </div>
</template>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 700px;
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .router-view {
    width: 83vw;
    max-width: 1300px;
  }
}
</style>
