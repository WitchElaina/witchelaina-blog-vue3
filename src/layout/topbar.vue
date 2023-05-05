<template>
  <card class="topbar">
    <div class="wrapper">
      <div class="left">
        <div class="icon">
          <img :src="theme.avatar" alt="avatar" />
        </div>
        <div class="title">
          {{ site.title }}
        </div>
      </div>
      <div class="right">
        <router-button
          v-for="item in theme.nav"
          :key="item.text"
          :to="item.link"
        >
          {{ item.text }}
        </router-button>
      </div>
    </div>
  </card>
</template>

<script setup>
import { useData } from 'vitepress';
import card from '../components/card.vue';

const { theme, site } = useData();
</script>

<script>
export default {
  name: 'Topbar',
};
</script>

<style scoped lang="scss">
.wrapper {
  width: 80vw;
  max-width: 1000px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;

  .left {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    .icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 2px 10px 0 rgba(#000000, 0.5);
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .title {
      font-size: 20px;
      font-weight: 500;
    }
  }

  .right {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
}

.topbar {
  position: sticky;
  top: 0px;
  z-index: 100;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: rgba($color: #ffffff, $alpha: 0.7);
    box-shadow: 0 6px 20px 0px rgba($color: #000000, $alpha: 0.7);
  }
}
</style>
