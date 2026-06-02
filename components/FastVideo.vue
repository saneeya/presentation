<script setup lang="ts">
import { onActivated, onMounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    src: string
    playbackRate?: number
    videoClass?: string
  }>(),
  {
    playbackRate: 3,
    videoClass: '',
  },
)

const videoRef = ref<HTMLVideoElement | null>(null)

function applyRate() {
  const video = videoRef.value
  if (!video)
    return
  if (video.playbackRate !== props.playbackRate)
    video.playbackRate = props.playbackRate
}

onMounted(() => {
  applyRate()
})

onActivated(() => {
  applyRate()
})
</script>

<template>
  <video
    ref="videoRef"
    :class="videoClass"
    autoplay
    loop
    muted
    playsinline
    preload="metadata"
    @loadedmetadata="applyRate"
    @canplay="applyRate"
    @play="applyRate"
    @playing="applyRate"
    @seeked="applyRate"
    @timeupdate="applyRate"
  >
    <source :src="src" type="video/mp4">
  </video>
</template>
