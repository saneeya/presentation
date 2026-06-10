<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /** Show when carousel click reaches this (0 = first image; 3 = fourth image) */
    showAtClick?: number
  }>(),
  {
    showAtClick: 3,
  },
)

const { clicks } = useNav()
const visible = computed(() => clicks.value >= props.showAtClick)
</script>

<template>
  <div
    class="carousel-sync-bullet rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3"
    :class="{ 'carousel-sync-bullet--on': visible }"
  >
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span><slot /></span>
  </div>
</template>

<style scoped>
.carousel-sync-bullet {
  opacity: 0;
  transform: translateY(0.35rem);
  transition:
    opacity 480ms cubic-bezier(0.33, 1, 0.68, 1),
    transform 480ms cubic-bezier(0.33, 1, 0.68, 1);
}

.carousel-sync-bullet--on {
  opacity: 1;
  transform: translateY(0);
}
</style>
