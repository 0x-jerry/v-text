<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

const vinput = ref('hello')

const checked = ref(false)
</script>

<template>
  <TContainer title="Button">
    <TButton @click="count++"> hello: {{ count }} </TButton>
    <TButton @click="count++" disabled> hello: {{ count }} </TButton>
  </TContainer>
  <TContainer title="Input">
    <TInput v-model="vinput" />
    <TInput :value="vinput" disabled />
  </TContainer>

  <TContainer title="Checkbox">
    <TCheckbox v-model="checked"> hello </TCheckbox>
    <TCheckbox disabled> world </TCheckbox>
    <TCheckbox disabled :checked="checked"> world </TCheckbox>
  </TContainer>
</template>

<style>
.t-container > * {
  margin-right: 5px;
}
</style>
