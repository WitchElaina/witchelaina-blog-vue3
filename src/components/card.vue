<template>
  <div
    class="card-wrapper"
    :style="{
      backgroundColor,
      width,
      maxWidth,
      backdropFilter: blur ? 'blur(40px)' : 'none',
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<script setup>
import { nextTick, onMounted, ref, watch } from 'vue';
import { hexVarToRgba } from '../utils/hexToRgba';
import { useDark } from '@vueuse/core';

const props = defineProps({
  width: String,
  maxWidth: String,
  blur: Boolean,
});

const getBackgroundColor = () => {
  backgroundColor.value = hexVarToRgba(
    '--md-sys-color-surface',
    props.blur ? 0.8 : 0.95,
  );
};

const darkMode = useDark();

const backgroundColor = ref('');

onMounted(() => {
  watch(
    () => darkMode.value,
    () => {
      setTimeout(() => {
        getBackgroundColor();
      }, 50);
    },
    {
      immediate: true,
    },
  );
});
</script>

<style scoped lang="scss">
.card-wrapper {
  border-radius: 25px;

  padding: 20px;
  margin: 10px;

  box-shadow: 0 6px 10px 0 rgba($color: #000000, $alpha: 0.5);
  -webkit-box-shadow: 0 6px 10px 0 rgba($color: #000000, $alpha: 0.5);

  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 6px 12px 0 rgba($color: #000000, $alpha: 0.7);
    -webkit-box-shadow: 0 6px 12px 0 rgba($color: #000000, $alpha: 0.7);
  }

  // enable GPU acceleration
  transform: translateZ(0);
}
</style>
