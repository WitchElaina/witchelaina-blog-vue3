<script>
export default {
  name: 'ArticleContent',
  install: (app) => {
    app.component('ArticleContent', this);
  },
};
</script>

<script setup>
import card from './card.vue';
import { nextTick, onMounted, useSlots } from 'vue';

onMounted(() => {
  nextTick(() => {
    // 获取插槽
    const slotElement = useSlots().default()[0].el;
    // 获取所有markdown-it-code-copy类
    const codeCopyList = slotElement.querySelectorAll('.markdown-it-code-copy');
    // 遍历添加inner Html
    codeCopyList.forEach((item) => {
      item.innerHTML = '<i class="icon fa-solid fa-copy"></i>';
    });
  });
});
</script>

<template>
  <card class="article-card-wrapper" blur>
    <div class="markdown-body">
      <slot />
    </div>
  </card>
</template>

<style lang="scss">
.article-card-wrapper {
  .markdown-body {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 20px;
    background: none !important;

    h1,
    h2 {
      border-bottom: none !important;
    }
    p {
      font-size: 16px;
    }
    pre {
      position: relative;
      font-size: 14px;
      background-color: rgba(0, 0, 0, 0.8);
      .code-copy-button-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px;
        border-radius: 0 0 0 5px;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        user-select: none;
        cursor: pointer;
        i {
          color: #fff;
          font-size: 14px;
        }
      }

      &:hover {
        .code-copy-button-wrapper {
          opacity: 0.8;
        }
      }
    }
  }

  @media (max-width: 767px) {
    .markdown-body {
      padding: 15px;
    }
  }
}
</style>
