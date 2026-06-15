<script setup lang="ts">
import { computed } from 'vue'
import { useNav } from '@slidev/client'

const { currentPage } = useNav()

/** Section slide ranges (inclusive) for each case study */
const SECTIONS: readonly { label: string; start: number; end: number }[] = [
  // Mini case study: Making Filters Functional
  { label: 'Problem',  start: 10, end: 14 },
  { label: 'Designs',  start: 15, end: 20 },
  { label: 'Outcome',  start: 21, end: 22 },
  // Case study: Campaign Creation Flow
  { label: 'Background',  start: 25, end: 27 },
  { label: 'Problem',     start: 28, end: 34 },
  { label: 'Ideation',    start: 35, end: 40 },
  { label: 'Final',       start: 41, end: 43 },
  { label: 'The Journey', start: 44, end: 59 },
  // Case study: Behind the Platform (Admin Portal)
  { label: 'Background', start: 64, end: 66 },
  { label: 'Discovery',  start: 67, end: 72 },
  { label: 'Designs',    start: 73, end: 79 },
  { label: 'Outcome',    start: 80, end: 84 },
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
    <div v-if="section" class="gt-wrap" aria-hidden="true">
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
  gap: 0.3rem;
  font-size: 0.72rem;
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
  margin-top: 0.32rem;
  margin-left: auto;
  width: 7.5rem;
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
