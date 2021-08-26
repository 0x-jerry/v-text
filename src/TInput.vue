<script setup lang="ts">
defineProps<{ modelValue?: string }>()

const emit = defineEmits<{
  (e: 'update:modelValue', id: string | number): void
}>()

function updateValue(e: Event) {
  const t = e.target as HTMLInputElement

  emit('update:modelValue', t.value)
}
</script>

<template>
  <input class="t-input" :value="modelValue" @input="updateValue" />
</template>

<style lang="less">
.t-input {
  outline: none;
  padding: 2px;
  transition: border ease 0.4s;
  min-width: 200px;
  border: 1px solid var(--c-gray);
  background: var(--c-white);

  &:focus {
    border-color: var(--c-primary-2);
  }

  &:hover {
    border-color: var(--c-primary);
  }

  &:disabled {
    cursor: not-allowed;
    border-color: var(--c-gray);
    background: var(--c-bg);
  }
}
</style>
