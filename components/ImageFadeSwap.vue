<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed } from 'vue'
import InviteClickGap from './InviteClickGap.vue'

const props = withDefaults(
  defineProps<{
    images?: string[]
    imgClass?: string
    alt?: string
  }>(),
  {
    images: () => [],
    alt: '',
  },
)

const { clicks } = useNav()

const stage = computed(() =>
  Math.min(clicks.value, Math.max(0, props.images.length - 1)),
)

const gapIndices = computed(() =>
  [...Array(Math.max(0, props.images.length)).keys()],
)
</script>

<template>
  <InviteClickGap v-for="i in gapIndices" :key="i" />

  <div class="image-fade-swap">
    <img
      v-for="(src, idx) in images"
      :key="idx"
      :src="src"
      :alt="idx === stage ? alt : ''"
      class="image-fade-swap__img"
      :class="[imgClass, { 'image-fade-swap__img--on': idx === stage }]"
    />
  </div>
</template>

<style scoped>
.image-fade-swap {
  display: grid;
  grid-template: 1fr / 1fr;
  justify-items: center;
}

.image-fade-swap__img {
  grid-area: 1 / 1;
  opacity: 0;
  transition: opacity 560ms cubic-bezier(0.33, 1, 0.68, 1);
}

.image-fade-swap__img--on {
  opacity: 1;
}
</style>
