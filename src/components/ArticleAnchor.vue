<script>
export default {
  name: 'ArticleAnchor',
  install: (app) => {
    app.component('ArticleAnchor', this);
  },
};
</script>

<script setup>
import card from './card.vue';

defineProps({
  toc: Array,
});
</script>

<template>
  <card class="anchor-wrapper" blur>
    <div class="anchor-content">
      <div class="anchor-title headline-small">目录</div>
      <div class="anchor-list">
        <div
          class="anchor-item body-large"
          v-for="item in toc"
          :key="item.anchor"
          :style="{ paddingLeft: `${item.level * 10}px` }"
        >
          <a :href="`#${item.anchor}`">{{ item.content }}</a>
        </div>
      </div>
    </div>
  </card>
</template>

<style scoped lang="scss">
.anchor-wrapper {
  position: sticky;
  top: 100px;
  .anchor-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px;
    .anchor-title {
      font-weight: 600;
      margin-bottom: 10px;
    }
    .anchor-list {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      .anchor-item {
        a {
          text-decoration: none;
        }
      }
    }
  }
}
</style>
