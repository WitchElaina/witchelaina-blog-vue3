<script setup>
import ArticleCard from '../components/ArticleCard.vue';
import card from '../components/card.vue';
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
  category.value = getArticlesByCategory(articles.value);
  categoryList.value = Object.keys(category.value);
});
</script>

<template>
  <div class="category-list-wrapper">
    <div class="category" v-for="item in categoryList" :key="item">
      <div class="category-title">
        <card class="category-title-wrapper" blur>
          <div class="category-title-text title-large">{{ item }}</div>
        </card>
      </div>
      <div class="article-list">
        <ArticleCard
          v-for="article in category[item]"
          :key="article.id"
          :id="article.id"
          :title="article.title"
          :content="article.description"
          :date="new Date(article.date).toLocaleDateString()"
          :tags="article.tags"
          :views="article.views"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.category-title-wrapper {
  padding: 20px;
  text-align: center;
  font-size: 15px;
}

.article-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
}
</style>
