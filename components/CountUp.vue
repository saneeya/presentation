<script setup lang="ts">
import { ref, onActivated, onDeactivated, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  to: number
  duration?: number   // ms
  prefix?: string
  suffix?: string
  decimals?: number
}>(), {
  duration: 1400,
  prefix: '',
  suffix: '',
  decimals: 0,
})

const displayed = ref(0)
let raf: number | null = null

function startCount() {
  if (raf) cancelAnimationFrame(raf)
  displayed.value = 0
  const start = performance.now()
  const end = props.to

  function tick(now: number) {
    const progress = Math.min((now - start) / props.duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    displayed.value = eased * end
    if (progress < 1) {
      raf = requestAnimationFrame(tick)
    } else {
      displayed.value = end
    }
  }

  raf = requestAnimationFrame(tick)
}

onMounted(startCount)
onActivated(startCount)
onDeactivated(() => { if (raf) cancelAnimationFrame(raf) })
onUnmounted(() => { if (raf) cancelAnimationFrame(raf) })

function fmt(n: number) {
  return n.toFixed(props.decimals)
}
</script>

<template>
  <span>{{ prefix }}{{ fmt(displayed) }}{{ suffix }}</span>
</template>
