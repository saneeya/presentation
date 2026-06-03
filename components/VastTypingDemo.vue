<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const DELETE_TEXT = `Adsystem Example</AdSystem>
      <AdTitle>VAST 2.0</AdTitle>
      <Description>VAST 2.0</Description>`
const RETYPE_TEXT = `Hulu Ad Manager</AdSystem>
      <AdTitle>Hulu Ad Upload</AdTitle>
      <Description>Creative upload via VAST tag</Description>`

const before = `<VAST version="2.0">
  <Ad id="601364">
    <InLine>
      <AdSystem>`
const after = `
      <Error>http://myErrorURL/error</Error>
      <Impression>http://myTrackingURL/impression</Impression>
      <Creatives>
        <Creative AdID="12345">
          <Linear>
           <Duration>00:00:30</Duration>
            <TrackingEvents>
              <Tracking event="creativeView">http://myTrackingURL/creativeView</Tracking>
              <Tracking event="start">http://myTrackingURL/start</Tracking>
            </TrackingEvents>
            <VideoClicks>
              <ClickThrough>http://www.examplemedia.com</ClickThrough>
              <ClickTracking>http://myTrackingURL/click</ClickTracking>
            </VideoClicks>
            <MediaFiles>
             <MediaFile delivery="progressive" type="video/x-flv" bitrate="500" width="400" height="300">
        http://demo.examplemedia.com/video/acudeo/Carrot_400x300_500kb.flv
          </MediaFile>
         </MediaFiles>
          </Linear>
    </Creative>
     </Creatives>
   </InLine>
   </Ad>
</VAST>`

const middle = ref(DELETE_TEXT)
const showCursor = ref(false)
const root = ref<HTMLElement | null>(null)
let timeout: ReturnType<typeof setTimeout> | null = null
let observer: MutationObserver | null = null

function delay(ms: number) {
  return new Promise<void>(r => { timeout = setTimeout(r, ms) })
}

async function runAnimation() {
  middle.value = DELETE_TEXT
  showCursor.value = false
  await delay(600)
  showCursor.value = true
  await delay(500)

  for (let i = DELETE_TEXT.length; i >= 0; i--) {
    middle.value = DELETE_TEXT.slice(0, i)
    await delay(18)
  }
  await delay(200)
  for (let i = 1; i <= RETYPE_TEXT.length; i++) {
    middle.value = RETYPE_TEXT.slice(0, i)
    await delay(28)
  }
  await delay(800)
  showCursor.value = false
}

onMounted(() => {
  const page = root.value?.closest('.slidev-page') as HTMLElement | null
  if (!page) return

  observer = new MutationObserver(() => {
    const visible = page.style.display !== 'none'
    if (visible) {
      if (timeout) clearTimeout(timeout)
      runAnimation()
    } else {
      if (timeout) clearTimeout(timeout)
      showCursor.value = false
      middle.value = DELETE_TEXT
    }
  })

  observer.observe(page, { attributes: true, attributeFilter: ['style'] })
})

onUnmounted(() => {
  if (timeout) clearTimeout(timeout)
  observer?.disconnect()
})
</script>

<template>
  <div ref="root" class="vast-xml-box overflow-x-auto rounded-2xl bg-white px-5 py-4 font-mono text-[0.62rem] leading-snug text-[#e60024] anim-fade-up anim-d2">
    <pre class="m-0 whitespace-pre"><code>{{ before }}<span class="typed-region">{{ middle }}<span v-if="showCursor" class="cursor">|</span></span>{{ after }}</code></pre>
  </div>
</template>

<style scoped>
.typed-region { color: #1e40af; }
.cursor {
  display: inline-block;
  color: #e60024;
  animation: blink 0.6s step-end infinite;
  font-weight: bold;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}
</style>
