<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
  annotations: {
    label: string
    // target point on image as % (0–100)
    tx: number
    ty: number
    // label anchor position relative to image as % (can exceed 0–100 to go outside)
    lx: number
    ly: number
  }[]
}>()
</script>

<template>
  <div class="ann-wrap">
    <img :src="src" :alt="alt" class="ann-img" />
    <!-- SVG sits over the padded container; viewBox matches padded space -->
    <svg class="ann-svg" viewBox="0 0 120 110" preserveAspectRatio="none">
      <defs>
        <marker id="dot" markerWidth="4" markerHeight="4" refX="2" refY="2">
          <circle cx="2" cy="2" r="1.8" fill="#e60024" />
        </marker>
      </defs>

      <g v-for="(a, i) in annotations" :key="i">
        <!--
          Image occupies x: 10–110 (100 wide), y: 5–105 (100 tall) in this viewBox.
          Convert % → viewBox coords:  imgX = 10 + tx, imgY = 5 + ty
          Label anchor uses lx/ly the same way.
        -->
        <line
          :x1="10 + a.tx" :y1="5 + a.ty"
          :x2="10 + a.lx" :y2="5 + a.ly"
          stroke="#e60024" stroke-width="0.6" stroke-dasharray="2 1.2"
          marker-start="url(#dot)"
        />
        <text
          :x="10 + a.lx" :y="5 + a.ly"
          class="ann-label"
          :text-anchor="a.lx < a.tx ? 'end' : a.lx > a.tx ? 'start' : 'middle'"
          :dominant-baseline="a.ly > a.ty ? 'hanging' : a.ly < a.ty ? 'auto' : 'middle'"
        >{{ a.label }}</text>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.ann-wrap {
  position: relative;
  display: inline-block;
  /* padding gives space for labels outside the image */
  padding: 5% 10%;
}

.ann-img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 0.75rem;
  box-shadow: 0 2px 16px rgb(0 0 0 / 6%);
}

.ann-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;
}

.ann-label {
  font-family: inherit;
  font-size: 3.5px;
  font-weight: 700;
  fill: #3a4652;
  letter-spacing: 0.02em;
}
</style>
