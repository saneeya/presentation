<script setup lang="ts">
import { ref, watch } from 'vue'

const TABS = ['Context', 'Problem', 'Ideation', 'Outcome'] as const

const props = withDefaults(
  defineProps<{
    /** Tab index: 0 Context, 1 Problem, 2 Ideation, 3 Specs */
    initialIndex?: number
  }>(),
  { initialIndex: 0 },
)

function clampTabIndex(n: number) {
  return Math.min(Math.max(0, Math.floor(n)), TABS.length - 1)
}

const active = ref(clampTabIndex(props.initialIndex))

watch(() => props.initialIndex, (val) => {
  active.value = clampTabIndex(val ?? 0)
}, { immediate: true })
</script>

<template>
  <nav class="pill-tabs" aria-label="Case study sections">
    <div class="pill-tabs__track" role="tablist">
      <button
        v-for="(label, i) in TABS"
        :key="label"
        type="button"
        role="tab"
        :tabindex="active === i ? 0 : -1"
        :aria-selected="active === i"
        class="pill-tabs__tab"
        :class="{ 'pill-tabs__tab--active': active === i }"
        @click="active = i"
      >
        {{ label }}
      </button>
    </div>
  </nav>
</template>

<style scoped>
.pill-tabs {
  width: fit-content;
  max-width: min(100%, 40rem);
  min-width: min(100%, 30rem);
}

.pill-tabs__track {
  display: flex;
  align-items: stretch;
  width: 100%;
  max-width: none;
  gap: 0.25rem;
  padding: 0.28rem 0.38rem;
  background: #fff;
  border-radius: 9999px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.06), 0 2px 8px rgb(0 0 0 / 0.06);
  box-sizing: border-box;
}

.pill-tabs__tab {
  flex: 1 1 0;
  min-width: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: #94a3b8;
  padding: 0.4rem 0.7rem;
  border-radius: 9999px;
  transition:
    color 0.15s ease,
    background-color 0.15s ease;
}

.pill-tabs__tab:hover {
  color: #64748b;
}

.pill-tabs__tab:focus-visible {
  outline: 2px solid #e60024;
  outline-offset: 2px;
}

.pill-tabs__tab--active {
  background: #e60024;
  color: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.12);
}

.pill-tabs__tab--active:hover {
  color: #fff;
}
</style>
