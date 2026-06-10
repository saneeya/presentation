<script setup lang="ts">
const TABS = ['Context', 'Problem', 'Process', 'Outcome'] as const

const props = withDefaults(
  defineProps<{ initialIndex?: number }>(),
  { initialIndex: 0 },
)

const active = Math.min(Math.max(0, props.initialIndex), TABS.length - 1)
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
  cursor: default;
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

.pill-tabs__tab--active {
  background: #0D9488;
  color: #fff;
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.12);
}
</style>
