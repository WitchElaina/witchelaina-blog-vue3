<script>
export default {
  name: 'ArticleContent',
  install: (app) => {
    app.component('ArticleContent', this);
  },
};
</script>

<script setup>
import { onMounted } from 'vue';
import card from './card.vue';
import MarkDown from '../../public/post/frp.md';
const props = defineProps({
  url: String,
});
</script>

<template>
  <card class="article-card-wrapper" :width="'80vw'" :max-width="'1000px'">
    <MarkDown />
  </card>
</template>
