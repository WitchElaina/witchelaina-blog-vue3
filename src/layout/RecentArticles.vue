<script setup>
import ArticleCard from '../components/ArticleCard.vue';
import { ref, onMounted } from 'vue';
import { useConfig } from '../config';

const articles = ref([]);
const prefix = useConfig().public.prefix;

onMounted(async () => {
  articles.value = fetch(prefix + '/articles.json').then((res) => res.json());
});
</script>

<template>
  <div class="recent-articles-wrapper">
    <ArticleCard
      v-for="article in articles"
      :key="article.id"
      :id="article.id"
      :title="article.title"
      :content="article.content"
      :date="article.date"
      :tags="article.tags"
      :views="article.views"
    />
  </div>
</template>

<style lang="scss" scoped>
.recent-articles-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
