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
  <card class="article-card-wrapper" blur>
    <div class="markdown-body">
      <slot />
    </div>
  </card>
</template>

<style lang="scss">
.article-card-wrapper {
  .markdown-body {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px;
    background: none !important;

    h1,
    h2 {
      border-bottom: none !important;
    }
    p {
      font-size: 17px;
    }
    pre {
    }
  }

  @media (max-width: 767px) {
    .markdown-body {
      padding: 15px;
    }
  }
}
</style>
