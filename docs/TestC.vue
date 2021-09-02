<template>
  <div class="root">
    <label style="display: flex" @mousedown="$emit('check')">
      <h1>
        {{ data.id }}
      </h1>
      <input type="checkbox" :checked="data.check" @change="updateHeight" />
    </label>
    <div class="test" :style="`width: 100%; height: ${iData.height}px;`"></div>

    <div style="display: flex">
      <div v-for="o in data.items" :key="o">
        {{ o }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

defineProps<{
  data: {
    id: string
    check: boolean
    items: any[]
  }
}>()

const emits = defineEmits(['height-changed', 'check'])

const iData = reactive({
  height: 100,
})

function updateHeight() {
  iData.height = iData.height === 200 ? 100 : 200

  setTimeout(() => {
    emits('height-changed')
  }, 0)
}
</script>

<style></style>
