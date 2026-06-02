<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<{
  to: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
}>(), {
  duration: 1400,
  prefix: '',
  suffix: '',
  decimals: 0,
})

const displayed = ref(props.to)
const el = ref<HTMLElement | null>(null)
let raf: number | null = null
let timer: ReturnType<typeof setTimeout> | null = null
let observer: IntersectionObserver | null = null
let hasRun = false

function startCount() {
  if (raf) cancelAnimationFrame(raf)
  if (timer) clearTimeout(timer)
  displayed.value = 0

  timer = setTimeout(() => {
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
  }, 200)
}

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    const entry = entries[0]
    if (entry.isIntersecting) {
      // Reset so it replays every time the slide becomes visible
      hasRun = false
      startCount()
    }
  }, { threshold: 0.5 })

  if (el.value) observer.observe(el.value)
})

onUnmounted(() => {
  observer?.disconnect()
  if (raf) cancelAnimationFrame(raf)
  if (timer) clearTimeout(timer)
})

function fmt(n: number) {
  return n.toFixed(props.decimals)
}
</script>

<template>
  <span ref="el">{{ prefix }}{{ fmt(displayed) }}{{ suffix }}</span>
</template>
