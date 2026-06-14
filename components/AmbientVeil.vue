<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
let raf = 0
let ro: ResizeObserver | null = null

onMounted(() => {
  const c = canvas.value
  if (!c) return
  const ctx = c.getContext('2d')
  if (!ctx) return

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  let W = 0, H = 0

  function resize() {
    if (!c) return
    const r = c.getBoundingClientRect()
    W = r.width; H = r.height
    c.width = Math.max(1, Math.round(W * dpr))
    c.height = Math.max(1, Math.round(H * dpr))
  }
  resize()
  ro = new ResizeObserver(resize)
  ro.observe(c)

  const bands = [
    { yf: 0.20, amp: 16, freq: 0.020, phase: 0.0,  sp: 0.004, op: 0.07, w: 1.5 },
    { yf: 0.35, amp: 20, freq: 0.016, phase: 1.2,  sp: 0.003, op: 0.05, w: 1.2 },
    { yf: 0.50, amp: 14, freq: 0.022, phase: 2.5,  sp: 0.005, op: 0.08, w: 2.0 },
    { yf: 0.65, amp: 18, freq: 0.018, phase: 0.8,  sp: 0.003, op: 0.05, w: 1.2 },
    { yf: 0.80, amp: 12, freq: 0.024, phase: 3.8,  sp: 0.004, op: 0.06, w: 1.5 },
  ]

  let t = 0
  function frame() {
    ctx.clearRect(0, 0, c.width, c.height)
    ctx.save()
    ctx.scale(dpr, dpr)

    bands.forEach(b => {
      const yBase = H * b.yf
      ctx.beginPath()
      ctx.moveTo(0, yBase)
      for (let x = 0; x <= W; x += 2) {
        const y = yBase
          + Math.sin(x * b.freq + t * b.sp * 60 + b.phase) * b.amp
          + Math.sin(x * b.freq * 0.6 + t * b.sp * 40 + b.phase + 1) * (b.amp * 0.4)
        ctx.lineTo(x, y)
      }
      ctx.strokeStyle = `rgba(13,148,136,${b.op})`
      ctx.lineWidth = b.w
      ctx.stroke()
    })

    ctx.restore()
    if (reduce) return
    t += 0.03
    raf = requestAnimationFrame(frame)
  }
  frame()
})

onUnmounted(() => {
  cancelAnimationFrame(raf)
  ro?.disconnect()
})
</script>

<template>
  <div class="veil-root">
    <canvas ref="canvas" class="veil-canvas" aria-hidden="true" />
  </div>
</template>

<style scoped>
.veil-root {
  position: relative;
  flex: 1 1 0;
  width: 100%;
  height: 100%;
  min-height: 0;
}
.veil-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}
</style>
