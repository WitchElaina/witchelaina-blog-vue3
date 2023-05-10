<script setup>
import MainCard from './layout/MainCard.vue';
</script>

<template>
  <div class="wrapper">
    <MainCard class="view-card" />
    <RouterView />
  </div>
</template>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  .wrapper {
    width: 80vw;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
}
</style>
