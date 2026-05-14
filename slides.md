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
  weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
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
Welcome note: open Presenter Mode from the bottom bar to see this while presenting.
-->


---
transition: fade-out
layout: default
---

## My process

<InvitePushRow />

<!--
InvitePushRow uses InviteClickGap for strip pacing (Space / Right).
-->

---
transition: slide-up
---

## Background

<AdManagerStack />

<!--
AdManagerStack: Space / Right advances stacked screenshots (InviteClickGap).
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
    class="mx-auto block h-auto max-h-[min(460px,52vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_4px_24px_rgb(0_0_0_/_12%)] md:max-w-5xl"
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

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<div class="mt-4 flex w-full justify-center px-2 anim-fade-in-scale">
  <img
    src="./slides/assets/Filtermap.png"
    alt="Filter map"
    class="mx-auto block h-auto max-h-[min(460px,52vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_4px_24px_rgb(0_0_0_/_12%)] md:max-w-4xl"
  />
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">User feedback</h2>

<div class="grid grid-cols-2 grid-rows-2 auto-rows-fr gap-4 max-w-3xl">
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

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs class="-mt-10 mb-10 mx-auto" :initial-index="2" />

<div class="mt-4 flex w-full justify-center px-2 anim-fade-in-scale">
  <img
    src="./slides/assets/FI.png"
    alt="Advanced Filters"
    class="mx-auto block h-auto max-h-[min(440px,50vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_4px_24px_rgb(0_0_0_/_12%)] md:max-w-4xl"
  />
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs class="-mt-10 mb-10 mx-auto" :initial-index="2" />

<div class="mt-4 flex w-full justify-center px-2 anim-fade-in-scale">
  <img
    src="./slides/assets/advancefilters.png"
    alt="Advanced Filters"
    class="mx-auto block h-auto max-h-[min(440px,50vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_4px_24px_rgb(0_0_0_/_12%)] md:max-w-4xl"
  />
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs class="-mt-10 mb-10 mx-auto" :initial-index="2" />

<div class="mt-4 flex w-full justify-center px-2 anim-fade-in-scale">
  <img
    src="./slides/assets/advancefilters2.png"
    alt="Advanced Filters 2"
    class="mx-auto block h-auto max-h-[min(440px,50vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_4px_24px_rgb(0_0_0_/_12%)] md:max-w-4xl"
  />
</div>

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
  <div class="flex-1 rounded-2xl bg-white border border-slate-200/40 px-6 py-6 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col items-start gap-3 anim-fade-up anim-d2">
    <i class="fa-solid fa-hourglass text-[2rem] text-[#e60024] self-center"></i>
    <span>Should have considered more scope creep into my own workflows &amp; asked for help sooner</span>
  </div>
  <div class="flex-1 rounded-2xl bg-white border border-slate-200/40 px-6 py-6 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col items-start gap-3 anim-fade-up anim-d3">
    <i class="fa-solid fa-hands-clapping text-[2rem] text-[#e60024] self-center"></i>
    <span>Biggest win was learning how to prototype such intricate designs</span>
  </div>
</div>

---
layout: default
transition: fade
---

<CaseStudyPillTabs class="-mt-10 mb-10 mx-auto" :initial-index="3" />

<div class="lb-scene">
  <div class="lb-label">In Development<span class="lb-cursor">|</span></div>
  <div class="lb-track">
    <div class="lb-fill"></div>
    <div class="lb-shimmer"></div>
  </div>
</div>

<style>
.lb-scene {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 16rem;
  height: 60px;
}
.lb-label {
  position: absolute;
  top: -4rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.2rem;
  font-weight: 600;
  color: #3A4652;
  letter-spacing: 0.05em;
  white-space: nowrap;
  overflow: hidden;
  width: 0;
  animation: lb-type 1.2s steps(14) 0.3s forwards;
}
@keyframes lb-type {
  from { width: 0; }
  to { width: 21rem; }
}
.lb-cursor {
  color: #e60024;
  font-weight: 300;
  animation: lb-blink 0.8s step-end infinite;
}
@keyframes lb-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.lb-track {
  position: relative;
  width: min(100%, 30rem);
  height: 14px;
  background: #e2e8f0;
  border-radius: 9999px;
  overflow: hidden;
  z-index: 2;
}
@keyframes lb-grow {
  from { width: 0%; }
  to { width: 65%; }
}
@keyframes lb-shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
}
.lb-fill {
  height: 100%;
  width: 0%;
  background: #e60024;
  border-radius: 9999px;
  animation: lb-grow 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: 0.3s;
}
.lb-shimmer {
  position: absolute;
  top: 0; left: 0;
  width: 30%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.45), transparent);
  animation: lb-shimmer 1.4s ease-in-out infinite;
  animation-delay: 0.8s;
}
@keyframes lb-float {
  0%, 100% { transform: translateY(0px); opacity: 0.7; }
  50% { transform: translateY(-10px); opacity: 1; }
}
@keyframes lb-pop {
  0% { transform: scale(0); opacity: 0; }
  60% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
}
.lb-dot {
  position: absolute;
  border-radius: 9999px;
  background: #e60024;
}
.lb-dot-1 { width:10px; height:10px; top:-12px; left:calc(50% - 140px); animation: lb-pop 0.4s ease forwards, lb-float 2s ease-in-out 0.4s infinite; animation-delay: 0.5s, 0.9s; opacity:0; }
.lb-dot-2 { width:6px;  height:6px;  top:-20px; left:calc(50% - 80px);  animation: lb-pop 0.4s ease forwards, lb-float 2.3s ease-in-out 0.4s infinite; animation-delay: 0.9s, 1.3s; opacity:0; }
.lb-dot-3 { width:8px;  height:8px;  top:-14px; left:calc(50% + 60px);  animation: lb-pop 0.4s ease forwards, lb-float 1.8s ease-in-out 0.4s infinite; animation-delay: 1.3s, 1.7s; opacity:0; }
.lb-dot-4 { width:6px;  height:6px;  bottom:-14px; left:calc(50% - 60px);  animation: lb-pop 0.4s ease forwards, lb-float 2.1s ease-in-out 0.4s infinite; animation-delay: 0.7s, 1.1s; opacity:0; }
.lb-dot-5 { width:10px; height:10px; bottom:-18px; left:calc(50% + 40px);  animation: lb-pop 0.4s ease forwards, lb-float 2.4s ease-in-out 0.4s infinite; animation-delay: 1.1s, 1.5s; opacity:0; }
.lb-dot-6 { width:7px;  height:7px;  bottom:-10px; left:calc(50% + 110px); animation: lb-pop 0.4s ease forwards, lb-float 1.9s ease-in-out 0.4s infinite; animation-delay: 1.5s, 1.9s; opacity:0; }
@keyframes lb-ring-pulse {
  0% { transform: translateY(-50%) scale(0.6); opacity: 0.6; }
  100% { transform: translateY(-50%) scale(1.6); opacity: 0; }
}
.lb-ring {
  position: absolute;
  border-radius: 9999px;
  border: 2px solid #e60024;
  top: 50%;
}
.lb-ring-1 { width:26px; height:26px; left:calc(50% - 183px); animation: lb-ring-pulse 1.8s ease-out 1s infinite; opacity:0; }
.lb-ring-2 { width:20px; height:20px; left:calc(50% + 164px); animation: lb-ring-pulse 1.8s ease-out 1.4s infinite; opacity:0; }
</style>

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
