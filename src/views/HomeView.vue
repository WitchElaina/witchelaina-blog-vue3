<script setup>
import MainCard from '../layout/MainCard.vue';
import RecentArticles from '../layout/RecentArticles.vue';
</script>

<template>
  <div class="wrapper">
    <MainCard class="view-card" />
    <RecentArticles class="view-card" />
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
