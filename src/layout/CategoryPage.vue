<script setup>
import ArticleCard from '../components/ArticleCard.vue';
import { getArticlesByCategory } from '../utils/articleTools';
import { onMounted, ref } from 'vue';
import { useConfig } from '../config';

const articles = ref([]);
const category = ref({});
const categoryList = ref([]);
const prefix = useConfig().public.prefix;

onMounted(async () => {
  articles.value = await fetch(prefix + '/articles.json').then((res) =>
    res.json(),
  );
  console.log(articles.value);
  category.value = getArticlesByCategory(articles.value);
  console.log(category.value);
  categoryList.value = Object.keys(category.value);
});
</script>

<template>
  <div class="category-list-wrapper">
    <div class="category"></div>
  </div>
</template>
