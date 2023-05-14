<script>
export default {
  name: 'ArticlePage',
  install(app) {
    app.component('ArticlePage', this);
  },
};
</script>

<script setup>
import { ref, onMounted } from 'vue';
import ArticleAnchor from '../components/ArticleAnchor.vue';
import ArticleContent from '../components/ArticleContent.vue';
import ToolboxCard from '../components/ToolboxCard.vue';

import MdRender from '../utils/MdRender';

const props = defineProps({
  url: String,
});

const toc = ref([]);
const markdownContent = ref(null);

onMounted(async () => {
  const mdRendered = await MdRender(props.url);
  toc.value = mdRendered.toc;
  markdownContent.value.innerHTML = mdRendered.html;
});
</script>

<template>
  <div class="article-page-wrapper">
    <div class="article-page-content">
      <ArticleContent>
        <div ref="markdownContent" />
      </ArticleContent>
    </div>
    <div class="article-page-sidebar">
      <div class="article-page-anchor">
        <ArticleAnchor :toc="toc" />
      </div>
      <div class="article-page-toolbox">
        <ToolboxCard />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.article-page-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  .article-page-content {
    width: 82%;
  }
  .article-page-sidebar {
    height: fit-content;
    width: 18%;
    position: sticky;
    top: 90px;
    display: flex;
    flex-direction: column;
  }
}
</style>
