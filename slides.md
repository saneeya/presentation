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
hide: true
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
layout: two-cols
layoutClass: h-full layout-wide-right
---

## Background

::right::

<div class="flex h-full min-h-0 w-full flex-col pl-4">
<PinterestMasonry placement="title" :hide-left-mid="true" left-extra-top-src="/pictures/20191229_134146.jpg" :left-extra-top-grow="0.8" :title-top-grow="1.4" :title-bottom-grow="1.0" right-tall-src="/pictures/PXL_20251222_030347531.jpg" right-bottom-src="/pictures/PXL_20240608_204901982.jpg" />
</div>

<!--
- Account Manager -> Campaign Creation -> Admin Portal -> MC Traffciking
- DCM for 4 years, grew from about $10m to $100m
- Now work on internal tooling
-->

---
transition: slide-up
layout: two-cols
layoutClass: h-full layout-wide-right
---

## Experience

::right::

<div class="flex h-full min-h-0 w-full flex-col pl-4">
<PinterestMasonry placement="title" :hide-left-mid="true" />
</div>

---
layout: two-cols
layoutClass: h-full
transition: slide-left
---

<div class="slide-4-root flex h-full min-h-0 flex-col py-10 pr-4">
  <div class="flex min-h-0 min-w-0 flex-1 flex-col">
    <div class="flex h-full min-h-0 w-full max-w-md flex-1 flex-col items-start self-stretch py-6 pr-6 pl-0 md:max-w-xl md:py-8 md:pr-8 md:pl-0">
      <div class="mb-8 mt-20 text-3xl font-semibold tracking-tight text-[#3A4652] md:mt-24 md:text-4xl lg:mt-28 lg:text-5xl anim-fade-up"><span class="block">Making</span><span class="block whitespace-nowrap"><span class="text-[#e60024]">Filters</span> Functional</span></div>
      <div class="max-w-xs text-[28px] font-medium leading-snug text-[#3A4652]/85 anim-fade-up anim-d2">Campaign flow redesign</div>
      <div class="mt-auto self-start anim-fade-up anim-d4">
        <span class="hero-pill">CASE STUDY</span>
      </div>
    </div>
  </div>
</div>

::right::

<div class="flex h-full min-h-0 w-full flex-col">
<PinterestMasonry :show-images="false" span-src="/FI.png" span-position="center 28%" :span-flex="0.8" :merge-right-stack="true" right-src="/MCFilters.gif" right-position="left center" left-top-src="/filter88.png" left-bottom-src="/datepicker.png" left-bottom-position="center 18%" tile-border="1px solid #cbd5e1" />
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

<CaseStudyPillTabs :key="s6" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<AdManagerStack :images="['./slides/assets/MCfilter1.png', './slides/assets/MCfilter2.png', './slides/assets/MCfilter3.png']" :compact="true" />

<!--
- filters are one long scrolls
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s7" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">The Platform in 2021</h2>

<div class="grid grid-cols-2 grid-rows-2 auto-rows-fr gap-4 w-full">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d1">
    <i class="fa-brands fa-google text-[#e60024] text-[2rem]"></i>
    <span>Launched in March 2020 as Hulu Ad Manager</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d2">
    <i class="fa-solid fa-tags text-[#e60024] text-[2rem]"></i>
    <span>Company's only self-serve ad platform</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d3">
    <i class="fa-regular fa-square-caret-down text-[#e60024] text-[2rem]"></i>
    <span>Intended for SMBs since min campaign spend was less than traditional route</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d4">
    <i class="fa-solid fa-filter text-[#e60024] text-[2rem]"></i>
    <span>Had $10M ARR as of Fall 2021</span>
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

<CaseStudyPillTabs :key="s8" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Growing Pains</h2>

<div class="grid grid-cols-3 gap-4 max-w-4xl mt-16">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d1">
    <i class="fa-solid fa-filter-circle-xmark text-[#e60024] text-[2rem] self-center"></i>
    <span>Platform was managed by overseas 3rd party team; expensive to maintain</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d2">
    <i class="fa-solid fa-layer-group text-[#e60024] text-[2rem] self-center"></i>
    <span>Business goals pivoted to appeal to agencies &amp; larger advertisers (over SMBs)</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d3">
    <i class="fa-solid fa-expand text-[#e60024] text-[2rem] self-center"></i>
    <span>Platform lacked features the target users wanted</span>
  </div>
</div>

<!--
- new filters took a while to implement
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s9" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<div class="flex h-full w-full items-center justify-center">
  <div
    class="mx-auto w-full max-w-4xl rounded-2xl bg-white border border-slate-200/40 px-14 py-12 text-left text-[2rem] font-normal italic leading-snug text-[#e60024] shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-in-scale"
  >
    Agencies (and larger advertisers) did not see value in the self-serve ad platform
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s10" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Business goals</h2>

<div class="flex flex-col gap-4 max-w-3xl mt-6">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d1">
    <i class="fa-regular fa-square text-slate-300 text-[1.5rem] shrink-0"></i>
    <span>Rebuild entire platform to be in-house</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d2">
    <i class="fa-regular fa-square text-slate-300 text-[1.5rem] shrink-0"></i>
    <span>Ability to run multiple line items within larger campaigns.</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d3">
    <i class="fa-regular fa-square text-slate-300 text-[1.5rem] shrink-0"></i>
    <span>Add extra targeting options (dayparting, pacing, etc)</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d4">
    <i class="fa-regular fa-square text-slate-300 text-[1.5rem] shrink-0"></i>
    <span>Platform rebuild (and brand rename) to launch Oct 2024</span>
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s11" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Team of One</h2>

<div class="flex flex-col gap-3 mt-6 w-full max-w-4xl mx-auto">
  <div class="flex gap-4 w-full">
    <div class="flex-1 rounded-2xl bg-white border border-slate-200/40 px-6 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center anim-fade-up anim-d1">Box 1</div>
    <div class="flex-1 rounded-2xl bg-white border border-slate-200/40 px-6 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center anim-fade-up anim-d2">Box 2</div>
    <div class="flex-1 rounded-2xl bg-white border border-slate-200/40 px-6 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center anim-fade-up anim-d3">Box 3</div>
    <div class="flex-1 rounded-2xl bg-white border border-slate-200/40 px-6 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center anim-fade-up anim-d4">Box 4</div>
  </div>
  <div class="flex justify-around px-[calc(12.5%-0.5rem)]">
    <i class="fa-solid fa-chevron-down text-[#e60024] text-[1.3rem]"></i>
    <i class="fa-solid fa-chevron-down text-[#e60024] text-[1.3rem]"></i>
    <i class="fa-solid fa-chevron-down text-[#e60024] text-[1.3rem]"></i>
    <i class="fa-solid fa-chevron-down text-[#e60024] text-[1.3rem]"></i>
  </div>
  <div class="w-full rounded-2xl bg-[#e60024] px-8 py-5 text-white text-[1.1rem] font-semibold shadow-[0_1px_4px_rgb(0_0_0_/_0.10),_0_4px_16px_rgb(0_0_0_/_0.14)] text-center anim-fade-up anim-d4">Box 5</div>
</div>

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Layout</h2>

<div class="flex gap-8 mt-4 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-64 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] anim-fade-up anim-d1">Tested well in UXR</div>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] anim-fade-up anim-d2">Easier to scale</div>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] anim-fade-up anim-d3">Bullet 3</div>
  </div>
  <div class="flex-1 min-w-0 flex justify-center">
    <img
      src="./slides/assets/singlepageHAM.png"
      alt="Single page HAM"
      class="block h-auto max-h-[min(480px,58vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_2px_16px_rgb(0_0_0_/_6%)]"
    />
  </div>
</div>

<!--
- wanted side panel design

- too many booleans
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s13" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">"Line Items"</h2>

<AdManagerStack :images="['./slides/assets/CA1.png', './slides/assets/CA2.png', './slides/assets/CA3.png']" :compact="true" :viewport-height="560" layer-max-width="70rem" pull-down="-0.5rem" />

<!--
SHOW DEMO
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Layout</h2>

<div class="mt-4 flex w-full justify-center">
  <img
    src="./slides/assets/layoutidea1.png"
    alt="Layout Idea 1"
    class="block h-auto max-h-[min(430px,53vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_2px_16px_rgb(0_0_0_/_6%)] md:max-w-4xl"
  />
</div>

---
layout: default
transition: slide-left
---


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

