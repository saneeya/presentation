---
layout: default
transition: fade
hide: true
---


<div class="mt-4 flex w-full justify-center px-2">
  <video
    class="mx-auto block h-auto max-h-[min(460px,52vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_4px_24px_rgb(0_0_0_/_12%)] md:max-w-5xl"
    autoplay
    loop
    muted
    playsinline
    preload="metadata"
    @loadedmetadata="(e) => { const v = e.target; if (v instanceof HTMLVideoElement) v.playbackRate = 0.25 }"
    @play="(e) => { const v = e.target; if (v instanceof HTMLVideoElement) v.playbackRate = 0.25 }"
  >
    <source src="./assets/MCoverview.mp4" type="video/mp4" />
  </video>
</div>

<!--
very data dense, serves many users
-->

---
layout: default
transition: slide-left
hide: true
---

<CaseStudyPillTabs :key="s_dcm" class="-mt-10 mb-10 mx-auto" variant="campaign" :initial-index="0" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">What is Disney Campaign Manager?</h2>

<div class="mt-10 flex w-full justify-center px-2">
  <video
    class="mx-auto block h-auto max-h-[min(380px,44vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_2px_16px_rgb(0_0_0_/_8%)] md:max-w-4xl"
    controls
    playsinline
    preload="metadata"
  >
    <source src="./assets/DCMvid.mp4" type="video/mp4" />
  </video>
</div>

<!--
I will let Jimmy Kimmel explain
-->
