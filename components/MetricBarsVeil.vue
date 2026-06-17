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

  const COLS = 28
  let targets: number[] = []
  let heights: number[] = []

  function resize() {
    if (!c) return
    const r = c.getBoundingClientRect()
    W = r.width; H = r.height
    c.width = Math.max(1, Math.round(W * dpr))
    c.height = Math.max(1, Math.round(H * dpr))
    targets = Array.from({ length: COLS }, () => 0.15 + Math.random() * 0.75)
    heights = targets.map(() => 0)
  }

  let t = 0
  function frame() {
    ctx.clearRect(0, 0, c.width, c.height)
    ctx.save()
    ctx.scale(dpr, dpr)

    t += 0.008
    const startX = W * 0.42
    const barsW = W - startX
    const bw = barsW / COLS

    for (let i = 0; i < COLS; i++) {
      heights[i] += (targets[i] - heights[i]) * 0.012 + Math.sin(t + i * 0.7) * 0.002
      const bh = heights[i] * H * 0.88
      const alpha = 0.03 + (heights[i] * 0.06)
      ctx.fillStyle = `rgba(13,148,136,${alpha})`
      ctx.fillRect(startX + i * bw + 1, H - bh, bw - 2, bh)
    }

    ctx.restore()
    if (reduce) return
    raf = requestAnimationFrame(frame)
  }

  resize()
  ro = new ResizeObserver(resize)
  ro.observe(c)
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
