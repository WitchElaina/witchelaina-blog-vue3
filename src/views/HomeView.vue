<script setup>
import MainCard from '../layout/MainCard.vue';
import card from '../components/card.vue';
</script>

<template>
  <div class="wrapper">
    <MainCard />
    <card
      v-for="i in 10"
      :key="i"
      class="on-surface-text title-medium"
      :style="{
        width: '80vw',
        maxWidth: '1000px',
        height: '100px',
      }"
    >
    </card>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
