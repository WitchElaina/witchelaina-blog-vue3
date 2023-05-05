<template>
  <div class="nav-wrapper">
    <div
      class="nav-item-wrapper"
      :class="[nav.id === curActive ? 'nav-item-wrapper-active' : '']"
      v-for="nav in navList"
      :key="nav.id"
      @click="$emit('update:curActive', nav.id)"
    >
      <div class="nav-icon">
        <i :class="nav.icon"></i>
      </div>
      <div class="nav-text">
        {{ nav.text }}
      </div>
      <div class="nav-state-layer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextNav',
  install(app) {
    app.component('TextNav', this);
  },
};
</script>

<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  navList: {
    type: Array,
    default: () => [],
  },
  curActive: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:curActive']);

onMounted(() => {
  if (!props.curActive && props.navList.length > 0) {
    emit('update:curActive', props.navList[0].id);
  }
});
</script>

<style lang="scss" scoped>
.nav-wrapper {
  display: flex;
  flex-direction: row;
  user-select: none;
  margin: 5px;
  gap: 5px;

  .nav-item-wrapper {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px;
    gap: 5px;
    cursor: pointer;
    color: var(--md-sys-color-on-surface-variant);
    &-active {
      color: var(--md-sys-color-on-primary-container);
    }

    .nav-state-layer {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: var(--md-sys-color-on-secondary-container);
      opacity: 0;
      border-radius: 5px;

      &:hover {
        opacity: var(--md-sys-state-hover-state-layer-opacity);
      }

      &:active {
        opacity: var(--md-sys-state-pressed-state-layer-opacity);
      }
    }
  }
}
</style>
