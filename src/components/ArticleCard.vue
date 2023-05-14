<script>
export default {
  name: 'ArticleCard',
  install: (app) => {
    app.component('ArticleCard', this);
  },
};
</script>

<script setup>
import card from './card.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  id: String,
  title: String,
  content: String,
  date: String,
  tags: Array,
  views: Number,
});

const onClick = () => {
  router.push('/post/' + props.id);
};
</script>

<template>
  <card class="article-card-wrapper" blur>
    <div class="article-card-content on-surface-text">
      <div class="title" @click="onClick">
        {{ title }}
      </div>
      <div class="status">
        <div class="date icon-text-item" v-if="date">
          <div class="icon-wrapper">
            <i class="icon fa-solid fa-calendar"></i>
          </div>
          <div class="text-wrapper">
            {{ date }}
          </div>
        </div>
        <div class="views icon-text-item" v-if="views">
          <div class="icon-wrapper">
            <i class="icon fa-solid fa-eye"></i>
          </div>
          <div class="text-wrapper">
            {{ views }}
          </div>
        </div>
        <div class="tags icon-text-item" v-if="tags">
          <div class="icon-wrapper">
            <i class="icon fa-solid fa-tag"></i>
          </div>
          <div class="text-wrapper">
            <div class="tag" v-for="tag in tags" :key="tag">
              {{ tag }}
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        {{ content }}
      </div>
    </div>
  </card>
</template>

<style lang="scss" scoped>
.article-card-wrapper {
  transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
  font-family: 'Roboto', sans-serif;
  .article-card-content {
    position: relative;
    margin: 20px 40px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .title {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 10px;
      cursor: pointer;
    }

    .status {
      display: flex;
      align-items: center;
      gap: 20px;
      color: var(--md-sys-color-on-surface-variant);
      user-select: none;

      .icon-text-item {
        display: flex;
        flex-direction: row;
        gap: 5px;
      }

      .tags {
        .text-wrapper {
          display: flex;
          gap: 5px;
          .tag {
            padding: 2px 5px;
            line-height: 20px;
            text-align: center;
            border-radius: 5px;
            background-color: var(--md-sys-color-surface-variant);
            color: var(--md-sys-color-on-surface-variant);
          }
        }
      }

      .icon-wrapper {
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          font-size: 15px;
        }
      }
    }

    .content {
      font-size: 1rem;
      line-height: 1.5;
      color: var(--md-sys-color-on-surface-variant);
    }
  }
}

.icon-text-item {
  display: flex;
  align-items: center;
  gap: 10px;

  .icon-wrapper {
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      font-size: 15px;
    }
  }

  .text-wrapper {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 5px;
  }
}
</style>
