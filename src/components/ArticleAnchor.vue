<script>
export default {
  name: 'ArticleAnchor',
  install: (app) => {
    app.component('ArticleAnchor', this);
  },
};
</script>

<script setup>
import { ref } from 'vue';
import card from './card.vue';
</script>

<template>
  <card class="anchor-wrapper" blur></card>
</template>
