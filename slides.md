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
  <span style="color:#3A4652">Designing for <span style="color:#e60024">Advertisers</span></span>

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
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Agenda</h2>

<div class="flex flex-col gap-6 w-full mt-10">
  <div class="flex items-center gap-4 text-slate-700 text-[1.1rem] font-medium anim-fade-up anim-d1">
    <span class="text-[#e60024] font-semibold text-[1rem] w-6">01</span>
    <span>Background</span>
  </div>
  <div class="flex items-center gap-4 text-slate-700 text-[1.1rem] font-medium anim-fade-up anim-d2">
    <span class="text-[#e60024] font-semibold text-[1rem] w-6">02</span>
    <span>Case Study: Campaign Creation Flow</span>
  </div>
  <div class="flex items-center gap-4 text-slate-700 text-[1.1rem] font-medium anim-fade-up anim-d3">
    <span class="text-[#e60024] font-semibold text-[1rem] w-6">03</span>
    <span>Case Study: VAST Implementation</span>
  </div>
  <div class="flex items-center gap-4 text-slate-700 text-[1.1rem] font-medium anim-fade-up anim-d4">
    <span class="text-[#e60024] font-semibold text-[1rem] w-6">04</span>
    <span>Q & A</span>
  </div>
</div>

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
transition: slide-left
layout: two-cols
layoutClass: h-full layout-wide-right
---

<div class="mt-32">

## Background

</div>

::right::

<div class="flex h-full min-h-0 w-full flex-col pl-4">
<PinterestMasonry placement="title" :hide-left-mid="true" :hide-left-bottom="true" left-extra-top-src="/pictures/20191229_134146.jpg" :left-extra-top-grow="1.4" :title-top-grow="2.2" :title-bottom-grow="1.0" left-top-small-src="./slides/assets/About2.jpg" left-top-small-position="center 40%" :left-top-small-scale="1.5" right-tall-src="./slides/assets/About1.jpg" right-bottom-src="/pictures/PXL_20240608_204901982.jpg" />
</div>

<!--
- Account Manager -> Campaign Creation -> Admin Portal -> MC Traffciking
- DCM for 4 years, grew from about $10m to $100m
- Now work on internal tooling
-->

---
transition: slide-left
layout: two-cols
layoutClass: h-full layout-wide-right
---

<div class="mt-32">

## Experience

</div>

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
      <div class="mb-8 mt-10 text-3xl font-semibold tracking-tight text-[#3A4652] md:mt-14 md:text-4xl lg:mt-16 lg:text-5xl anim-fade-up"><span class="block">Redesigning for <span class="text-[#e60024]">Agency</span></span><span class="block">Scale</span></div>
      <div class="max-w-lg text-[28px] font-medium leading-snug text-[#3A4652]/85 anim-fade-up anim-d2 mt-4">Updating the Campaign Creation flow</div>
      <div class="mt-auto self-start anim-fade-up anim-d4" style="position:relative; top:1.5rem;">
        <span class="hero-pill">CASE STUDY</span>
      </div>
    </div>
  </div>
</div>

::right::

<div class="flex h-full min-h-0 w-full flex-col">
<PinterestMasonry :show-images="false" span-src="./slides/assets/Campaigngrid4.png" span-position="center 28%" :span-flex="0.8" :merge-right-stack="true" right-src="./slides/assets/Campaigngrid1.png" right-position="left center" left-top-src="./slides/assets/Campaigngrid2.png" left-bottom-src="./slides/assets/Campaigngrid3.png" left-bottom-position="center 18%" tile-border="0.5px solid #D2D2D2" />
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

<p class="mt-2 mb-0 text-sm italic text-slate-500">*FKA Hulu Ad Manager</p>

<AdManagerStack :images="['./slides/assets/OLDham1.png', './slides/assets/OLDham2.png', './slides/assets/OLDham3.png', './slides/assets/OLDham4.png']" :compact="true" :viewport-height="500" layer-max-width="72rem" pull-down="-2rem" />

<!--
- filters are one long scrolls
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s7" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Campaign manager in 2021</h2>

<div class="grid grid-cols-3 gap-4 max-w-4xl mt-16">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#e60024]" aria-hidden="true"><path d="M96 160L96 400L544 400L544 160L96 160zM32 160C32 124.7 60.7 96 96 96L544 96C579.3 96 608 124.7 608 160L608 400C608 435.3 579.3 464 544 464L96 464C60.7 464 32 435.3 32 400L32 160zM192 512L448 512C465.7 512 480 526.3 480 544C480 561.7 465.7 576 448 576L192 576C174.3 576 160 561.7 160 544C160 526.3 174.3 512 192 512z"/></svg>
    <span>Launched in March 2020 as Hulu Ad Manager</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#e60024]" aria-hidden="true"><path d="M96 192C96 130.1 146.1 80 208 80C269.9 80 320 130.1 320 192C320 253.9 269.9 304 208 304C146.1 304 96 253.9 96 192zM32 528C32 430.8 110.8 352 208 352C305.2 352 384 430.8 384 528L384 534C384 557.2 365.2 576 342 576L74 576C50.8 576 32 557.2 32 534L32 528zM464 128C517 128 560 171 560 224C560 277 517 320 464 320C411 320 368 277 368 224C368 171 411 128 464 128zM464 368C543.5 368 608 432.5 608 512L608 534.4C608 557.4 589.4 576 566.4 576L421.6 576C428.2 563.5 432 549.2 432 534L432 528C432 476.5 414.6 429.1 385.5 391.3C408.1 376.6 435.1 368 464 368z"/></svg>
    <span>Intended for SMBs since min campaign spend was less than traditional route</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#e60024]" aria-hidden="true"><path d="M296 88C296 74.7 306.7 64 320 64C333.3 64 344 74.7 344 88L344 128L400 128C417.7 128 432 142.3 432 160C432 177.7 417.7 192 400 192L285.1 192C260.2 192 240 212.2 240 237.1C240 259.6 256.5 278.6 278.7 281.8L370.3 294.9C424.1 302.6 464 348.6 464 402.9C464 463.2 415.1 512 354.9 512L344 512L344 552C344 565.3 333.3 576 320 576C306.7 576 296 565.3 296 552L296 512L224 512C206.3 512 192 497.7 192 480C192 462.3 206.3 448 224 448L354.9 448C379.8 448 400 427.8 400 402.9C400 380.4 383.5 361.4 361.3 358.2L269.7 345.1C215.9 337.5 176 291.4 176 237.1C176 176.9 224.9 128 285.1 128L296 128L296 88z"/></svg>
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

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">New target customers</h2>

<div class="grid grid-cols-2 gap-4 max-w-4xl mt-16 w-full">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#e60024]" aria-hidden="true"><path d="M64 128C64 92.7 92.7 64 128 64L384 64C419.3 64 448 92.7 448 128L448 249.3C401.1 268.3 368 314.3 368 368C368 395.7 376.8 421.4 391.8 442.4C340.3 463.4 304 514 304 573.1C304 574.1 304 575 304 576L128 576C92.7 576 64 547.3 64 512L64 128zM208 464L208 528L261.4 528C268.6 498.6 282.7 471.9 301.8 449.7C295.7 430.2 277.5 416 256 416C229.5 416 208 437.5 208 464zM339 288.3C338 288.1 337 288 336 288L304 288C295.2 288 288 295.2 288 304L288 336C288 344.8 295.2 352 304 352L320.7 352C322.8 329.2 329.1 307.7 339 288.3zM176 160C167.2 160 160 167.2 160 176L160 208C160 216.8 167.2 224 176 224L208 224C216.8 224 224 216.8 224 208L224 176C224 167.2 216.8 160 208 160L176 160zM288 176L288 208C288 216.8 295.2 224 304 224L336 224C344.8 224 352 216.8 352 208L352 176C352 167.2 344.8 160 336 160L304 160C295.2 160 288 167.2 288 176zM176 288C167.2 288 160 295.2 160 304L160 336C160 344.8 167.2 352 176 352L208 352C216.8 352 224 344.8 224 336L224 304C224 295.2 216.8 288 208 288L176 288zM416 368C416 323.8 451.8 288 496 288C540.2 288 576 323.8 576 368C576 412.2 540.2 448 496 448C451.8 448 416 412.2 416 368zM352 576C352 523 395 480 448 480L544 480C597 480 640 523 640 576C640 593.7 625.7 608 608 608L384 608C366.3 608 352 593.7 352 576z"/></svg>
    <span>Business goals pivoted to appeal to agencies &amp; larger advertisers (over SMBs)</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#e60024]" aria-hidden="true"><path d="M286.1 368C384.6 368 464.4 447.8 464.4 546.3C464.4 562.7 451.1 576 434.7 576L78.1 576C61.7 576 48.4 562.7 48.4 546.3C48.4 447.8 128.2 368 226.7 368L286.1 368zM562.3 172.1C571.7 162.7 586.9 162.7 596.2 172.1C605.5 181.5 605.6 196.7 596.2 206L562.3 239.9L596.2 273.8C605.6 283.2 605.6 298.4 596.2 307.7C586.8 317 571.6 317.1 562.3 307.7L528.4 273.8L494.5 307.7C485.1 317.1 469.9 317.1 460.6 307.7C451.3 298.3 451.2 283.1 460.6 273.8L494.5 239.9L460.6 206C451.2 196.6 451.2 181.4 460.6 172.1C470 162.8 485.2 162.7 494.5 172.1L528.4 206L562.3 172.1zM256.4 312C190.1 312 136.4 258.3 136.4 192C136.4 125.7 190.1 72 256.4 72C322.7 72 376.4 125.7 376.4 192C376.4 258.3 322.7 312 256.4 312z"/></svg>
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

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Agency needs</h2>

<div class="flex gap-8 mt-4 items-start w-full">
  <div class="flex flex-col gap-4 min-w-0 flex-shrink-0 max-w-sm pt-2">
    <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d2">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Ability to run multiple line items</span>
    </div>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d3">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Extra targeting options (dayparting, pacing, etc)</span>
    </div>
  </div>
  <div class="flex-1 min-w-0 flex justify-center">
    <img
      src="./slides/assets/lineitemmap.png"
      alt="Line item map"
      class="vast-map-img block h-auto w-full max-h-[min(520px,62vh)] max-w-none rounded-none object-contain"
    />
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s23_copy" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Opportunity for a new design</h2>

<div class="max-w-4xl mt-16" style="display:grid; grid-template-columns: 1fr auto 1fr auto 1fr; grid-template-rows: auto auto; gap: 2rem 0.5rem; align-items: stretch;">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-up" style="animation-delay:0s"><span>Budget to move 3rd-party platform to be moved in-house</span></div>
  <i class="fa-solid fa-arrow-right text-[#e60024] text-[1.5rem] mx-1 anim-fade-up justify-self-center self-center" style="animation-delay:0.4s"></i>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-up" style="animation-delay:0.7s"><span>Chance to redesign entire ad manager (reporting, creative library, etc)</span></div>
  <i class="fa-solid fa-arrow-right text-[#e60024] text-[1.5rem] mx-1 anim-fade-up justify-self-center self-center" style="animation-delay:1.1s"></i>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-up" style="animation-delay:1.4s"><span>I could create a new campaign flow to meet agency needs</span></div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s10_copy" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">My goals</h2>

<div class="flex flex-col gap-4 max-w-3xl mt-6">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d2">
    <i class="fa-regular fa-square text-slate-300 text-[1.5rem] shrink-0"></i>
    <span>Add line items to campaign creation flow</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d3">
    <i class="fa-regular fa-square text-slate-300 text-[1.5rem] shrink-0"></i>
    <span>Add extra targeting options (dayparting, pacing, etc)</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d4">
    <i class="fa-regular fa-square text-slate-300 text-[1.5rem] shrink-0"></i>
    <span>Have campaign flow (and entire platform) redesigns done by Oct 2024 launch</span>
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s11" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Team of one</h2>

<div class="flex flex-col gap-3 mt-16 w-full max-w-4xl mx-auto">
  <div class="flex gap-4 w-full">
    <div class="flex-1 rounded-2xl bg-white border border-slate-200/40 px-6 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center anim-fade-up anim-d1">Entire new platform</div>
    <div class="flex-1 rounded-2xl bg-white border border-slate-200/40 px-6 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center anim-fade-up anim-d2">Existing platform</div>
    <div class="flex-1 rounded-2xl bg-white border border-slate-200/40 px-6 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center anim-fade-up anim-d3">5-7 PMs, Eng, QA, Sales, etc</div>
    <div class="flex-1 rounded-2xl bg-white border border-slate-200/40 px-6 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center anim-fade-up anim-d4">Overseas Eng team</div>
  </div>
  <div class="flex gap-4 w-full">
    <div class="flex-1 flex justify-center">
      <i class="fa-solid fa-arrow-down-long text-[#e60024] text-[2rem]"></i>
    </div>
    <div class="flex-1 flex justify-center">
      <i class="fa-solid fa-arrow-down-long text-[#e60024] text-[2rem]"></i>
    </div>
    <div class="flex-1 flex justify-center">
      <i class="fa-solid fa-arrow-down-long text-[#e60024] text-[2rem]"></i>
    </div>
    <div class="flex-1 flex justify-center">
      <i class="fa-solid fa-arrow-down-long text-[#e60024] text-[2rem]"></i>
    </div>
  </div>
  <div class="w-full rounded-2xl bg-white border border-slate-200/40 px-8 py-5 text-[#e60024] font-bold shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex items-center justify-center gap-3 anim-fade-up anim-d4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="w-8 h-8 shrink-0 fill-[#e60024]" aria-hidden="true"><path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/></svg>
    <span class="text-[1.75rem]">ME</span>
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s9_copy" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<div class="flex h-full w-full items-center justify-center">
  <div
    class="mx-auto w-full max-w-4xl rounded-2xl bg-white border border-slate-200/40 px-14 py-12 text-left text-[2rem] font-normal italic leading-snug text-[#e60024] shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-in-scale"
  >
    How can I show line items in the campaign creation flow?
  </div>
</div>

---
layout: default
transition: slide-left
---

<div class="flex gap-8 mt-6 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-64">
    <h2 class="user-groups-slide-heading m-0">Previous design</h2>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Tested well in UXR</span>
    </div>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d2">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Easy to scale</span>
    </div>
  </div>
  <div class="flex-1 min-w-0 flex justify-center items-start self-start mt-3">
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

<CaseStudyPillTabs :key="s13" class="-mt-10 mb-4 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5 max-w-[9rem]">Competitive analysis</h2>

<div class="flex gap-6 mt-4 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-52 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Ad Groups/Sets</span>
    </div>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d2">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Left or Right rail</span>
    </div>
  </div>
  <div class="flex-1 min-w-0">
    <AdManagerStack :images="['./slides/assets/CA1.png', './slides/assets/CA2.png', './slides/assets/CA3.png']" :compact="true" :viewport-height="820" layer-max-width="110rem" layer-width-pct="100%" pull-down="-16rem" />
  </div>
</div>

<!--
SHOW DEMO
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Core layout</h2>

<div class="-mt-2 flex w-full justify-center md:max-w-5xl">
  <ImageFadeSwap
    :images="['./slides/assets/layoutidea1.png', './slides/assets/layoutidea1a.png']"
    alt="Layout Idea 1"
    img-class="block h-[430px] w-auto max-w-full rounded-xl object-contain shadow-[0_2px_16px_rgb(0_0_0_/_6%)]"
  />
</div>

---
layout: default
transition: slide-left
---


<CaseStudyPillTabs :key="s15" class="-mt-10 mb-4 mx-auto" :initial-index="2" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Top rail</h2>

<div class="flex gap-6 mt-4 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-52 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Line items as top tabs</span>
    </div>
    <CarouselSyncBullet :show-at-click="3">Not scalable</CarouselSyncBullet>
  </div>
  <div class="flex-1 min-w-0 mt-2">
    <AdManagerStack
      :images="['./slides/assets/Concept1.png', './slides/assets/Concept2.png', './slides/assets/Concept3.png', './slides/assets/Concept4.png']"
      :compact="true"
      :viewport-height="780"
      layer-max-width="110rem"
      layer-width-pct="98%"
      pull-down="-14.5rem"
      pile-shift="1.5rem"
    />
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s16" class="-mt-10 mb-4 mx-auto" :initial-index="2" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Bulk editing</h2>

<div class="flex gap-6 mt-4 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-52 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Early concepts for bulk editing line items</span>
    </div>
    <CarouselSyncBullet :show-at-click="1">Cut for scope</CarouselSyncBullet>
  </div>
  <div class="flex-1 min-w-0">
    <AdManagerStack :images="['./slides/assets/Concept2a.png', './slides/assets/Concept2b.png']" :compact="true" :viewport-height="820" layer-max-width="130rem" layer-width-pct="98%" pull-down="-16rem" />
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s17" class="-mt-10 mb-4 mx-auto" :initial-index="2" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Left rail</h2>

<div class="flex gap-6 mt-4 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-52 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Can scale</span>
    </div>
    <CarouselSyncBullet :show-at-click="2">Easier to switch between line items</CarouselSyncBullet>
    <CarouselSyncBullet :show-at-click="2">Tested well internally</CarouselSyncBullet>
  </div>
  <div class="flex-1 min-w-0">
    <AdManagerStack :images="['./slides/assets/Concept3a.png', './slides/assets/Concept3b.png', './slides/assets/Concept3c.png']" :compact="true" :viewport-height="760" layer-max-width="100rem" layer-width-pct="95%" pull-down="-12rem" />
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s18" class="-mt-10 mb-4 mx-auto" :initial-index="3" />

<h2 class="user-groups-slide-heading m-0 mt-2 mb-2">Final Line Item menu</h2>

<div class="mt-2">
  <AdManagerStack
    :images="['./slides/assets/Finala.png', './slides/assets/Finalb.png']"
    :compact="true"
    :viewport-height="500"
    layer-max-width="88rem"
    layer-width-pct="89%"
    pull-down="-3rem"
    pile-shift="2rem"
  />
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s18b" class="-mt-10 mb-4 mx-auto" :initial-index="3" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">New targeting section</h2>

<AdManagerStack :images="['./slides/assets/Daypart.png']" :compact="true" :viewport-height="510" layer-max-width="86rem" layer-width-pct="89%" pull-down="-2rem" />

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s18b_copy" class="-mt-10 mb-4 mx-auto" :initial-index="3" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-3">Full flow</h2>

<div class="-mt-1 flex w-full justify-center px-2">
  <FastVideo
    src="./slides/assets/New Campaign Flow Walkthrough.mp4"
    :playback-rate="3"
    video-class="mx-auto block h-auto max-h-[min(460px,52vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_2px_16px_rgb(0_0_0_/_8%)] md:max-w-4xl"
  />
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s11_copy" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Non-linear journey</h2>

<div class="flex flex-col gap-3 mt-16 w-full max-w-4xl mx-auto">
  <div style="display:grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr; gap: 0.75rem 0.5rem; align-items: center;">
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d1">Wireframes</div>
    <i class="fa-solid fa-arrow-right text-[#e60024] text-[1.5rem] shrink-0 anim-fade-up anim-d2"></i>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d2">Finalized designs</div>
    <i class="fa-solid fa-arrow-right text-[#e60024] text-[1.5rem] shrink-0 anim-fade-up anim-d3"></i>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d3">Stakeholder feedback</div>
    <i class="fa-solid fa-arrow-right text-[#e60024] text-[1.5rem] shrink-0 anim-fade-up anim-d4"></i>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d4">User testing</div>
    <div class="flex justify-center">
      <i class="fa-solid fa-arrow-down-long text-[#e60024] text-[1.5rem]"></i>
    </div>
    <div></div>
    <div class="flex justify-center">
      <i class="fa-solid fa-arrow-down-long text-[#e60024] text-[1.5rem]"></i>
    </div>
    <div></div>
    <div class="flex justify-center">
      <i class="fa-solid fa-arrow-down-long text-[#e60024] text-[1.5rem]"></i>
    </div>
    <div></div>
    <div class="flex justify-center">
      <i class="fa-solid fa-arrow-down-long text-[#e60024] text-[1.5rem]"></i>
    </div>
  </div>
  <div style="display:grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr; gap: 0.75rem 0.5rem; align-items: center;">
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d4">PRD changes</div>
    <i class="fa-solid fa-arrow-left text-[#e60024] text-[1.5rem] shrink-0 anim-fade-up anim-d4"></i>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d4">Revisions</div>
    <i class="fa-solid fa-arrow-left text-[#e60024] text-[1.5rem] shrink-0 anim-fade-up anim-d4"></i>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d4">Design handoff</div>
    <i class="fa-solid fa-arrow-left text-[#e60024] text-[1.5rem] shrink-0 anim-fade-up anim-d4"></i>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d4">Completed flow</div>
  </div>
</div>

---
layout: default
transition: slide-left
---


<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">With internal teams</h2>

<div class="flex flex-col gap-4 max-w-3xl mt-6">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d1">
    <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
    <span>Daily slacks/emails to PMs & eng</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d2">
    <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
    <span>Weekly 'UX office hour'</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d3">
    <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
    <span>Set up feedback sessions with sales & ops teams</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d4">
    <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
    <span>Attend on-sites with product/eng</span>
  </div>
</div>

<!--
- this is in development; working with eng if there are any addittinal edge cases

- will do design/own QA when testing environment is ready
-->

---
layout: default
transition: slide-left
---


<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">With external teams</h2>

<div class="flex flex-col gap-4 max-w-3xl mt-6">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d1">
    <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
    <span>Daily 8am calls</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d2">
    <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
    <span>Asynchronous Q&A via spreadsheets</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d3">
    <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
    <span>Very literal on designs</span>
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s13_copy2" class="-mt-10 mb-4 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5 max-w-[18rem]">Handoffs</h2>

<div class="flex gap-6 mt-4 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-52 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Mapped out every flow</span>
    </div>
    <CarouselSyncBullet :show-at-click="1">And every state</CarouselSyncBullet>
  </div>
  <div class="flex-1 min-w-0">
    <AdManagerStack :images="['./slides/assets/literal1.png', './slides/assets/literal2.png']" :compact="true" :viewport-height="780" layer-max-width="120rem" layer-width-pct="98%" pull-down="-15rem" />
  </div>
</div>

---
layout: default
transition: slide-left
---


<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">User Testing</h2>

<div class="flex flex-col gap-4 max-w-3xl mt-6">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d1">
    <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
    <span>UT in Summer 2024; changes would not happen until after launch</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d2">
    <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
    <span>"Gut check" to make sure campaign flow made sense</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d3">
    <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
    <span>No dedicated UXR team to help with UT</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d4">
    <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
    <span>Test with existing customers</span>
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s23" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Sourcing users</h2>

<div class="max-w-4xl mt-16" style="display:grid; grid-template-columns: 1fr auto 1fr auto 1fr; grid-template-rows: auto auto; gap: 2rem 0.5rem; align-items: stretch;">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-up" style="animation-delay:0s"><span>Shared test plan</span></div>
  <i class="fa-solid fa-arrow-right text-[#e60024] text-[1.5rem] mx-1 anim-fade-up justify-self-center self-center" style="animation-delay:0.4s"></i>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-up" style="animation-delay:0.7s"><span>Sales wants incentives for clients</span></div>
  <i class="fa-solid fa-arrow-right text-[#e60024] text-[1.5rem] mx-1 anim-fade-up justify-self-center self-center" style="animation-delay:1.1s"></i>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-up" style="animation-delay:1.4s"><span>Went to Marketing to get incentive</span></div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-up" style="animation-delay:1.8s"><span>Met with Sales again</span></div>
  <i class="fa-solid fa-arrow-right text-[#e60024] text-[1.5rem] mx-1 anim-fade-up justify-self-center self-center" style="animation-delay:2.2s"></i>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-up" style="animation-delay:2.5s"><span class="text-[#e60024] font-bold">No</span></div>
  <div></div>
  <div></div>
</div>

---
layout: default
transition: slide-left
---


<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">User Testing</h2>

<div class="flex flex-col gap-4 max-w-3xl mt-6">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d1">
    <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
    <span>UT in Summer 2024; changes would not happen until after launch</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d2">
    <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
    <span>"Gut check" to make sure campaign flow made sense</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d3">
    <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
    <span>No dedicated UXR team to help with UT</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d4">
    <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
    <span>Test with <s class="text-[#e60024]">existing customers</s> &nbsp;users who have done digital advertising</span>
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s25" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Methodology</h2>

<div class="grid grid-cols-2 gap-4 max-w-3xl mt-10 mx-auto">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#e60024]" aria-hidden="true"><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM248 320C234.7 320 224 330.7 224 344C224 357.3 234.7 368 248 368L392 368C405.3 368 416 357.3 416 344C416 330.7 405.3 320 392 320L248 320zM248 416C234.7 416 224 426.7 224 440C224 453.3 234.7 464 248 464L392 464C405.3 464 416 453.3 416 440C416 426.7 405.3 416 392 416L248 416z"/></svg>
    <span>Created test plan, screener, sourced users & moderated sessions</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#e60024]" aria-hidden="true"><path d="M173.3 66.5C181.4 62.4 191.2 63.3 198.4 68.8L518.4 308.7C526.7 314.9 530 325.7 526.8 335.5C523.6 345.3 514.4 351.9 504 351.9L351.7 351.9L440.6 529.6C448.5 545.4 442.1 564.6 426.3 572.5C410.5 580.4 391.3 574 383.4 558.2L294.5 380.5L203.2 502.3C197 510.6 186.2 513.9 176.4 510.7C166.6 507.5 160 498.3 160 488L160 88C160 78.9 165.1 70.6 173.3 66.5z"/></svg>
    <span>Worked with UX engineering to create interactive prototype</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#e60024]" aria-hidden="true"><path d="M320 64C355.3 64 384 92.7 384 128C384 163.3 355.3 192 320 192C284.7 192 256 163.3 256 128C256 92.7 284.7 64 320 64zM416 376C416 401 403.3 423 384 435.9L384 528C384 554.5 362.5 576 336 576L304 576C277.5 576 256 554.5 256 528L256 435.9C236.7 423 224 401 224 376L224 336C224 283 267 240 320 240C373 240 416 283 416 336L416 376zM160 96C190.9 96 216 121.1 216 152C216 182.9 190.9 208 160 208C129.1 208 104 182.9 104 152C104 121.1 129.1 96 160 96zM176 336L176 368C176 400.5 188.1 430.1 208 452.7L208 528C208 529.2 208 530.5 208.1 531.7C199.6 539.3 188.4 544 176 544L144 544C117.5 544 96 522.5 96 496L96 439.4C76.9 428.4 64 407.7 64 384L64 352C64 299 107 256 160 256C172.7 256 184.8 258.5 195.9 262.9C183.3 284.3 176 309.3 176 336zM432 528L432 452.7C451.9 430.2 464 400.5 464 368L464 336C464 309.3 456.7 284.4 444.1 262.9C455.2 258.4 467.3 256 480 256C533 256 576 299 576 352L576 384C576 407.7 563.1 428.4 544 439.4L544 496C544 522.5 522.5 544 496 544L464 544C451.7 544 440.4 539.4 431.9 531.7C431.9 530.5 432 529.2 432 528zM480 96C510.9 96 536 121.1 536 152C536 182.9 510.9 208 480 208C449.1 208 424 182.9 424 152C424 121.1 449.1 96 480 96z"/></svg>
    <span>10 users with various level of expertise using self-serve platforms + 1hr sessions</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#e60024]" aria-hidden="true"><path d="M576 160C576 210.2 516.9 285.1 491.4 315C487.6 319.4 482 321.1 476.9 320L384 320C366.3 320 352 334.3 352 352C352 369.7 366.3 384 384 384L480 384C533 384 576 427 576 480C576 533 533 576 480 576L203.6 576C212.3 566.1 222.9 553.4 233.6 539.2C239.9 530.8 246.4 521.6 252.6 512L480 512C497.7 512 512 497.7 512 480C512 462.3 497.7 448 480 448L384 448C331 448 288 405 288 352C288 299 331 256 384 256L423.8 256C402.8 224.5 384 188.3 384 160C384 107 427 64 480 64C533 64 576 107 576 160zM181.1 553.1C177.3 557.4 173.9 561.2 171 564.4L169.2 566.4L169 566.2C163 570.8 154.4 570.2 149 564.4C123.8 537 64 466.5 64 416C64 363 107 320 160 320C213 320 256 363 256 416C256 446 234.9 483 212.5 513.9C201.8 528.6 190.8 541.9 181.7 552.4L181.1 553.1zM192 416C192 398.3 177.7 384 160 384C142.3 384 128 398.3 128 416C128 433.7 142.3 448 160 448C177.7 448 192 433.7 192 416zM480 192C497.7 192 512 177.7 512 160C512 142.3 497.7 128 480 128C462.3 128 448 142.3 448 160C448 177.7 462.3 192 480 192z"/></svg>
    <span>Tested to see if users could navigate new campaign flow, add line items, could choose targeting options</span>
  </div>
</div>

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-3">"Line Item"</h2>

<div class="flex gap-8 mt-0 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-80 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Term confused some users</span>
    </div>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d2">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Used to "ad groups/sets" or "flights"</span>
    </div>
  </div>
  <div class="flex-1 min-w-0 flex justify-center -mt-10">
    <img
      src="./slides/assets/lineitem_name.png"
      alt="Line Item Name"
      class="block h-auto max-h-[min(480px,56vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_2px_16px_rgb(0_0_0_/_6%)]"
    />
  </div>
</div>

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-3">Discoverability</h2>

<div class="flex gap-8 mt-0 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-80 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>66% of users struggled to locate "New Line Item" button</span>
    </div>
  </div>
  <div class="flex-1 min-w-0 flex justify-center -mt-6">
    <img
      src="./slides/assets/test_lineitem.png"
      alt="Test Line Item"
      class="block h-auto max-h-[min(520px,60vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_2px_16px_rgb(0_0_0_/_6%)]"
    />
  </div>
</div>

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-3">Layout</h2>

<div class="flex gap-8 mt-0 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-[30rem] pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Users appreciated single-page layout</span>
    </div>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d2">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Most of them could navigate to different targeting sections easily</span>
    </div>
  </div>
  <div class="flex-1 min-w-0 flex justify-center -mt-10">
    <img
      src="./slides/assets/singlepage.png"
      alt="Single Page"
      class="block h-auto max-h-[min(520px,60vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_2px_16px_rgb(0_0_0_/_6%)]"
    />
  </div>
</div>

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Design UAT</h2>

<div class="flex gap-8 mt-4 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-[30rem] pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Created Epic with all requested changes</span>
    </div>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d2">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Prioritized based on LOE + urgency</span>
    </div>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d3">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Quick and important changes such as a more prominent "Add New Line Item"</span>
    </div>
  </div>
  <div class="flex-1 min-w-0 flex justify-center">
    <img
      src="./slides/assets/jiraboard.png"
      alt="Jira Board"
      class="block h-auto max-h-[min(380px,46vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_2px_16px_rgb(0_0_0_/_6%)]"
      style="margin-top: -1rem;"
    />
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s_new" class="-mt-10 mb-10 mx-auto" :initial-index="3" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Outcome</h2>

<div class="grid grid-cols-2 gap-4 max-w-3xl mt-16 mx-auto">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d1">
    <div class="flex items-center gap-2 self-center text-[3.5rem] font-bold text-[#e60024]">
      <i class="fa-solid fa-arrow-up text-[2.5rem]"></i>
      <CountUp :to="39" suffix="%" :duration="1200" />
    </div>
    <span class="text-center">Increase in agency users the following year</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d2">
    <div class="flex items-center gap-2 self-center text-[3.5rem] font-bold text-[#e60024]">
      <CountUp :to="76" prefix="$" suffix="M" :duration="1400" />
    </div>
    <span class="text-center">ARR the following year (from $26M previous year)</span>
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s_goals" class="-mt-10 mb-10 mx-auto" :initial-index="3" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Business goals</h2>

<div class="flex flex-col gap-4 max-w-3xl mt-6">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d1">
    <span class="check-wrap shrink-0 anim-check-d1"><i class="fa-regular fa-square text-[#e60024] text-[1.5rem] check-empty"></i><i class="fa-solid fa-square-check text-[#e60024] text-[1.5rem] check-filled"></i></span>
    <span>Add line items to campaign creation flow</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d2">
    <span class="check-wrap shrink-0 anim-check-d2"><i class="fa-regular fa-square text-[#e60024] text-[1.5rem] check-empty"></i><i class="fa-solid fa-square-check text-[#e60024] text-[1.5rem] check-filled"></i></span>
    <span>Add extra targeting options (dayparting, pacing, etc)</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d3">
    <span class="check-wrap shrink-0 anim-check-d3"><i class="fa-regular fa-square text-[#e60024] text-[1.5rem] check-empty"></i><i class="fa-solid fa-square-check text-[#e60024] text-[1.5rem] check-filled"></i></span>
    <span>Have campaign flow (and entire platform) redesigns done by Oct 2024 launch</span>
  </div>
</div>

---
layout: default
transition: slide-left
---


<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">What I would do differently</h2>

<div class="grid grid-cols-2 gap-4 w-full mt-10">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d1">
    <i class="fa-solid fa-clock text-[#e60024] text-[2rem] self-center"></i>
    <span>Secure help sooner. Was able to secure budget for contractor but not until the very end.</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d2">
    <i class="fa-solid fa-route text-[#e60024] text-[2rem] self-center"></i>
    <span>Set up timeline for deliverables earlier. Adjust scope as needed.</span>
  </div>
</div>

---
layout: default
transition: slide-left
---


<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Learnings</h2>

<div class="grid grid-cols-2 gap-4 w-full mt-10">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d1">
    <i class="fa-solid fa-clock text-[#e60024] text-[2rem] self-center"></i>
    <span>Secure help sooner. Was able to secure budget for contractor but not until the very end.</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d2">
    <i class="fa-solid fa-route text-[#e60024] text-[2rem] self-center"></i>
    <span>Set up timeline for deliverables earlier. Adjust scope as needed.</span>
  </div>
</div>

---
layout: two-cols
layoutClass: h-full
transition: slide-left
---

<div class="slide-4-root flex h-full min-h-0 flex-col py-10 pr-4">
  <div class="flex min-h-0 min-w-0 flex-1 flex-col">
    <div class="flex h-full min-h-0 w-full max-w-md flex-1 flex-col items-start self-stretch py-6 pr-6 pl-0 md:max-w-xl md:py-8 md:pr-8 md:pl-0">
      <div class="mb-8 mt-20 text-3xl font-semibold tracking-tight text-[#3A4652] md:mt-24 md:text-4xl lg:mt-28 lg:text-5xl anim-fade-up"><span class="block">Designing for <span style="color:#e60024">VAST</span> Support</span></div>
      <div class="max-w-xs text-[28px] font-medium leading-snug text-[#3A4652]/85 anim-fade-up anim-d2">Adding new creative upload feature</div>
      <div class="mt-auto self-start anim-fade-up anim-d4">
        <span class="hero-pill">CASE STUDY</span>
      </div>
    </div>
  </div>
</div>

::right::

<div class="flex h-full min-h-0 w-full flex-col">
<PinterestMasonry :show-images="false" span-src="./slides/assets/VASTgrid4.png" span-position="center 28%" :span-flex="0.8" :merge-right-stack="true" right-src="./slides/assets/VASTgrid3.png" right-position="left center" left-top-src="./slides/assets/VASTgrid2.png" left-bottom-src="./slides/assets/VASTgrid1.png" left-bottom-position="center 18%" tile-border="0.5px solid #D2D2D2" />
</div>

---
layout: default
transition: slide-left
---


<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">What is VAST?</h2>

<div class="flex gap-8 mt-4 items-start w-full">
  <div class="flex flex-col gap-4 min-w-0 flex-shrink-0 w-[28rem] max-w-[28rem] pt-2">
    <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Video Ad Serving Template</span>
    </div>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d2">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>VAST tag contains creative assets, tracking pixels and metadata</span>
    </div>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d3">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>One tag works across dozens of ad platforms simultaneously</span>
    </div>
  </div>
  <div class="flex-1 min-w-0 flex justify-center items-start self-stretch -mt-12">
    <div class="vast-xml-box overflow-auto rounded-2xl bg-white px-5 py-4 font-mono text-[0.5rem] leading-snug text-[#e60024] anim-fade-up anim-d2">
      <pre class="m-0 whitespace-pre"><code>&lt;VAST version="2.0"&gt;
  &lt;Ad id="601364"&gt;
    &lt;InLine&gt;
      &lt;AdSystem&gt;Adsystem Example&lt;/AdSystem&gt;
      &lt;AdTitle&gt;VAST 2.0&lt;/AdTitle&gt;
      &lt;Description&gt;VAST 2.0&lt;/Description&gt;
      &lt;Error&gt;http://myErrorURL/error&lt;/Error&gt;
      &lt;Impression&gt;http://myTrackingURL/impression&lt;/Impression&gt;
      &lt;Creatives&gt;
        &lt;Creative AdID="12345"&gt;
          &lt;Linear&gt;
           &lt;Duration&gt;00:00:30&lt;/Duration&gt;
            &lt;TrackingEvents&gt;
              &lt;Tracking event="creativeView"&gt;http://myTrackingURL/creativeView&lt;/Tracking&gt;
              &lt;Tracking event="start"&gt;http://myTrackingURL/start&lt;/Tracking&gt;
            &lt;/TrackingEvents&gt;
            &lt;VideoClicks&gt;
              &lt;ClickThrough&gt;http://www.examplemedia.com&lt;/ClickThrough&gt;
              &lt;ClickTracking&gt;http://myTrackingURL/click&lt;/ClickTracking&gt;
            &lt;/VideoClicks&gt;
            &lt;MediaFiles&gt;
             &lt;MediaFile delivery="progressive" type="video/x-flv" bitrate="500" width="400" height="300" scalable="true" maintainAspectRatio="true"&gt;
        http://demo.examplemedia.com/video/acudeo/Carrot_400x300_500kb.flv
          &lt;/MediaFile&gt;
         &lt;/MediaFiles&gt;
          &lt;/Linear&gt;
    &lt;/Creative&gt;
    &lt;Creative AdID="601364-Companion"&gt;
      &lt;CompanionAds&gt;
           &lt;Companion width="300" height="250"&gt;
             &lt;StaticResource creativeType="image/jpeg"&gt;
             http://demo.examplemedia.com/vast/this_is_the_ad.jpg
             &lt;/StaticResource&gt;
             &lt;TrackingEvents&gt;
               &lt;Tracking event="creativeView"&gt;http://myTrackingURL/tracking&lt;/Tracking&gt;
             &lt;/TrackingEvents&gt;
           &lt;CompanionClickThrough&gt;http://www.examplemedia.com&lt;/CompanionClickThrough&gt;
           &lt;/Companion&gt;
         &lt;/CompanionAds&gt;
       &lt;/Creative&gt;
     &lt;/Creatives&gt;
   &lt;/InLine&gt;
   &lt;/Ad&gt;
&lt;/VAST&gt;</code></pre>
    </div>
  </div>
</div>

---
layout: default
transition: slide-left
---


<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Why VAST</h2>

<div class="flex flex-col gap-4 max-w-3xl mt-6">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d1">
    <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
    <span>Added before new platform rollout (implemented in a couple of weeks)</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d2">
    <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
    <span>Common request from agencies</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d3">
    <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
    <span>Vague scope/requirements</span>
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s9_copy" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<div class="flex h-full w-full items-center justify-center">
  <div
    class="mx-auto w-full max-w-4xl rounded-2xl bg-white border border-slate-200/40 px-14 py-12 text-left text-[2rem] font-normal italic leading-snug text-[#e60024] shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-in-scale"
  >
    Agencies & large advertisers wanted VAST feature in order to use campaign manager
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s7_copy" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Initial requirements</h2>

<div class="grid grid-cols-3 auto-rows-fr gap-4 w-full mt-16">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#e60024]" aria-hidden="true"><path d="M342.6 73.4C330.1 60.9 309.8 60.9 297.3 73.4L169.3 201.4C156.8 213.9 156.8 234.2 169.3 246.7C181.8 259.2 202.1 259.2 214.6 246.7L288 173.3L288 384C288 401.7 302.3 416 320 416C337.7 416 352 401.7 352 384L352 173.3L425.4 246.7C437.9 259.2 458.2 259.2 470.7 246.7C483.2 234.2 483.2 213.9 470.7 201.4L342.7 73.4zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 480C96 533 139 576 192 576L448 576C501 576 544 533 544 480L544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480C480 497.7 465.7 512 448 512L192 512C174.3 512 160 497.7 160 480L160 416z"/></svg>
    <span>How to upload a VAST</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#e60024]" aria-hidden="true"><path d="M512 160L512 416L128 416L128 160L512 160zM128 96C92.7 96 64 124.7 64 160L64 416C64 451.3 92.7 480 128 480L272 480L256 528L184 528C170.7 528 160 538.7 160 552C160 565.3 170.7 576 184 576L456 576C469.3 576 480 565.3 480 552C480 538.7 469.3 528 456 528L384 528L368 480L512 480C547.3 480 576 451.3 576 416L576 160C576 124.7 547.3 96 512 96L128 96z"/></svg>
    <span>How to display VAST assets</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#e60024]" aria-hidden="true"><path d="M320 64C334.7 64 348.2 72.1 355.2 85L571.2 485C577.9 497.4 577.6 512.4 570.4 524.5C563.2 536.6 550.1 544 536 544L104 544C89.9 544 76.8 536.6 69.6 524.5C62.4 512.4 62.1 497.4 68.8 485L284.8 85C291.8 72.1 305.3 64 320 64zM320 416C302.3 416 288 430.3 288 448C288 465.7 302.3 480 320 480C337.7 480 352 465.7 352 448C352 430.3 337.7 416 320 416zM320 224C301.8 224 287.3 239.5 288.6 257.7L296 361.7C296.9 374.2 307.4 384 319.9 384C332.5 384 342.9 374.3 343.8 361.7L351.2 257.7C352.5 239.5 338.1 224 319.8 224z"/></svg>
    <span>How to display VAST errors</span>
  </div>
</div>

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Current creative upload</h2>

<AdManagerStack :images="['./slides/assets/upload1.png', './slides/assets/upload2.png', './slides/assets/upload3.png']" :compact="true" :viewport-height="520" layer-max-width="85rem" layer-width-pct="92%" pull-down="-2.3rem" />

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">First pass</h2>

<div class="flex gap-6 mt-4 items-start w-full">
  <div class="flex flex-col gap-3 w-52 min-w-0 flex-shrink-0 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[0.95rem] font-medium leading-snug shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Initial design</span>
    </div>
    <CarouselSyncBullet :show-at-click="3" class="!text-[0.95rem] leading-snug">
      Side tabs were better
    </CarouselSyncBullet>
  </div>
  <div class="flex-1 min-w-0 -mt-4">
    <AdManagerStack :key="s37_copy" :images="['./slides/assets/VAST1a.png', './slides/assets/Vast1b.png', './slides/assets/VASTalternate.png', './slides/assets/Vast1c.png']" :compact="true" :viewport-height="620" layer-max-width="100rem" layer-width-pct="95%" pull-down="-5rem" pile-shift="-1.5rem" />
  </div>
</div>

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Feedback</h2>

<div class="flex gap-6 mt-4 items-start w-full">
  <div class="flex flex-col gap-3 w-52 min-w-0 flex-shrink-0 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[0.95rem] font-medium leading-snug shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Most users did not understand macros</span>
    </div>
    <CarouselSyncBullet :show-at-click="1" class="!text-[0.95rem] leading-snug">
      Icons were not matching correct status
    </CarouselSyncBullet>
  </div>
  <div class="flex-1 min-w-0 -mt-4">
    <AdManagerStack :key="s37_copy2" :images="['./slides/assets/VASTfeedback1.png', './slides/assets/VASTfeedback2.png']" :compact="true" :viewport-height="620" layer-max-width="100rem" layer-width-pct="95%" pull-down="-5.7rem" pile-shift="-1.5rem" />
  </div>
</div>

---
layout: default
transition: slide-left
class: slide-starting-off
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-10">Main issues</h2>

<div class="starting-off-grid grid grid-cols-2 gap-4 w-full">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="h-8 w-8 shrink-0 self-center fill-[#e60024]" aria-hidden="true"><path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM320 240C302.3 240 288 254.3 288 272C288 285.3 277.3 296 264 296C250.7 296 240 285.3 240 272C240 227.8 275.8 192 320 192C364.2 192 400 227.8 400 272C400 319.2 364 339.2 344 346.5L344 350.3C344 363.6 333.3 374.3 320 374.3C306.7 374.3 296 363.6 296 350.3L296 342.2C296 321.7 310.8 307 326.1 302C332.5 299.9 339.3 296.5 344.3 291.7C348.6 287.5 352 281.7 352 272.1C352 254.4 337.7 240.1 320 240.1zM288 432C288 414.3 302.3 400 320 400C337.7 400 352 414.3 352 432C352 449.7 337.7 464 320 464C302.3 464 288 449.7 288 432z"/></svg>
    <span>Internal users' understanding of VAST was different than PRD; leading to conflicting feedback</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="h-8 w-8 shrink-0 self-center fill-[#e60024]" aria-hidden="true"><path d="M73 39.1C63.6 29.7 48.4 29.7 39.1 39.1C29.8 48.5 29.7 63.7 39 73.1L567 601.1C576.4 610.5 591.6 610.5 600.9 601.1C610.2 591.7 610.3 576.5 600.9 567.2L343.5 309.7C398.5 298.8 440 250.2 440 192C440 125.7 386.3 72 320 72C261.8 72 213.2 113.5 202.3 168.5L73 39.1zM267.6 369.4C179.9 380.6 112 455.5 112 546.3C112 562.7 125.3 576 141.7 576L474.2 576L267.6 369.4z"/></svg>
    <span>Sudden staffing changes during project</span>
  </div>
</div>

---
layout: default
transition: slide-left
---


<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Back to drawing board</h2>

<div class="flex flex-col gap-4 max-w-3xl mt-6">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d1">
    <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
    <span>I went back and re-learned VAST info from ops users</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d2">
    <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
    <span>Had to figure out a way to display asset preview</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d3">
    <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
    <span>Discovered a legacy tool for VAST</span>
  </div>
</div>

---
layout: default
transition: slide-left
---


<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Legacy VAST tool</h2>

<div class="mt-6 flex w-full justify-center">
  <img
    src="./slides/assets/VASTTOOL.png"
    alt="VAST tool"
    class="block h-auto max-h-[min(420px,50vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_2px_16px_rgb(0_0_0_/_6%)] md:max-w-3xl"
  />
</div>

---
layout: default
transition: slide-left
---


<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Revised understanding of VAST</h2>

<div class="mt-12 w-full max-w-4xl mx-auto" style="display:grid; grid-template-columns: 1fr auto 1fr auto 1fr; grid-template-rows: auto auto; gap: 1.5rem 0.5rem; align-items: stretch;">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-6 py-5 text-slate-700 text-[1rem] font-medium leading-snug shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-up" style="animation-delay:0s"><span>Upload VAST</span></div>
  <i class="fa-solid fa-arrow-right text-[#e60024] text-[1.5rem] mx-1 anim-fade-up justify-self-center self-center" style="animation-delay:0.4s"></i>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-6 py-5 text-slate-700 text-[1rem] font-medium leading-snug shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-up" style="animation-delay:0.7s"><span>VAST passes tech specs</span></div>
  <i class="fa-solid fa-arrow-right text-[#e60024] text-[1.5rem] mx-1 anim-fade-up justify-self-center self-center" style="animation-delay:1.1s"></i>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-6 py-5 text-slate-700 text-[1rem] font-medium leading-snug shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-up" style="animation-delay:1.4s"><span>Preview assets + submit for review</span></div>
  <div class="rounded-2xl bg-white border border-red-200/50 bg-red-50/40 px-6 py-5 text-[1rem] font-medium leading-snug shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] anim-fade-up" style="animation-delay:1.8s"><span class="text-[#e60024] font-bold">VAST fails tech specs</span></div>
  <div></div>
  <div class="rounded-2xl bg-white border border-red-200/50 bg-red-50/40 px-6 py-5 text-[1rem] font-medium leading-snug shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] anim-fade-up" style="animation-delay:2.2s"><span class="text-[#e60024] font-bold">VAST fails tech specs</span></div>
  <div></div>
  <div></div>
</div>

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5 max-w-[11rem]">Designs with table</h2>

<div class="flex gap-6 mt-4 items-start w-full">
  <div class="flex flex-col gap-3 w-52 min-w-0 flex-shrink-0 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[0.95rem] font-medium leading-snug shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Inspired by legacy tool</span>
    </div>
    <CarouselSyncBullet :show-at-click="1" class="!text-[0.95rem] leading-snug">
      Users wanted to see all statuses at a glance
    </CarouselSyncBullet>
    <CarouselSyncBullet :show-at-click="1" class="!text-[0.95rem] leading-snug">
      Didn't think seeing all parameters was necessary
    </CarouselSyncBullet>
  </div>
  <div class="flex-1 min-w-0 -mt-8">
    <AdManagerStack :key="s37_copy3" :images="['./slides/assets/vasttable1.png', './slides/assets/vasttable2.png']" :compact="true" :viewport-height="620" layer-max-width="100rem" layer-width-pct="95%" pull-down="-5.7rem" pile-shift="-3rem" />
  </div>
</div>

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5 max-w-md">Asset status</h2>

<div class="flex gap-6 mt-4 items-start w-full">
  <div class="flex flex-col gap-3 w-52 min-w-0 flex-shrink-0 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[0.95rem] font-medium leading-snug shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Status chips take up too much space</span>
    </div>
    <CarouselSyncBullet :show-at-click="1" class="!text-[0.95rem] leading-snug">
      Status on hover
    </CarouselSyncBullet>
  </div>
  <div class="flex-1 min-w-0 -mt-8">
    <AdManagerStack :key="s37_copy4" :images="['./slides/assets/VASTfinal1.png', './slides/assets/VASTfinal2.png']" :compact="true" :viewport-height="620" layer-max-width="100rem" layer-width-pct="95%" pull-down="-3rem" pile-shift="-3rem" />
  </div>
</div>

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5 max-w-md">URL entry</h2>

<div class="flex gap-6 mt-4 items-start w-full">
  <div class="flex flex-col gap-3 w-52 min-w-0 flex-shrink-0 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[0.95rem] font-medium leading-snug shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#e60024] text-[0.5rem] shrink-0"></i>
      <span>Show most relevant macros</span>
    </div>
    <CarouselSyncBullet :show-at-click="1" class="!text-[0.95rem] leading-snug">
      Error state prevents user from moving on
    </CarouselSyncBullet>
  </div>
  <div class="flex-1 min-w-0 -mt-8">
    <AdManagerStack :key="s37_copy5" :images="['./slides/assets/Vastrevised1.png', './slides/assets/Vastrevised1a.png']" :compact="true" :viewport-height="620" layer-max-width="100rem" layer-width-pct="95%" pull-down="-3rem" pile-shift="-3rem" />
  </div>
</div>

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-2 max-w-md">End-to-end flow</h2>

<div class="mt-4 flex w-full justify-center px-2">
  <video
    class="mx-auto block h-auto max-h-[min(490px,51vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_2px_16px_rgb(0_0_0_/_8%)] md:max-w-3xl"
    autoplay
    loop
    muted
    playsinline
    preload="metadata"
  >
    <source src="./slides/assets/VASTfinal.mp4" type="video/mp4" />
  </video>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s7_copy3" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Impact</h2>

<div class="mt-10 grid grid-cols-2 gap-4 w-full">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d1">
    <i class="fa-brands fa-google text-[#e60024] text-[2rem]"></i>
    <span>VAST implementation removed a significant blocker for Agency use</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d2">
    <i class="fa-solid fa-diagram-project text-[#e60024] text-[2rem]"></i>
    <span>VAST flow I created is still in platform today</span>
  </div>
</div>

---
layout: two-cols

layoutClass: h-full
transition: fade-out
---

<div class="flex h-full min-h-0 flex-col py-10 pr-4">
  <div class="flex min-h-0 min-w-0 flex-1 flex-col">
<HeroTitle compact>
  Thank you

  <template #subtitle>
    <p>Q&A</p>
  </template>
</HeroTitle>
  </div>
</div>

::right::

<div class="flex h-full min-h-0 w-full flex-col pl-4">
<PinterestMasonry placement="title" left-top-small-src="/IMG_4215.jpg" left-mid-src="/20221117_091012.jpg" left-top-src="/PXL_20241205_015703401.jpg" right-tall-src="/IMG_20200523_120959.jpg" right-bottom-src="/PXL_20240210_213758992.jpg" />
</div>

