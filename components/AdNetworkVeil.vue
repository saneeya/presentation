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
    initNodes()
  }

  const NODE_COUNT = 18
  type Node = { x: number; y: number; vx: number; vy: number }
  type Conn = { a: number; b: number; prog: number; life: number; maxLife: number }
  let nodes: Node[] = []
  let conns: Conn[] = []
  let spawnTimer = 0

  function initNodes() {
    nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.035,
      vy: (Math.random() - 0.5) * 0.035,
    }))
    conns = []
  }

  function spawnConn() {
    const a = Math.floor(Math.random() * NODE_COUNT)
    let b = Math.floor(Math.random() * NODE_COUNT)
    if (b === a) b = (b + 1) % NODE_COUNT
    const maxLife = 280 + Math.random() * 160
    conns.push({ a, b, prog: 0, life: 0, maxLife })
    if (conns.length > 12) conns.shift()
  }

  function frame() {
    ctx.clearRect(0, 0, c.width, c.height)
    ctx.save()
    ctx.scale(dpr, dpr)

    nodes.forEach(n => {
      n.x += n.vx
      n.y += n.vy
      if (n.x < 0 || n.x > W) n.vx *= -1
      if (n.y < 0 || n.y > H) n.vy *= -1
    })

    spawnTimer++
    if (spawnTimer > 38) { spawnConn(); spawnTimer = 0 }

    conns.forEach(conn => {
      conn.life++
      const drawFrac = Math.min(1, conn.life / (conn.maxLife * 0.45))
      const fade = conn.life > conn.maxLife * 0.7
        ? 1 - (conn.life - conn.maxLife * 0.7) / (conn.maxLife * 0.3)
        : 1

      if (fade <= 0) return
      const na = nodes[conn.a], nb = nodes[conn.b]
      const mx = (na.x + nb.x) / 2
      const my = (na.y + nb.y) / 2 - Math.min(W, H) * 0.12

      ctx.beginPath()
      ctx.moveTo(na.x, na.y)
      const steps = 30
      for (let i = 1; i <= steps * drawFrac; i++) {
        const tt = i / steps
        const x = (1-tt)*(1-tt)*na.x + 2*(1-tt)*tt*mx + tt*tt*nb.x
        const y = (1-tt)*(1-tt)*na.y + 2*(1-tt)*tt*my + tt*tt*nb.y
        ctx.lineTo(x, y)
      }
      ctx.strokeStyle = `rgba(13,148,136,${fade * 0.22})`
      ctx.lineWidth = 1
      ctx.stroke()
    })

    conns = conns.filter(c => c.life < c.maxLife)

    nodes.forEach(n => {
      ctx.beginPath()
      ctx.arc(n.x, n.y, 2, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(13,148,136,0.28)'
      ctx.fill()
    })

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
