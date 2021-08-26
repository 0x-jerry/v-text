<script lang="ts" setup>
import { computed, reactive } from 'vue'

const data = reactive({
  'c-primary-1': '#ebf5ff',
  'c-primary-2': '#add6ff',
  'c-primary': '#5cb0ff',
  'c-primary-4': '#339cff',
  'c-primary-5': '#007ef5',

  'c-white': '#ffffff',

  'c-bg': '#ffffff',

  'c-gray-1': '#f5f5f5',
  'c-gray-2': '#d6d6d6',
  'c-gray': '#adadad',
  'c-gray-4': '#999999',
  'c-gray-5': '#858585',
})

const theme = computed(() => {
  const variables = Object.keys(data)

  return variables.map((key) => `--${key}: ${(data as any)[key]};`).join('')
})
</script>

<template>
  <div class="t-theme" :style="theme">
    <slot />
  </div>
</template>
<style></style>

<style lang="less">
@import url(https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.206/distr/fira_code.css);

.t-theme {
  font-size: 16px;
  line-height: 1.2em;

  * {
    user-select: none;
    font-family: 'Fira Code', monospace;
  }

  // .t-scroll::-webkit-scrollbar {
  //   width: 2px;
  // }

  // .t-scroll::-webkit-scrollbar-thumb {
  //   background-color: #bbbbbb;
  //   border-radius: 1px;
  // }

  // .t-scroll::-webkit-scrollbar-track {
  //   background: none;
  // }
}
</style>
