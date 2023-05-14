<script>
export default {
  name: 'ToolboxCard',
  install(app) {
    app.component(this.name, this);
  },
};
</script>

<script setup>
import card from './card.vue';

// 切换深色模式
const toggleDarkMode = () => {
  // @media
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const darkMode = prefersDarkScheme.matches;
  const newScheme = darkMode ? 'light' : 'dark';
  document.body.classList.remove(`${newScheme}-mode`);
  document.body.classList.add(`${darkMode ? 'light' : 'dark'}-mode`);
};
</script>

<template>
  <card class="toolbox-wrapper" blur>
    <div class="toolbox-content">
      <div class="anchor-title on-surface-text">选项</div>
      <div class="toolbox-item" @click="toggleDarkMode">
        <div class="toolbox-item-icon">
          <i class="fa-solid fa-circle-half-stroke"></i>
        </div>
        <div class="toolbox-item-label">深色模式</div>
      </div>
      <div class="toolbox-item">
        <div class="toolbox-item-icon">
          <i class="fa-solid fa-share-from-square"></i>
        </div>
        <div class="toolbox-item-label">分享文章</div>
      </div>
    </div>
  </card>
</template>

<style lang="scss" scoped>
.toolbox-wrapper {
  margin: 10px;
  padding: 20px;

  .toolbox-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 10px;
    color: var(--md-sys-color-on-surface-variant);

    .anchor-title {
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 10px;
    }

    .toolbox-item {
      display: flex;
      align-items: center;
      padding-left: 15px;
      justify-content: flex-start;
      user-select: none;
      cursor: pointer;
      height: 25px;
      gap: 8px;
      .toolbox-item-icon {
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;

        i {
          font-size: 15px;
        }
      }
      .toolbox-item-label {
        line-height: 20px;
        font-size: 15px;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
}
</style>
