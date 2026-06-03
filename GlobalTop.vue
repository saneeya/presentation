<script setup lang="ts">
import { computed, ref, watch, nextTick, onMounted, onUnmounted } from 'vue'
import { useNav } from '@slidev/client'

const { currentPage } = useNav()

const TABS1 = ['Background', 'Problem', 'Ideation', 'The Journey'] as const
const TABS2 = ['Problem', 'Concepts', 'Final', 'Takeaway'] as const

const activeTabs = computed(() => {
  const p = currentPage.value
  if (p >= 6  && p <= 39) return TABS1
  if (p >= 41 && p <= 56) return TABS2
  return null
})

const TABS = computed(() => activeTabs.value ?? TABS1)

const tabIndex = computed<number | null>(() => {
  const p = currentPage.value
  // Case study 1
  if (p >= 6  && p <= 8)  return 0
  if (p >= 9  && p <= 12) return 1
  if (p >= 13 && p <= 24) return 2
  if (p >= 25 && p <= 39) return 3
  // Case study 2
  if (p >= 41 && p <= 43) return 0
  if (p >= 44 && p <= 52) return 1
  if (p >= 53 && p <= 55) return 2
  if (p === 56)            return 3
  return null
})

const trackRef = ref<HTMLElement | null>(null)
const pillStyle = ref({ width: '0px', left: '0px', opacity: '0' })

function updatePill() {
  if (!trackRef.value || tabIndex.value === null) return
  const tabs = trackRef.value.querySelectorAll<HTMLElement>('.gt-tab')
  const active = tabs[tabIndex.value]
  if (!active) return
  pillStyle.value = {
    width:   `${active.offsetWidth}px`,
    left:    `${active.offsetLeft}px`,
    opacity: '1',
  }
}

let ro: ResizeObserver | null = null
watch(tabIndex, () => nextTick(updatePill))
onMounted(() => {
  nextTick(updatePill)
  if (trackRef.value) {
    ro = new ResizeObserver(() => updatePill())
    ro.observe(trackRef.value)
  }
})
onUnmounted(() => ro?.disconnect())
</script>

<template>
  <Transition name="gt-fade">
    <div v-if="tabIndex !== null" class="gt-wrap" aria-hidden="true">
      <div class="gt-track" ref="trackRef">
        <!-- sliding pill background -->
        <div class="gt-pill" :style="pillStyle" />
        <!-- tab labels -->
        <div
          v-for="(label, i) in TABS"
          :key="label"
          class="gt-tab"
          :class="{ 'gt-tab--active': tabIndex === i }"
        >
          {{ label }}
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.gt-wrap {
  position: absolute;
  top: 0.55rem;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
  z-index: 200;
  pointer-events: none;
}

.gt-track {
  position: relative;
  display: flex;
  align-items: stretch;
  gap: 0.18rem;
  padding: 0.2rem 0.28rem;
  background: #fff;
  border-radius: 9999px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.06), 0 2px 8px rgb(0 0 0 / 0.06);
  width: 480px;
  box-sizing: border-box;
}

/* Sliding pill — physically moves behind the labels */
.gt-pill {
  position: absolute;
  top: 0.2rem;
  height: calc(100% - 0.4rem);
  background: #e60024;
  border-radius: 9999px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 0.15);
  z-index: 0;
  transition:
    left    0.42s cubic-bezier(0.34, 1.3, 0.64, 1),
    width   0.3s  cubic-bezier(0.34, 1.3, 0.64, 1),
    opacity 0.2s  ease;
}

.gt-tab {
  position: relative;
  z-index: 1;
  flex: 1 1 0;
  min-width: 0;
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: #94a3b8;
  padding: 0.3rem 0.85rem;
  text-align: center;
  white-space: nowrap;
  transition: color 0.25s ease;
}

.gt-tab--active {
  color: #fff;
}

.gt-fade-enter-active,
.gt-fade-leave-active {
  transition: opacity 0.3s ease;
}
.gt-fade-enter-from,
.gt-fade-leave-to {
  opacity: 0;
}
</style>
