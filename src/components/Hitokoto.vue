<script>
export default {
  name: 'Hitokoto',
  install(app) {
    app.component('Hitokoto', this);
  },
};
</script>

<script setup>
import { onBeforeMount, onMounted } from 'vue';

import { getHitokoto } from '../utils/hitokoto';
import { ref } from 'vue';

import IconButton from './IconButton.vue';

import useClipboard from 'vue-clipboard3';

import VueTyper from './VueTyper.vue';

const props = defineProps({
  coolDown: {
    type: Number,
    default: 1000 * 3,
  },
  options: {
    type: Boolean,
    default: true,
  },
});

const hitokoto = ref({});
const hitokotoFrom = ref('');

const hitokotoFromOpacity = ref(1);

const refreshHitokoto = async () => {
  hitokoto.value = await getHitokoto();
};
const { toClipboard } = useClipboard();

const getHitokotoFrom = () => {
  let hitokotoStr = '';
  if (hitokoto.value.from || hitokoto.value.author) {
    hitokotoStr += '\t——';
    if (hitokoto.value.from) {
      hitokotoStr += '《' + hitokoto.value.from + '》';
    }
    if (hitokoto.value.author) {
      hitokotoStr += hitokoto.value.author;
    }
  }
  return hitokotoStr;
};

const copyCurrentHitokoto = () =>
  toClipboard(hitokoto.value.content + '\t' + getHitokotoFrom());

onBeforeMount(async () => {
  await refreshHitokoto();
});
</script>

<template>
  <div class="hitokoto-wrapper">
    <div class="content on-surface-text">
      <VueTyper
        :text="hitokoto.content"
        @onDeleteStart="
          () => {
            hitokotoFromOpacity = 0;
          }
        "
        @onTypeEnd="
          () => {
            hitokotoFrom = getHitokotoFrom();
            hitokotoFromOpacity = 1;
          }
        "
      />
    </div>
    <div
      class="info on-surface-variant-text"
      :style="{
        opacity: hitokotoFromOpacity,
      }"
    >
      <!-- <VueTyper :text="hitokotoFrom" :deleteInterval="50" :typeInterval="100" /> -->
      {{ hitokotoFrom }}
    </div>
    <div class="option" v-if="$props.options">
      <IconButton
        :size="25"
        icon="fa-solid fa-rotate-right"
        @click="refreshHitokoto"
        :debounce="1000"
      />
      <IconButton
        :size="25"
        icon="fa-solid fa-copy"
        @click="copyCurrentHitokoto"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hitokoto-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;

  &:hover {
    .option {
      opacity: 1;
    }
  }

  .content {
    height: 30px;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    max-width: 80vw;
    width: 100%;

    .is-typed span.cursor {
      background-color: var(--md-sys-color-on-surface);
    }
  }

  .info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 15px;
    gap: 5px;
    transition: opacity 0.5s ease-in-out;
    font-size: 14px;
  }

  .option {
    display: flex;
    flex-direction: row;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
}
</style>
