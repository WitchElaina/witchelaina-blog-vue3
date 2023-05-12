<template>
  <div
    class="card-wrapper"
    :style="{
      backgroundColor,
      width,
      maxWidth,
      backdropFilter: blur ? 'blur(15px)' : 'none',
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
import { ref, watch } from 'vue';
import { hexVarToRgba } from '../utils/hexToRgba';

const props = defineProps({
  width: String,
  maxWidth: String,
  blur: Boolean,
});

// 当system preference变化时，更新背景色
const backgroundColor = ref('');
const darkMode = ref(window.matchMedia('(prefers-color-scheme: dark)').matches);
watch(
  darkMode,
  () => {
    backgroundColor.value = hexVarToRgba(
      '--md-sys-color-surface',
      props.blur ? 0.8 : 0.95,
    );
  },
  {
    immediate: true,
  },
);

if (window.matchMedia) {
  const colorSchema = window.matchMedia('(prefers-color-scheme: dark)');
  colorSchema.addListener((e) => {
    darkMode.value = e.matches;
  });
}
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
