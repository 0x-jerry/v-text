<script setup lang="ts">
defineProps({
  title: String,
  color: {
    default: '#ffffff',
  },
})
</script>

<template>
  <div class="t-container" :data-title="title">
    <slot />
  </div>
</template>

<style lang="less">
.t-container {
  position: relative;
  margin: 15px;
  padding: 15px 10px;
  border: 1px solid var(--c-gray);
  background: var(--c-gb);

  &::before {
    content: attr(data-title);
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(10px, -50%);
    background: var(--c-bg);
    padding: 0 2px;
  }
}
</style>
