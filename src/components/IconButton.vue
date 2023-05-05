<script setup>
import { ref } from 'vue';
const props = defineProps({
  icon: String,
  title: String,
  color: String,
  onClick: Function,
  size: {
    type: Number,
    default: 40,
  },
  debounce: {
    type: Number,
    default: 0,
  },
});

let debounceTimer = null;

const cursor = ref('pointer');

const onClickDebounce = () => {
  if (props.debounce) {
    // cursor
    cursor.value = 'wait';

    // debounce
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      props.onClick();
      cursor.value = 'pointer';
    }, props.debounce);
  } else {
    props.onClick();
  }
};
</script>

<script>
export default {
  name: 'IconButton',
  install(app) {
    app.component('IconButton', this);
  },
};
</script>

<template>
  <div
    class="wrapper"
    @click="onClickDebounce"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
      cursor,
    }"
  >
    <i :class="icon" :style="{ fontSize: `${size / 2}px` }" />
    <div
      class="state-layer"
      :style="{
        width: `${size}px`,
        height: `${size}px`,
      }"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    font-size: 20px;
  }

  .state-layer {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    overflow: hidden;
    background-color: var(--md-sys-color-on-surface);
    opacity: 0;
    z-index: 100;

    &:hover {
      opacity: var(--md-sys-state-hover-state-layer-opacity);
    }
    &:active {
      opacity: var(--md-sys-state-pressed-state-layer-opacity);
    }
  }
}
</style>
