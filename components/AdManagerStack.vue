<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed } from 'vue'
import InviteClickGap from './InviteClickGap.vue'

const props = withDefaults(
  defineProps<{
    images?: string[]
    compact?: boolean
  }>(),
  {
    images: () => [
      '../public/admanager1.png',
      '../public/admanager2.png',
      '../public/admanager3.png',
      '../public/admanager4.png',
    ],
    compact: false,
  },
)

const { clicks } = useNav()

/** Clicks 0 = empty; 1..N = show that many layers (N = images.length). Needs N+1 gaps so total = N. */
const gapIndices = computed(() =>
  [...Array(Math.max(0, props.images.length + 1)).keys()],
)

const visibleCount = computed(() =>
  Math.min(clicks.value, props.images.length),
)

function layerOpacity(idx: number, V: number) {
  if (idx >= V)
    return 0
  const depthFromTop = V - 1 - idx
  if (depthFromTop === 0)
    return 1
  if (depthFromTop === 1) {
    /* Third image (idx 2) sits here when the fourth is on top — dim a bit more */
    if (idx === 2 && V >= 4)
      return 0.08
    return 0.16
  }
  return 0.07
}
</script>

<template>
  <InviteClickGap v-for="i in gapIndices" :key="i" />

  <div class="ad-manager-stack" :class="{ 'ad-manager-stack--compact': props.compact }">
    <div class="ad-manager-stack__viewport">
      <div class="ad-manager-stack__pile">
        <div
          v-for="(src, idx) in images"
          :key="idx"
          class="ad-manager-stack__layer"
          :class="{
            'ad-manager-stack__layer--on': idx < visibleCount,
            'ad-manager-stack__layer--off': idx >= visibleCount,
          }"
          :style="{
            zIndex: 10 + idx,
            '--layer-i': idx,
            opacity: layerOpacity(idx, visibleCount),
          }"
        >
          <img :src="src" alt="" class="ad-manager-stack__img">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ad-manager-stack {
  --stack-nudge-x: 14px;
  --stack-nudge-y: -14px;
  --stack-enter-x: min(72vw, 52rem);
  --stack-pull-down: 0.5rem;
  --ad-stack-motion-ms: 560ms;
  --ad-stack-motion-ease: cubic-bezier(0.33, 1, 0.68, 1);
  width: 100%;
  box-sizing: border-box;
  margin-top: 2.25rem;
  padding-bottom: 1rem;
}

/* Compact mode: less margin so a heading above doesn't squeeze the images */
.ad-manager-stack--compact {
  --stack-pull-down: 2rem; /* push images down within the compact viewport */
  margin-top: 0;
  padding-bottom: 0;
}

.ad-manager-stack--compact .ad-manager-stack__viewport {
  height: 385px;
  min-height: 385px;
  padding-bottom: 2.5rem;
  overflow: visible;
}

.ad-manager-stack__viewport {
  /* visible so filter: drop-shadow is not clipped at the bottom */
  overflow: visible;
  width: 100%;
  min-height: min(52vh, 36rem);
  height: min(52vh, 36rem);
  padding: 0.75rem 0 3.25rem;
  box-sizing: border-box;
}

.ad-manager-stack__pile {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
}

.ad-manager-stack__layer {
  position: absolute;
  left: 50%;
  top: calc(50% + var(--stack-pull-down));
  width: min(80%, 40rem);
  max-width: 100%;
  height: 94%;
  max-height: 100%;
  box-sizing: border-box;
  pointer-events: none;
  transition:
    transform var(--ad-stack-motion-ms) var(--ad-stack-motion-ease),
    opacity calc(var(--ad-stack-motion-ms) * 0.85) var(--ad-stack-motion-ease);
  filter: drop-shadow(0 2px 6px rgb(0 0 0 / 0.04));
}

.ad-manager-stack__layer--off {
  opacity: 0 !important;
  transform: translate(
    calc(-50% + var(--stack-enter-x)),
    calc(-50% + var(--layer-i) * var(--stack-nudge-y))
  );
}

.ad-manager-stack__layer--on {
  transform: translate(
    calc(-50% + var(--layer-i) * var(--stack-nudge-x)),
    calc(-50% + var(--layer-i) * var(--stack-nudge-y))
  );
}

.ad-manager-stack__img {
  position: absolute;
  inset: 0;
  margin: auto;
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  object-position: center;
  border-radius: 0.75rem;
}
</style>
