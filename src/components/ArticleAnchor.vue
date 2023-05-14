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

const customScrollIntoView = (element, offset) => {
  var rect = element.getBoundingClientRect();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  var top = rect.top + scrollTop - offset;

  window.scrollTo({
    top: top,
    behavior: 'smooth',
  });
};

const onClick = (anchor) => {
  const element = document.getElementById(anchor);
  customScrollIntoView(element, 100);
};
</script>

<template>
  <card class="anchor-wrapper" blur>
    <div class="anchor-content">
      <div class="anchor-title on-surface-text">目录</div>
      <div class="anchor-list">
        <div
          class="anchor-item body-large"
          v-for="item in toc"
          :key="item.anchor"
          @click="onClick(item.anchor)"
        >
          {{ item.content }}
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
      margin-bottom: 18px;
      font-size: 20px;
    }
    .anchor-list {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-left: 10px;
      gap: 8px;
      .anchor-item {
        cursor: pointer;
        user-select: none;
        color: var(--md-sys-color-on-surface-variant);
        &.active {
          color: var(--md-sys-color-primary);
        }
      }
    }
  }
}
</style>
