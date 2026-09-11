<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const { currentPage, currentSlideRoute } = useNav()

const navHidden = computed(() => currentSlideRoute.value?.meta?.slide?.frontmatter?.hideGlobalNav === true)

/** Section slide ranges (inclusive) for each case study */
const SECTIONS: readonly { label: string; start: number; end: number }[] = [
  { label: 'About', start: 3, end: 5 },
  { label: 'Process', start: 6, end: 6 },
  // Case study: Campaign Creation Flow
  { label: 'Background', start: 9, end: 10 },
  { label: 'Problem',    start: 11, end: 13 },
  { label: 'Strategy',   start: 14, end: 16 },
  { label: 'Research',   start: 17, end: 18 },
  { label: 'Designs',    start: 19, end: 22 },
  { label: 'Cross-collaboration', start: 23, end: 25 },
  { label: 'UI Consolidation', start: 26, end: 32 },
  { label: 'User Testing', start: 33, end: 39 },
  { label: 'Final',      start: 40, end: 41 },
  { label: 'Takeaways',  start: 42, end: 43 },
]

const section = computed(() => {
  const p = currentPage.value
  return SECTIONS.find(s => p >= s.start && p <= s.end) ?? null
})

const stepNumber = computed(() =>
  section.value ? currentPage.value - section.value.start + 1 : 0,
)
const stepTotal = computed(() =>
  section.value ? section.value.end - section.value.start + 1 : 0,
)
const stepLabel = computed(() => section.value?.label ?? '')
const progressPct = computed(() =>
  stepTotal.value > 0 ? (stepNumber.value / stepTotal.value) * 100 : 0,
)
</script>

<template>
  <Transition name="gt-fade">
    <div v-if="section && !navHidden" class="gt-wrap" aria-hidden="true">
      <div class="gt-index">
        <span class="gt-num">{{ stepNumber }}</span>
        <span class="gt-total">/ {{ stepTotal }}</span>
        <span class="gt-label">{{ stepLabel }}</span>
      </div>
      <div class="gt-bar">
        <div class="gt-bar-fill" :style="{ width: `${progressPct}%` }" />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.gt-wrap {
  position: absolute;
  top: 1rem;
  right: 1.4rem;
  width: fit-content;
  z-index: 200;
  pointer-events: none;
  text-align: right;
  font-family: 'Space Grotesk', sans-serif;
}

.gt-index {
  display: flex;
  align-items: baseline;
  justify-content: flex-end;
  gap: 0.25rem;
  font-size: 0.6rem;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.gt-num {
  color: #0D9488;
  font-weight: 600;
}

.gt-total {
  color: #b3b1aa;
  font-weight: 500;
}

.gt-label {
  color: #3a4652;
  font-weight: 500;
  margin-left: 0.2rem;
}

.gt-bar {
  margin-top: 0.28rem;
  margin-left: auto;
  width: 5rem;
  height: 2px;
  border-radius: 2px;
  background: rgb(58 70 82 / 0.12);
  overflow: hidden;
}

.gt-bar-fill {
  height: 100%;
  border-radius: inherit;
  background: #0D9488;
  transition: width 0.45s cubic-bezier(0.22, 1, 0.36, 1);
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
