<script lang="ts" setup>
defineProps<{
  loading?: boolean
}>()
</script>

<template>
  <button class="t-button">
    <slot />
  </button>
</template>

<style lang="less">
.t-button {
  outline: none;
  padding: 0.2em 0.3em;
  transition: border ease 0.4s, background-color ease 0.4s;

  border: 1px solid var(--c-gray);
  background: var(--c-white);

  &:focus {
    border-color: var(--c-primary-2);
    outline: none;
  }

  &:hover {
    border-color: var(--c-primary);
    background-color: var(--c-primary-1);
  }

  &:active {
    border-color: var(--c-primary);
    background-color: var(--c-primary-2);
  }

  &:disabled {
    cursor: not-allowed;
    color: var(--c-gray-4);
    border-color: var(--c-gray);
    background: var(--c-gray-1);
  }
}
</style>
