<script setup>
import { nextTick, onMounted, ref } from 'vue';

const isMount = ref(false);
onMounted(() => {
  nextTick(() => {
    isMount.value = true;
  });
});
</script>

<template>
  <RouterView v-if="isMount" />
</template>
