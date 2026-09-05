<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed } from 'vue'
import InviteClickGap from './InviteClickGap.vue'

const props = withDefaults(
  defineProps<{
    images?: string[]
    compact?: boolean
    /** Override compact viewport height in px (default 385) */
    viewportHeight?: number
    /** Override layer max-width e.g. "55rem" (default "40rem") */
    layerMaxWidth?: string
    /** Override layer width percentage e.g. "95%" (default "80%") */
    layerWidthPct?: string
    /** Vertical offset for layer anchor; negative moves images up (compact default "2rem") */
    pullDown?: string
    /** Extra translateY on the pile e.g. "-3rem" */
    pileShift?: string
    /** object-position for stacked images e.g. "top center" */
    imgPosition?: string
    /** Make the last image fade in instead of slide in */
    fadeInLast?: boolean
    /** Per-image scale factors, e.g. [0.8, 1, 1, 1] */
    imageScales?: number[]
    /** Omit drop shadow and image rounding (e.g. wireframe assets) */
    flat?: boolean
    /** Override opacity of the layer directly behind the active one (default 0.16) */
    dimOpacityNear?: number
    /** Override opacity of layers two or more behind the active one (default 0.07) */
    dimOpacityFar?: number
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

/** Clicks 0 = first image; 1..N-1 = reveal remaining layers. Needs N gaps total. */
const gapIndices = computed(() =>
  [...Array(Math.max(0, props.images.length)).keys()],
)

const visibleCount = computed(() =>
  Math.min(clicks.value + 1, props.images.length),
)

function normalizeLength(value: string | undefined, fallback: string) {
  if (!value)
    return fallback
  // Unitless numbers invalidate calc(50% + var(...)) and pin layers to top: 0.
  if (/^-?\d+(\.\d+)?$/.test(value.trim()))
    return `${value.trim()}px`
  return value
}

const rootStyle = computed(() => ({
  '--stack-pull-down': normalizeLength(
    props.pullDown,
    props.compact ? '2rem' : '0.5rem',
  ),
  '--stack-pile-shift': normalizeLength(props.pileShift, '0px'),
}))

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
    return props.dimOpacityNear ?? 0.16
  }
  return props.dimOpacityFar ?? 0.07
}

function imgStyle(idx: number) {
  const styles: Record<string, string> = {}
  if (props.imgPosition)
    styles.objectPosition = props.imgPosition
  const scale = props.imageScales?.[idx]
  if (scale != null && scale !== 1)
    styles.transform = `scale(${scale})`
  return Object.keys(styles).length ? styles : undefined
}
</script>

<template>
  <InviteClickGap v-for="i in gapIndices" :key="i" />

  <div class="ad-manager-stack" :class="{ 'ad-manager-stack--compact': props.compact, 'ad-manager-stack--flat': props.flat }" :style="rootStyle">
    <div
      class="ad-manager-stack__viewport"
      :style="props.viewportHeight ? { height: `${props.viewportHeight}px`, minHeight: `${props.viewportHeight}px` } : {}"
    >
      <div class="ad-manager-stack__pile">
        <div
          v-for="(src, idx) in images"
          :key="idx"
          class="ad-manager-stack__layer"
          :class="{
            'ad-manager-stack__layer--on': idx < visibleCount,
            'ad-manager-stack__layer--off': idx >= visibleCount,
            'ad-manager-stack__layer--fade-only': props.fadeInLast && idx === images.length - 1,
          }"
          :style="{
            zIndex: 10 + idx,
            '--layer-i': idx,
            opacity: layerOpacity(idx, visibleCount),
            ...(props.layerMaxWidth ? { width: `min(${props.layerWidthPct ?? '80%'}, ${props.layerMaxWidth})` } : {}),
          }"
        >
          <img
            :src="src"
            alt=""
            class="ad-manager-stack__img"
            :class="{ 'ad-manager-stack__img--flat': props.flat }"
            :style="imgStyle(idx)"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ad-manager-stack {
  --stack-nudge-x: 10px;
  --stack-nudge-y: 0px;
  --stack-enter-x: min(72vw, 52rem);
  --stack-pile-shift: 0;
  --ad-stack-motion-ms: 560ms;
  --ad-stack-motion-ease: cubic-bezier(0.33, 1, 0.68, 1);
  width: 100%;
  box-sizing: border-box;
  margin-top: 2.25rem;
  padding-bottom: 1rem;
}

/* Compact mode: less margin so a heading above doesn't squeeze the images */
.ad-manager-stack--compact {
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
  transform: translateY(var(--stack-pile-shift));
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

/* Fade-only layer sits on top of the previous layer (layer-i - 1) with no slide */
.ad-manager-stack__layer--fade-only.ad-manager-stack__layer--off,
.ad-manager-stack__layer--fade-only.ad-manager-stack__layer--on {
  transform: translate(
    calc(-50% + (var(--layer-i) - 1) * var(--stack-nudge-x)),
    calc(-50% + (var(--layer-i) - 1) * var(--stack-nudge-y))
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

.ad-manager-stack--flat .ad-manager-stack__viewport,
.ad-manager-stack--flat .ad-manager-stack__pile,
.ad-manager-stack--flat .ad-manager-stack__layer {
  background: transparent;
}

.ad-manager-stack--flat .ad-manager-stack__layer {
  filter: none !important;
}

.ad-manager-stack--flat .ad-manager-stack__img,
.ad-manager-stack__img--flat {
  border-radius: 0 !important;
  box-shadow: none !important;
  background: transparent !important;
}
</style>
