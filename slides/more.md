---
layout: default
transition: fade
---

<CaseStudyPillTabs class="-mt-10 mb-10 mx-auto" />

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

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs class="-mt-10 mb-10 mx-auto" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">User groups</h2>

<div
  class="user-groups-slide-cols grid w-full max-w-full grid-cols-1 gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] md:items-start md:gap-10"
>
  <div class="user-groups-list min-w-0 text-[1.5rem]">
    <ul>
      <li>Account Managers/Executives</li>
      <li>Sales Planners</li>
      <li>Ad Ops</li>
      <li>Customer Support</li>
    </ul>
  </div>
  <div class="min-w-0">
    <div
      class="w-full rounded-2xl bg-white px-8 py-6 text-left text-slate-700 shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] border border-slate-200/40"
    >
      <div class="text-[1.05rem] font-semibold tracking-wide text-[#e60024]">Common use cases:</div>
      <div class="user-groups-list mt-3 text-[1.05rem] font-normal">
        <ul>
          <li>Setting up campaigns based on legal &amp; contractual obligations</li>
          <li>Troubleshooting campaign delivery issues</li>
          <li>Troubleshooting why creative was rejected</li>
        </ul>
      </div>
    </div>
  </div>
</div>
