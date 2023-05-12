<script>
export default {
  name: 'ArticleContent',
  install: (app) => {
    app.component('ArticleContent', this);
  },
};
</script>

<script setup>
import { onMounted, ref } from 'vue';
import card from './card.vue';
import MdRender from '@utils/mdRender';

const props = defineProps({
  url: String,
});

const contentNode = ref(null);

const load = async () => {
  const { html, toc } = await MdRender(props.url);
  contentNode.value.innerHTML = html;
  console.log(toc);
};

onMounted(() => {
  load();
});
</script>

<template>
  <card class="article-card-wrapper">
    <div class="markdown-body" ref="contentNode"></div>
  </card>
</template>

<style>
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
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
