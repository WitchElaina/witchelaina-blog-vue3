<script setup>
import ArticleContent from '../components/ArticleContent.vue';
import { useConfig } from '../config';

const prefix = useConfig().public.prefix;

defineProps({
  id: String,
});
</script>

<template>
  <ArticleContent :url="prefix + '/' + id + '.md'" />
</template>
