<template>
  <div class="typer-wrapper">
    <span :class="$props.contentClassName" ref="typerContentNode">
      {{ typerText }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'VueTyper',
  install(app) {
    app.component(this);
  },
};
</script>

<script setup>
import { ref, watch } from 'vue';

const typerContentNode = ref(null);

const typerText = ref('');

const props = defineProps({
  text: {
    type: String,
    require: true,
    default: 'Vue Typer Default Text.',
  },
  cursor: {
    type: Boolean,
    require: false,
    default: true,
  },
  typeInterval: {
    type: Number,
    require: false,
    default: 200,
  },
  deleteInterval: {
    type: Number,
    require: false,
    default: 50,
  },
  contentClassName: {
    type: String,
    require: false,
    default: 'typer-content',
  },
});

const emits = defineEmits([
  'onTypeStart',
  'onTypeEnd',
  'onDeleteStart',
  'onDeleteEnd',
]);

const start = () => {
  // 触发事件
  emits('onTypeStart');

  // 初始化
  let index = 0;
  // 保存文本防止执行过程中被修改
  let text = props.text;

  typerText.value = '';
  typerContentNode.value.classList.add('cursor-blink');
  // 开始打字
  const timer = setInterval(() => {
    typerText.value += text[index];
    index++;
    if (index >= props.text.length) {
      // 完成
      clearInterval(timer);

      // 触发打字完成事件
      typerContentNode.value.classList.remove('cursor-blink');
      emits('onTypeEnd');
    }
  }, props.typeInterval);
};

const deleteText = () => {
  // 触发事件
  emits('onDeleteStart');

  // 开始删除
  const timer = setInterval(() => {
    typerContentNode.value.classList.add('cursor-blink');
    typerText.value = typerText.value.slice(0, typerText.value.length - 1);
    if (typerText.value.length === 0) {
      // 完成
      clearInterval(timer);

      // 触发删除完成事件
      typerContentNode.value.classList.remove('cursor-blink');
      emits('onDeleteEnd');
      start();
    }
  }, props.deleteInterval);
};

// 监听text,变化时删除原先的文本并打印新文本
watch(
  () => props.text,
  () => {
    deleteText();
  },
);
</script>

<style scoped lang="scss">
@keyframes blink {
  50% {
    border-right-color: transparent;
  }
}

.cursor-blink {
  border-right: 2px solid;
  animation: blink 1.5s infinite;
}
</style>
