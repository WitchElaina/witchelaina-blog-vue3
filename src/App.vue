<script setup>
import MainCard from './layout/MainCard.vue';
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
  min-width: 700px;
  .wrapper {
    width: 90vw;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .router-view {
    width: 90vw;
    max-width: 1400px;
  }
}
</style>
