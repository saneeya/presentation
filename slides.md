---
theme: default
title: Code-first deck
head:
  - - link
    - rel: stylesheet
      href: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css
colorSchema: light
highlighter: shiki
transition: slide-left
aspectRatio: 16/9
fonts:
  sans: Montserrat
  mono: JetBrains Mono
  provider: google
  italic: true
  weights: [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ]
themeConfig:
  primary: '#0d9488'
defaults:
  layout: default
layout: two-cols
layoutClass: h-full
---

<div class="flex h-full min-h-0 flex-col py-10 pr-4">
  <div class="flex min-h-0 min-w-0 flex-1 flex-col">
<HeroTitle compact>
  <span style="color:#3a4652">Filtering</span> Through the Noise

  <template #subtitle>
    <p>Saneeya Khan</p>
    <p style="margin-top: -0.35rem">Senior Product Designer</p>
  </template>
  <template #pill>
    <span class="hero-pill">PORTFOLIO</span>
  </template>
</HeroTitle>
  </div>
</div>

::right::

<div class="flex h-full min-h-0 w-full flex-col pl-4">
<PinterestMasonry placement="title" />
</div>

<!--
hello

let me show you "real life UX" process

a few years ago threw a housewarming/halloween party
-->

---
transition: fade-out
layout: default
---

## My process

<InvitePushRow />

<!--
Invite -> wayfinding sign -> bathroom sign -> wifi -> QR Code -> google from

- went all out but out of scope: games, recipes
-no one took candy
- user feedback was great
-->

---
transition: slide-up
---

## Background

<AdManagerStack />

<!--
- Account Manager -> Campaign Creation -> Admin Portal -> MC Traffciking
- DCM for 4 years, grew from about $10m to $100m
- Now work on internal tooling
-->

---
layout: two-cols
layoutClass: h-full
transition: slide-left
---

<div class="slide-4-root flex h-full min-h-0 flex-col py-10 pr-4">
  <div class="flex min-h-0 min-w-0 flex-1 flex-col">
    <div class="flex h-full min-h-0 w-full max-w-md flex-1 flex-col items-start self-stretch py-6 pr-6 pl-0 md:max-w-xl md:py-8 md:pr-8 md:pl-0">
      <div class="mb-8 mt-20 text-3xl font-semibold tracking-tight text-[#3A4652] md:mt-24 md:text-4xl lg:mt-28 lg:text-5xl anim-fade-up"><span class="block">Making</span><span class="block whitespace-nowrap"><span class="text-[#e60024]">Filters</span> Functional</span></div>
      <div class="max-w-xs text-[28px] font-medium leading-snug text-[#3A4652]/85 anim-fade-up anim-d2">Redoing filters for a data-dense tool</div>
      <div class="mt-auto self-start anim-fade-up anim-d4">
        <span class="hero-pill">CASE STUDY</span>
      </div>
    </div>
  </div>
</div>

::right::

<div class="flex h-full min-h-0 w-full flex-col">
<PinterestMasonry :show-images="false" span-src="/FI.png" span-position="center 28%" :span-flex="0.8" :merge-right-stack="true" right-src="/MCFilters.gif" right-position="left center" left-top-src="/filter88.png" left-bottom-src="/datepicker.png" left-bottom-position="center 18%" />
</div>

<!--
- recent project which is in dev
-->

---
src: ./slides/more.md
---

---
layout: default
transition: fade
---

<CaseStudyPillTabs class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<div class="mt-4 flex w-full justify-center px-2 anim-fade-in-scale">
  <video
    class="mx-auto block h-auto max-h-[min(460px,52vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_2px_16px_rgb(0_0_0_/_6%)] md:max-w-5xl"
    autoplay
    loop
    muted
    playsinline
    preload="metadata"
    @loadedmetadata="(e) => { const v = e.target; if (v instanceof HTMLVideoElement) v.playbackRate = 0.5 }"
    @play="(e) => { const v = e.target; if (v instanceof HTMLVideoElement) v.playbackRate = 0.5 }"
  >
    <source src="./slides/assets/MCfilterexample.mp4" type="video/mp4" />
  </video>
</div>

<!--
- filters are one long scrolls
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<div class="mt-4 flex w-full justify-center px-2 anim-fade-in-scale">
  <img
    src="./slides/assets/Filtermap.png"
    alt="Filter map"
    class="mx-auto block h-auto max-h-[min(460px,52vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_2px_16px_rgb(0_0_0_/_6%)] md:max-w-4xl"
  />
</div>

<!--
- mapping it out help me categorize them
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">User feedback</h2>

<div class="grid grid-cols-2 grid-rows-2 auto-rows-fr gap-4 w-full">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d1">
    <i class="fa-brands fa-google text-[#e60024] text-[2rem]"></i>
    <span>Users were used to having custom filters in GAM (which we were trying to replace)</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d2">
    <i class="fa-solid fa-tags text-[#e60024] text-[2rem]"></i>
    <span>They wanted to filter by asset tags &amp; targeting values</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d3">
    <i class="fa-regular fa-square-caret-down text-[#e60024] text-[2rem]"></i>
    <span>Filter list is one long dropdown, a lot of scrolling</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d4">
    <i class="fa-solid fa-filter text-[#e60024] text-[2rem]"></i>
    <span>They wanted more granular filtering (AND/OR, IS, IS NOT, etc.)</span>
  </div>
</div>

<!--
- they really wanted boolean and more filter options
- wanted to share filters
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Technical issues</h2>

<div class="grid grid-cols-3 gap-4 max-w-4xl mt-16">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d1">
    <i class="fa-solid fa-filter-circle-xmark text-[#e60024] text-[2rem] self-center"></i>
    <span>Current filter behaviors were implemented inconsistently</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d2">
    <i class="fa-solid fa-layer-group text-[#e60024] text-[2rem] self-center"></i>
    <span>Filters were added on ad hoc on a case by case, field by field basis</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d3">
    <i class="fa-solid fa-expand text-[#e60024] text-[2rem] self-center"></i>
    <span>Filters were difficult to scale especially when new fields or data types were introduced</span>
  </div>
</div>

<!--
- new filters took a while to implement
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<div class="flex h-full w-full items-center justify-center">
  <div
    class="mx-auto w-full max-w-4xl rounded-2xl bg-white border border-slate-200/40 px-14 py-12 text-left text-[2rem] font-normal italic leading-snug text-[#e60024] shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-in-scale"
  >
    Filters were inconsistent, difficult to use, and did not have boolean (AND/OR) logic.
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs class="-mt-10 mb-10 mx-auto" :initial-index="2" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">My goals</h2>

<div class="flex flex-col gap-4 max-w-3xl mt-6">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d1">
    <i class="fa-regular fa-square text-slate-300 text-[1.5rem] shrink-0"></i>
    <span>Introduce a filter panel or some other new selection area</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d2">
    <i class="fa-regular fa-square text-slate-300 text-[1.5rem] shrink-0"></i>
    <span>Have consistent style for each type of filter (radio, multi-select, etc)</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d3">
    <i class="fa-regular fa-square text-slate-300 text-[1.5rem] shrink-0"></i>
    <span>Introduce boolean options (AND/OR)</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d4">
    <i class="fa-regular fa-square text-slate-300 text-[1.5rem] shrink-0"></i>
    <span>Enable users to save their filters and share them</span>
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs class="-mt-10 mb-10 mx-auto" :initial-index="2" />

<h2 class="user-groups-slide-heading m-0 mb-2">Existing patterns</h2>

<AdManagerStack :images="['./slides/assets/MCfilter1.png', './slides/assets/MCfilter2.png', './slides/assets/MCfilter3.png']" :compact="true" />

<!--
- legacy tool, ad load manager used for ad pods
- programmatic 
- asset review
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs class="-mt-10 mb-10 mx-auto" :initial-index="2" />

<div class="mt-4 flex w-full justify-center px-2 anim-fade-in-scale">
  <img
    src="./slides/assets/FI.png"
    alt="Advanced Filters"
    class="mx-auto block h-auto max-h-[min(440px,50vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_2px_16px_rgb(0_0_0_/_6%)] md:max-w-4xl"
  />
</div>

<!--
- wanted side panel design

- too many booleans
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs class="-mt-10 mb-10 mx-auto" :initial-index="2" />

<div class="mt-4 flex w-full justify-center px-2 anim-fade-in-scale">
  <img
    src="./slides/assets/advancefilters.png"
    alt="Advanced Filters"
    class="mx-auto block h-auto max-h-[min(440px,50vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_2px_16px_rgb(0_0_0_/_6%)] md:max-w-4xl"
  />
</div>

<!--
SHOW DEMO
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs class="-mt-10 mb-10 mx-auto" :initial-index="3" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">My goals</h2>

<div class="flex flex-col gap-4 max-w-3xl mt-6">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4">
    <span class="relative shrink-0 w-[1.5rem] h-[1.5rem]">
      <i class="fa-regular fa-square text-slate-300 text-[1.5rem] absolute inset-0 goals-uncheck" style="animation-delay:0.4s"></i>
      <i class="fa-solid fa-square-check text-[#e60024] text-[1.5rem] absolute inset-0 goals-check" style="animation-delay:0.4s"></i>
    </span>
    <span>Introduce a filter panel or some other new selection area</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4">
    <span class="relative shrink-0 w-[1.5rem] h-[1.5rem]">
      <i class="fa-regular fa-square text-slate-300 text-[1.5rem] absolute inset-0 goals-uncheck" style="animation-delay:0.9s"></i>
      <i class="fa-solid fa-square-check text-[#e60024] text-[1.5rem] absolute inset-0 goals-check" style="animation-delay:0.9s"></i>
    </span>
    <span>Have consistent style for each type of filter (radio, multi-select, etc)</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4">
    <span class="relative shrink-0 w-[1.5rem] h-[1.5rem]">
      <i class="fa-regular fa-square text-slate-300 text-[1.5rem] absolute inset-0 goals-uncheck" style="animation-delay:1.4s"></i>
      <i class="fa-solid fa-square-check text-[#e60024] text-[1.5rem] absolute inset-0 goals-check" style="animation-delay:1.4s"></i>
    </span>
    <span>Introduce boolean options (AND/OR)</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4">
    <i class="fa-regular fa-square text-slate-300 text-[1.5rem] shrink-0"></i>
    <span>Enable users to save their filters and share them</span>
    <span class="ml-auto shrink-0 inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[0.72rem] font-semibold text-amber-700 tracking-wide whitespace-nowrap">
      <i class="fa-solid fa-triangle-exclamation text-amber-400"></i>
      Partially implemented
    </span>
  </div>
</div>

<style>
@keyframes goals-fade-out {
  to { opacity: 0; }
}
@keyframes goals-check-pop {
  from { opacity: 0; transform: scale(0.5); }
  to { opacity: 1; transform: scale(1); }
}
.goals-uncheck {
  animation: goals-fade-out 0.25s ease forwards;
}
.goals-check {
  opacity: 0;
  animation: goals-check-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
</style>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs class="-mt-10 mb-10 mx-auto" :initial-index="3" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Takeaways</h2>

<div class="flex flex-row gap-4 mt-6">
  <div class="flex-1 rounded-2xl bg-white border border-slate-200/40 px-6 py-6 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col items-start gap-3 anim-fade-up anim-d1">
    <i class="fa-solid fa-arrow-pointer text-[2rem] text-[#e60024] self-center"></i>
    <span>Prototyping advanced logic harder than intended; did not need pixel-perfect output</span>
  </div>
  <div class="flex-1 rounded-2xl bg-white border border-slate-200/40 px-6 py-6 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col items-start gap-3 anim-fade-up anim-d3">
    <i class="fa-solid fa-hands-clapping text-[2rem] text-[#e60024] self-center"></i>
    <span>Biggest win was learning how to prototype such intricate designs</span>
  </div>
</div>

<!--
- this is in development; working with eng if there are any addittinal edge cases

- will do design/own QA when testing environment is ready
-->

---
layout: two-cols
layoutClass: h-full
transition: fade-out
---

<div class="flex h-full min-h-0 flex-col py-10 pr-4">
  <div class="flex min-h-0 min-w-0 flex-1 flex-col">
<HeroTitle compact>
  Thank you
</HeroTitle>
  </div>
</div>

::right::

<div class="flex h-full min-h-0 w-full flex-col pl-4">
<PinterestMasonry placement="title" left-top-small-src="/IMG_4215.jpg" left-mid-src="/20221117_091012.jpg" left-top-src="/PXL_20241205_015703401.jpg" right-tall-src="/IMG_20200523_120959.jpg" right-bottom-src="/PXL_20240210_213758992.jpg" />
</div>
