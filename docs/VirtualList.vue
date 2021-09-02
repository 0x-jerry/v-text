<template>
  <div ref="cEl" class="container">
    <div
      class="item"
      v-for="o in data.current"
      :key="o.id"
      :data-id="o.id"
      :style="`min-height: ${o.height}px`"
    >
      <slot
        name="content"
        :data="o.data"
        v-if="o.render"
        :onHeightChanged="heightChanged"
      ></slot>
    </div>

    <div class="fixed top-full" v-if="data.render.length">
      <div class="item" v-for="o in data.render" :key="o.id" :data-id="o.id">
        <slot name="content" :data="o" :onHeightChanged="heightChanged"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, PropType, reactive, ref } from 'vue'
import { throttle } from 'lodash'

const props = defineProps({
  items: {
    type: Array as PropType<any[]>,
    required: true,
  },
})

interface Item<T = any> {
  render: boolean
  id: string
  height: number
  data: T
}

const data = reactive({
  current: [] as Item<any>[],
  render: [] as any[],
})

const cEl = ref<HTMLDivElement>()

const sleep = (ts: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), ts))

function heightChanged(item: Item) {
  const node = cEl.value?.querySelector(`[data-id='${item.id}']`) as HTMLElement

  const i = data.current.find((d) => d.id === item.id)!

  i.height = (node.firstElementChild as HTMLElement).offsetHeight

  console.log('height changed', item.id, item.height)
}
function updateHeight() {
  const items = cEl.value?.querySelectorAll('.item')
  if (!items) {
    return
  }

  const removeIds: string[] = []

  for (let idx = 0; idx < items.length; idx++) {
    const node = items[idx] as HTMLElement

    const id = node.getAttribute('data-id')!

    const item = props.items.find((f) => f.id == id)!
    const hit = data.current.find((f) => f.id == id)

    if (hit && hit.height !== -1) {
      continue
      // hit.height = node.offsetHeight
    } else {
      data.current[id as any] = {
        id: item.id,
        render: false,
        height: node.offsetHeight,
        data: item,
      }
    }
    removeIds.push(id)
  }

  removeIds.forEach((id) => {
    const rIdx = data.render.findIndex((i) => i.id == id)
    if (rIdx >= 0) {
      data.render.splice(rIdx, 1)
    }
  })
}

onMounted(() => {
  const update = (e: MouseEvent) => {
    const items = cEl.value?.querySelectorAll('.item')
    if (!items || !cEl.value) {
      return
    }

    let top = cEl.value.offsetTop

    const gap = 500
    const y = window.scrollY

    data.current.forEach((n) => {
      top += n.height

      const inView = top > y - gap && top < y + window.innerHeight + gap

      n.render = inView
    })
  }

  window.onwheel = throttle((e) => {
    const now = performance.now()
    update(e)

    console.log('update ts:', performance.now() - now)
  }, 50)
})

onMounted(async () => {
  let idx = 20
  const unit = 100

  data.current.push(
    ...props.items.slice(0, idx).map((n) => ({
      id: n.id,
      height: -1,
      render: true,
      data: n,
    }))
  )

  while (idx <= props.items.length) {
    data.render.push(...props.items.slice(idx, idx + unit))
    await sleep(10)
    updateHeight()

    idx += unit
  }

  console.log('[---------------] pre-render over')
})
</script>
