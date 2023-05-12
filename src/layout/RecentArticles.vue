<script setup>
import ArticleCard from '../components/ArticleCard.vue';
import { ref, onMounted } from 'vue';
import { useConfig } from '../config';

const articles = ref([]);
const prefix = useConfig().public.prefix;

onMounted(async () => {
  articles.value = await fetch(prefix + '/articles.json').then((res) =>
    res.json(),
  );
  console.log(articles.value);
});
</script>

<template>
  <div class="recent-articles-wrapper">
    <ArticleCard
      v-for="article in articles"
      :key="article.id"
      :id="article.id"
      :title="article.title"
      :content="article.description"
      :date="new Date(article.date).toLocaleDateString()"
      :tags="article.tags"
      :views="article.views"
    />
  </div>
</template>

<style lang="scss" scoped>
.recent-articles-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
}
</style>
