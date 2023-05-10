<script setup>
import card from '../components/card.vue';
import Hitokoto from '../components/Hitokoto.vue';
import IconButton from '../components/IconButton.vue';
import TextNav from '../components/TextNav.vue';
import { useConfig } from '../config';
import { ref, watch, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const { site } = useConfig();

const click = (link) => {
  window.open(link);
};

const curNav = ref('');

const folded = ref(false);

const router = useRouter();

const foldedMutex = ref(false);

watch(
  () => curNav.value,
  (val) => {
    console.log(val);
    if (val === 'home') {
      folded.value = false;
    } else {
      folded.value = true;
    }
  },
);

// 监听向下滚动
// const wheelHandler = (e) => {
//   if (foldedMutex.value) {
//     return;
//   }
//   e.preventDefault();
//   if (e.deltaY > 0) {
//     folded.value = true;
//   } else if (e.deltaY < 0) {
//     if (window.pageYOffset === 0) {
//       folded.value = false;
//     }
//   }
// };

// 挂载
// onMounted(() => {
//   window.addEventListener('wheel', wheelHandler);
//   window.addEventListener('transitionstart', () => {
//     foldedMutex.value = true;
//   });
//   window.addEventListener('transitionend', () => {
//     foldedMutex.value = false;
//   });
// });

// 遍历key value
const navList = Object.entries(site.nav).map(([key, value]) => ({
  id: key,
  text: value.text,
  icon: value.icon,
}));
</script>

<template>
  <card
    class="card-wrapper on-surface-text"
    :class="{
      'card-wrapper-folded': folded,
    }"
    blur
  >
    <div class="avatar" @click="folded = !folded">
      <img :src="site.avatar" alt="avatar" :draggable="false" />
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
      <TextNav
        :navList="navList"
        v-model:curActive="curNav"
        @update:cur-active="$router.push('/' + $event)"
      />
    </div>
    <div class="hitokoto">
      <Hitokoto />
    </div>
  </card>
</template>

<style lang="scss" scoped>
.card-wrapper {
  position: relative;
  margin-top: 35vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
  font-family: 'Roboto', sans-serif;

  .avatar {
    position: absolute;
    top: -65px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 4px 10px 0 rgba(#000000, 0.5);
    z-index: 100;
    transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);

    &:hover {
      transform: scale(1.05);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .title {
    margin-top: 30px;
    text-shadow: 0 1px 10px rgba(#000000, 0.2);
  }

  .social-icons {
    display: flex;
    flex-direction: row;
  }

  .hitokoto {
    margin-top: 20px;
  }

  &.card-wrapper-folded {
    position: sticky;
    top: 0;
    z-index: 100;
    margin-top: 20px;
    flex-direction: row;
    gap: 10px;
    .avatar {
      position: relative;
      top: 0;
      width: 40px;
      height: 40px;
    }

    .title {
      margin-top: 0;
      flex: 1;
    }

    .social-icons,
    .hitokoto {
      display: none;
    }

    .title {
      font-size: 20px;
    }
  }
}
</style>
