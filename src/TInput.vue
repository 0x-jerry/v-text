<script setup lang="ts">
defineProps<{ modelValue?: string }>()

const emit = defineEmits(['update:modelValue'])

function updateValue(e: Event) {
  const t = e.target as HTMLInputElement

  emit('update:modelValue', t.value)
}
</script>

<template>
  <input class="t-input" :value="modelValue" @input="updateValue" />
</template>

<style lang="less">
@import url('./basic.less');

.t-input {
  outline: none;
  padding: 2px;
  transition: border ease 0.4s;
  min-width: 200px;
  border: 1px solid @color-border;

  &:hover {
    border: 1px solid lighten(@color-blue, 5%);
  }

  &:focus {
    border: 1px solid @color-blue;
  }

  &:disabled {
    cursor: not-allowed;
    border: 1px solid @color-border;
  }
}
</style>
