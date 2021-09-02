<script setup lang="ts">
import { reactive, ref } from 'vue'
import TestC from './TestC.vue'
import VirtualList from './VirtualList.vue'

const count = ref(0)

const vinput = ref('hello')

const checked = ref(false)

const theme = reactive({
  primaryColor: 348,
  bgColor: '#ffffff',
  textColor: '#000000',
  type: 'light',
})

const fakeList = reactive(
  new Array(100).fill(0).map((_, idx) => ({
    id: idx,
    check: false,
    items: new Array(100).fill(0).map((_, idx) => idx),
  }))
)

function tryCheck(id: number) {
  const hit = fakeList.find((f) => f.id === id)
  if (!hit) {
    return
  }

  hit.check = !hit.check
}
</script>

<template>
  <TTheme
    :primary="theme.primaryColor"
    :backgroundColor="theme.bgColor"
    :textColor="theme.textColor"
  >
    <TContainer title="Theme">
      <label>
        Text Color:
        <input type="color" v-model="theme.textColor" />
      </label>
    </TContainer>
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

    <VirtualList :items="fakeList">
      <template #content="{ data, onHeightChanged }">
        <TestC
          :data="data"
          @check="tryCheck(data.id)"
          @height-changed="onHeightChanged?.(data)"
        ></TestC>
      </template>
    </VirtualList>
  </TTheme>
</template>

<style>
.t-container > * {
  margin-right: 5px;
}

html,
body {
  background-color: v-bind('theme.bgColor');
}
</style>
