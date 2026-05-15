<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'
import InviteClickGap from './InviteClickGap.vue'

const props = withDefaults(
  defineProps<{
    images?: string[]
  }>(),
  {
    images: () => [
      '../public/invite1.png',
      '../public/invite2.png',
      '../public/invite3.png',
      '../public/invite4.png',
      '../public/invite5.png',
      '../public/invite6.png',
    ],
  },
)

const { clicks } = useNav()

const displayImages = computed(() => props.images)
const stage = computed(() => Math.min(clicks.value, displayImages.value.length - 1))

type CardState = 'main' | 'nudged' | 'off-left' | 'off-right'

function cardState(idx: number): CardState {
  const s = stage.value
  if (idx === s)     return 'main'
  if (idx === s - 1) return 'nudged'
  if (idx < s - 1)   return 'off-left'
  return 'off-right'
}

function cardZ(idx: number): number {
  const s = stage.value
  if (idx === s)     return 3
  if (idx === s - 1) return 2
  return 1
}
</script>

<template>
  <InviteClickGap v-for="i in displayImages.length" :key="i" />

  <!--
    CSS Grid stacks all cards in the same cell so the row height is driven
    by the tallest image — no fixed bounding box, no clipping.
    Off-screen cards overflow the grid and get clipped by the Slidev slide.
  -->
  <div class="push-reveal mt-4">
    <div
      v-for="(src, idx) in displayImages"
      :key="idx"
      class="push-reveal__card"
      :class="`push-reveal__card--${cardState(idx)}`"
      :style="{ zIndex: cardZ(idx) }"
    >
      <img :src="src" alt="" class="push-reveal__img" />
    </div>
  </div>
</template>

<style scoped>
/* Grid container — height is driven by image content, not a fixed box.
   The left-edge mask fades out the nudged card's peek in the correct
   position (relative to the container's left edge, not the card itself). */
.push-reveal {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  position: relative;
  width: 100%;
  padding-bottom: 32px; /* room for image drop-shadow to breathe */
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%);
          mask-image: linear-gradient(to right, transparent 0%, black 12%);
}

/*
  width: fit-content so the card exactly wraps its image — translateX %
  then maps to the real image width for both portrait and landscape.
  margin-left: 20% anchors ALL cards to the same left edge, which means
  the nudged card's right edge always clears the main card's left edge
  (the gap = 8% of the card's own width).
*/
.push-reveal__card {
  grid-column: 1;
  grid-row: 1;
  position: relative;
  width: fit-content;
  max-width: 62%;
  margin-left: 20%;
  transform-origin: center top;
  transition:
    transform 0.62s cubic-bezier(0.33, 1, 0.68, 1),
    opacity   0.42s ease;
  will-change: transform, opacity;
}

/* ── States ─────────────────────────────────────────────
   translateX % is relative to the card's fit-content width
   (= the actual rendered image width), so percentages work
   correctly for both portrait and landscape images.
*/
.push-reveal__card--off-right {
  transform: translateX(140%);
  opacity: 0;
}

.push-reveal__card--main {
  transform: translateX(0) scale(1);
  opacity: 1;
}

.push-reveal__card--nudged {
  transform: translateX(-108%) scale(0.97);
  opacity: 0.82;
}

.push-reveal__card--off-left {
  transform: translateX(-140%) scale(0.92);
  opacity: 0;
}

/* Image: landscape fills card's max-width cap; portrait is constrained
   by max-height and renders narrower — the fit-content card wraps it. */
.push-reveal__img {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 395px;
  border-radius: 0.85rem;
  box-shadow: 0 3px 14px rgb(0 0 0 / 0.07);
}

</style>
