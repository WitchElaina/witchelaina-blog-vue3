<script setup>
import MainCard from './layout/MainCard.vue';
</script>

<template>
  <div class="wrapper">
    <MainCard class="view-card" />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  .view-card {
    width: 80vw;
    max-width: 1000px;
  }
}
</style>
