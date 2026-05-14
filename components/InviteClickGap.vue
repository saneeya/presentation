<script setup lang="ts">
/**
 * Reserves click steps on the current slide (same pattern as Slidev VClickGap).
 * Render N instances for N images so total clicks is N−1 and the last pair can show.
 */
import { Fragment, onMounted, onUnmounted } from 'vue'
import { useSlideContext } from '@slidev/client'

const props = defineProps({
  size: {
    type: [Number, String],
    default: 1,
  },
})

const { $clicksContext: clicks } = useSlideContext()
const id = `invite-gap-${Math.random().toString(36).slice(2, 11)}`

let delta = +props.size
if (Number.isNaN(delta)) {
  console.warn(`[InviteClickGap] Invalid size: ${props.size}`)
  delta = 1
}

onMounted(() => {
  const max = clicks.currentOffset + delta - 1
  clicks.register(id, { max, delta })
})

onUnmounted(() => {
  clicks.unregister(id)
})
</script>

<template>
  <Fragment />
</template>
