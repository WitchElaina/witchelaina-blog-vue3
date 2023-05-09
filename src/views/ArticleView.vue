<script setup>
import ArticleContent from '../components/ArticleContent.vue';
</script>

<template>
  <ArticleContent :url="'frp'" />
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
