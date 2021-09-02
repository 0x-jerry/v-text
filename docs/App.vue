<script setup lang="ts">
import { reactive, ref } from 'vue'

const count = ref(0)

const vinput = ref('hello')

const checked = ref(false)

const theme = reactive({
  primaryColor: 348,
  bgColor: '#ffffff',
  textColor: '#000000',
  type: 'light',
})
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
