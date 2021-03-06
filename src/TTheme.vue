<script lang="ts" setup>
import { computed } from 'vue'

interface ThemeProps {
  primary?: number
  backgroundColor?: string
  textColor?: string
  size?: number
}

const props = defineProps<ThemeProps>()

const theme = computed(() => {
  const primaryColor = props.primary ?? 210

  const colors = {
    't-size': (props.size ?? 14) + 'px',
    'c-text': props.textColor ?? '#000000',
    'c-primary-1': `hsl(${primaryColor}deg, 100%, 95%)`,
    'c-primary-2': `hsl(${primaryColor}deg, 100%, 85%)`,
    'c-primary': `hsl(${primaryColor}deg, 100%, 70%)`,
    'c-primary-4': `hsl(${primaryColor}deg, 100%, 60%)`,
    'c-primary-5': `hsl(${primaryColor}deg, 100%, 50%)`,

    'c-white': '#ffffff',

    'c-bg': props.backgroundColor ?? 'hsl(0deg, 0%, 95%)',

    'c-gray-1': `hsl(0deg, 0%, 95%)`,
    'c-gray-2': `hsl(0deg, 0%, 85%)`,
    'c-gray': `hsl(0deg, 0%, 70%)`,
    'c-gray-4': `hsl(0deg, 0%, 60%)`,
    'c-gray-5': `hsl(0deg, 0%, 50%)`,
  }

  const variables = Object.keys(colors)

  return variables.map((key) => `--${key}: ${(colors as any)[key]};`).join('')
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
  font-size: var(--t-size);
  line-height: 1.2em;
  padding: 1px;
  color: var(--c-text);
  background: var(--c-bg);

  * {
    user-select: none;
    font-family: 'Fira Code', monospace;
  }

  div::-webkit-scrollbar {
    width: 12px;
    background-color: transparent;
  }

  div::-webkit-scrollbar-thumb {
    border-radius: 999px;
    transition: color ease 0.4s;
    background-clip: border-box;
    border: 3px solid transparent;

    background-color: var(--c-gray-2);
    background-clip: content-box;

    &:hover {
      background-color: var(--c-gray);
    }
  }

  div::-webkit-scrollbar-track {
    background: none;
  }
}
</style>
