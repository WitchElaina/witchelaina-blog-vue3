<script>
export default {
  name: 'ArticleContent',
  install: (app) => {
    app.component('ArticleContent', this);
  },
};
</script>

<script setup>
import card from './card.vue';
</script>

<template>
  <card class="article-card-wrapper">
    <div class="markdown-body">
      <slot />
    </div>
  </card>
</template>

<style>
.markdown-body {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 20px;
  background: none !important;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
