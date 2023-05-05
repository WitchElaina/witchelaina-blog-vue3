<script setup>
import card from '../components/card.vue';
import Hitokoto from '../components/Hitokoto.vue';
import IconButton from '../components/IconButton.vue';
import TextNav from '../components/TextNav.vue';
import { useConfig } from '../config';
import { ref } from 'vue';

const { site } = useConfig();

const click = (link) => {
  window.open(link);
};

const curNav = ref('');

// 遍历key value
const navList = Object.entries(site.nav).map(([key, value]) => ({
  id: key,
  text: value.text,
  icon: value.icon,
}));
</script>

<template>
  <card class="card-wrapper on-surface-text">
    <div class="avatar">
      <img :src="site.avatar" alt="avatar" />
    </div>
    <div class="title display-small">
      {{ site.title }}
    </div>
    <div class="social-icons">
      <icon-button
        v-for="item in site.social"
        :key="item.name"
        :icon="item.icon"
        :onClick="() => click(item.link)"
      />
    </div>
    <div class="nav">
      <TextNav :navList="navList" v-model:curActive="curNav" />
    </div>
    <div class="hitokoto">
      <Hitokoto />
    </div>
  </card>
</template>

<style lang="scss" scoped>
.card-wrapper {
  position: relative;
  margin-top: 300px;
  width: 80vw;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .avatar {
    position: absolute;
    top: -60px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 2px 10px 0 rgba(#000000, 0.5);
    z-index: 100;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .title {
    margin-top: 40px;
  }

  .social-icons {
    display: flex;
    flex-direction: row;
  }

  .hitokoto {
    margin-top: 20px;
  }
}
</style>
