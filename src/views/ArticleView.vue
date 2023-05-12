<script setup>
import ArticlePage from '../layout/ArticlePage.vue';
import { useConfig } from '../config';

const prefix = useConfig().public.prefix;

defineProps({
  id: String,
});
</script>

<template>
  <ArticlePage :url="prefix + '/' + id + '.md'" />
</template>
