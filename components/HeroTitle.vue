<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    /** Narrow column (e.g. two-cols title slide): slightly smaller type */
    compact?: boolean
  }>(),
  { compact: false },
)

const active = ref(false)
onMounted(() => {
  requestAnimationFrame(() => {
    active.value = true
  })
})
</script>

<template>
  <div class="hero-wrap" :class="{ 'hero-wrap--compact': props.compact }">
    <h1 class="hero-title" :class="{ 'hero-title--in': active }">
      <slot />
    </h1>
    <div
      v-if="$slots.subtitle || $slots.pill"
      class="hero-sub"
      :class="{ 'hero-sub--in': active }"
    >
      <div v-if="$slots.subtitle" class="hero-sub-stack">
        <slot name="subtitle" />
      </div>
      <div v-if="$slots.pill" class="hero-pill-row">
        <slot name="pill" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-wrap {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
}

.hero-wrap--compact {
  height: 100%;
  flex: 1 1 0;
  min-height: 0;
  gap: 1.25rem;
}

.hero-wrap--compact .hero-title {
  font-size: clamp(2.15rem, 4.6vw, 3.15rem);
}

.hero-wrap--compact .hero-sub {
  flex: 1 1 0;
  min-height: 0;
  margin-top: 2.5rem;
  font-size: clamp(1.35rem, 2.75vw, 1.65rem);
  max-width: 100%;
  gap: 0;
}

.hero-title {
  margin: 0;
  font-size: clamp(2.5rem, 5.5vw, 3.65rem);
  font-weight: 700;
  line-height: 1.1;
  color: #e60024;
  opacity: 0;
  transform: translateY(18px) scale(0.98);
  filter: blur(6px);
  transition:
    opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.75s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.75s cubic-bezier(0.22, 1, 0.36, 1);
}

.hero-title--in {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

/* Visual-only nudge: does not change flex layout, so .hero-sub stays put */
.hero-wrap--compact .hero-title.hero-title--in {
  transform: translateY(2rem) scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .hero-wrap--compact .hero-title.hero-title--in {
    transform: translateY(0) scale(1);
  }
}

.hero-sub {
  margin: 0;
  max-width: 36rem;
  font-size: 1.3rem;
  color: #3a4652;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.35rem;
  opacity: 0;
  transform: translateY(12px);
  transition:
    opacity 0.55s ease 0.2s,
    transform 0.55s cubic-bezier(0.22, 1, 0.36, 1) 0.2s;
}

.hero-sub-stack {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.35rem;
  width: 100%;
}

.hero-wrap--compact .hero-sub .hero-sub-stack {
  flex: 1 1 0;
  min-height: 0;
  padding-top: 5rem;
}

.hero-sub-stack :deep(p) {
  margin: 0;
  max-width: 100%;
}

.hero-sub-stack :deep(p:first-of-type) {
  color: #e60024;
  font-weight: 700;
}

.hero-wrap--compact .hero-sub .hero-sub-stack :deep(p:nth-of-type(2)) {
  font-size: clamp(1rem, 2vw, 1.22rem);
  line-height: 1.35;
}

.hero-wrap--compact .hero-sub .hero-pill-row {
  margin-top: auto;
  align-self: flex-start;
}

.hero-wrap--compact .hero-sub .hero-pill-row :deep(.hero-pill) {
  transform: translateY(2.35rem);
}

.hero-sub--in {
  opacity: 1;
  transform: translateY(0);
}
</style>
