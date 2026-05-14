<script setup lang="ts">
import { useNav } from '@slidev/client'
import {
  computed,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from 'vue'
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

/** Click indices reserved by InviteClickGap children before this component's strip logic */
const stripStage = computed(() =>
  Math.min(clicks.value, Math.max(0, props.images.length - 1)),
)

/** One gap per image; N gaps ⇒ Slidev total N−1 so clicks reach the final pair (e.g. 6 images ⇒ click 5). */
const gapIndices = computed(() => [...Array(Math.max(0, props.images.length)).keys()])

const viewportRef = ref<HTMLElement | null>(null)
const viewportWidthPx = ref(0)

/** Overrides computed translate while animating forward one stage (next panel sliding in from the right) */
const manualTranslatePx = ref<number | null>(null)
/** One frame without CSS transition so slide-in starts from V − W, not from 0 */
const suppressTrackTransition = ref(false)

function measureViewport() {
  viewportWidthPx.value = viewportRef.value?.clientWidth ?? 0
}

let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  nextTick(() => {
    measureViewport()
    resizeObserver = new ResizeObserver(() => measureViewport())
    if (viewportRef.value)
      resizeObserver.observe(viewportRef.value)
  })
})

onUnmounted(() => {
  resizeObserver?.disconnect()
})

/** Uniform gap between panels (track `gap` + translate `stepPx`) — same between all pairs. */
const PANEL_GAP_REM = 1.25

function rootRemPx() {
  if (typeof window === 'undefined')
    return 16
  return parseFloat(getComputedStyle(document.documentElement).fontSize || '16')
}

/** ~half viewport per panel (slightly under 50% so invites read a bit smaller), capped in rem */
const panelW = computed(() => {
  const V = viewportWidthPx.value
  if (!V || typeof window === 'undefined')
    return 0
  const rem = rootRemPx()
  return Math.min(V * 0.46, 28 * rem)
})

/** Horizontal space between adjacent invite images (must match track `gap`) */
const panelGapPx = computed(() => PANEL_GAP_REM * rootRemPx())

/** Distance from one panel’s start to the next (width + gap) */
const stepPx = computed(() => panelW.value + panelGapPx.value)

/**
 * Translate when not in a manual override. For s>=1, two panels span L=2W+G; if L>V, shift left
 * (negative X) so the pair fits and the trailing panel is not clipped.
 */
function stripTranslateRest(s: number, V: number, W: number, G: number) {
  if (!V || !W)
    return 0
  const S = W + G
  if (s <= 0)
    return V - W - G
  const pairStart = (s - 1) * S
  const pairWidth = 2 * W + G
  const tLeftAlign = -pairStart
  const tRightFit = V - pairStart - pairWidth
  return tLeftAlign <= tRightFit ? tLeftAlign : tRightFit
}

const translatePx = computed(() => {
  const V = viewportWidthPx.value
  const W = panelW.value
  const G = panelGapPx.value
  const s = stripStage.value
  if (!V || !W)
    return 0

  if (manualTranslatePx.value !== null)
    return manualTranslatePx.value

  return stripTranslateRest(s, V, W, G)
})

watch(
  stripStage,
  async (s, prevS) => {
    if (s > prevS) {
      const V = viewportWidthPx.value
      const W = panelW.value
      const G = panelGapPx.value
      if (V && W) {
        manualTranslatePx.value = stripTranslateRest(prevS, V, W, G)
        suppressTrackTransition.value = true

        await nextTick()
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            suppressTrackTransition.value = false
            manualTranslatePx.value = stripTranslateRest(s, V, W, G)
          })
        })
        return
      }
    }

    manualTranslatePx.value = null
  },
  { flush: 'sync' },
)

const trackStyle = computed(() => ({
  transform: `translateX(${translatePx.value}px)`,
  gap: panelGapPx.value ? `${panelGapPx.value}px` : undefined,
}))

function onTrackTransitionEnd(e: TransitionEvent) {
  if (e.propertyName !== 'transform')
    return
  if (e.target !== e.currentTarget)
    return
  if (manualTranslatePx.value !== null)
    manualTranslatePx.value = null
}

/**
 * Hug the flex gap so space between image edges matches `panelGapPx` (not panel width).
 * Left panel of the visible pair: flex-end; right: flex-start.
 */
function panelAlignClass(idx: number) {
  const s = stripStage.value
  const visible = s === 0 ? [0] : [s - 1, s]
  if (!visible.includes(idx))
    return 'invite-push-row__panel--idle'
  if (s === 0 || idx === s - 1)
    return 'invite-push-row__panel--to-next'
  return 'invite-push-row__panel--from-prev'
}
</script>

<template>
  <InviteClickGap v-for="i in gapIndices" :key="i" />

  <div class="invite-push-row mt-4">
    <div ref="viewportRef" class="invite-push-row__viewport">
      <div
        class="invite-push-row__track"
        :class="{ 'invite-push-row__track--no-transition': suppressTrackTransition }"
        :style="trackStyle"
        @transitionend="onTrackTransitionEnd"
      >
        <div
          v-for="(src, idx) in images"
          :key="idx"
          class="invite-push-row__panel"
          :class="panelAlignClass(idx)"
          :style="panelW ? { flex: `0 0 ${panelW}px`, width: `${panelW}px` } : undefined"
        >
          <img
            :src="src"
            alt=""
            class="invite-push-row__img"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.invite-push-row {
  --invite-motion-ms: 580ms;
  --invite-motion-ease: cubic-bezier(0.33, 1, 0.68, 1);
  width: 100%;
  box-sizing: border-box;
}

.invite-push-row__viewport {
  overflow: hidden;
  width: 100%;
  height: min(42vh, 26rem);
  box-sizing: border-box;
}

.invite-push-row__track {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  width: max-content;
  height: 100%;
  min-height: 0;
  transition: transform var(--invite-motion-ms) var(--invite-motion-ease);
  will-change: transform;
}

.invite-push-row__track--no-transition {
  transition: none;
}

.invite-push-row__panel {
  position: relative;
  min-width: 0;
  min-height: 0;
  height: 100%;
  box-sizing: border-box;
}

.invite-push-row__img {
  position: absolute;
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  object-position: center;
  margin: 0;
}

.invite-push-row__panel--to-next .invite-push-row__img {
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.invite-push-row__panel--from-prev .invite-push-row__img {
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.invite-push-row__panel--idle .invite-push-row__img {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

</style>
