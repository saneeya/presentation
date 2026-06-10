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
  sans: 'Manrope,Space Grotesk'
  mono: JetBrains Mono
  provider: google
  weights: [ 300, 400, 500, 600, 700 ]
themeConfig:
  primary: '#0D9488'
defaults:
  layout: default
layout: two-cols
layoutClass: h-full
---

<div class="flex h-full min-h-0 flex-col py-10 pr-4">
  <div class="flex min-h-0 min-w-0 flex-1 flex-col">
<HeroTitle compact>
  <span style="color:#3A4652">Designing for <span style="color:#0D9488">Advertisers</span></span>

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
<PinterestMasonry placement="title" left-top-small-src="./slides/assets/cat.jpg" left-top-small-position="center 65%" />
</div>

<!--
hello my name is Saneeya and I'm here to go over some of the work I've done in ad tech
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Agenda</h2>

<div class="flex flex-col gap-6 w-full mt-10">
  <div class="flex items-center gap-4 text-slate-700 text-[1.1rem] font-medium anim-fade-up anim-d1">
    <span class="text-[#0D9488] font-semibold text-[1rem] w-6">01</span>
    <span>About</span>
  </div>
  <div class="flex items-center gap-4 text-slate-700 text-[1.1rem] font-medium anim-fade-up anim-d2">
    <span class="text-[#0D9488] font-semibold text-[1rem] w-6">02</span>
    <span>Mini Case Study: Making Filters Functional</span>
  </div>
  <div class="flex items-center gap-4 text-slate-700 text-[1.1rem] font-medium anim-fade-up anim-d3">
    <span class="text-[#0D9488] font-semibold text-[1rem] w-6">03</span>
    <span>Case Study: Campaign Creation Flow</span>
  </div>
  <div class="flex items-center gap-4 text-slate-700 text-[1.1rem] font-medium anim-fade-up anim-d4">
    <span class="text-[#0D9488] font-semibold text-[1rem] w-6">04</span>
    <span>Case Study: VAST Implementation</span>
  </div>
  <div class="flex items-center gap-4 text-slate-700 text-[1.1rem] font-medium anim-fade-up anim-d5">
    <span class="text-[#0D9488] font-semibold text-[1rem] w-6">05</span>
    <span>Q & A</span>
  </div>
</div>

<!--
Here is the agenda for today, feel free to interrupt of you have questions you want to ask during this presentation or you can wait until the end where I have some time scheduled for Q and A
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
transition: slide-left
layout: two-cols
layoutClass: h-full layout-wide-right
---

<div class="mt-32">

## Background

</div>

::right::

<div class="flex h-full min-h-0 w-full flex-col justify-center pl-0 -translate-x-20">
<AdManagerStack
  :images="['./slides/assets/About6.jpg', './slides/assets/About7.png', './slides/assets/About8.png', './slides/assets/About5.jpg']"
  :image-scales="[1, 0.78, 1, 1]"
  :compact="true"
  :viewport-height="610"
  layer-max-width="100%"
  layer-width-pct="100%"
  pull-down="4.5rem"
  pile-shift="1rem"
/>
</div>

<!--
and here is my professional background. Back in the day, I spent years doing graphic design in a variety of industries.

One example was this billboard I did for the local county fair.

Eventually I did a career pivot to UX, my first tech role was at McGraw Hill Education, which is a textbook company but also has a suite of ed tech products. One of those products was ALEKS which I did most of my worn on. I  designed teacher and student facing user interfaces and even some other things like this logo I made for the 20th anniversary. 

After McGraw Hill, I spent some time at a mortgage company doing more enterprise platforms , this time for loan officers and real estate agents. While there,  I learned a lot about how regulated and complicated work flows behave. 

All of this together really helped when I joined Disney. I was on the ads design team but initially I knew nothing about ad tech,But since then I have worked on several platforms for advertisers, internal users and even some customer-facing products for almost 5 years now
-->

---
transition: slide-left
layout: two-cols
layoutClass: h-full layout-wide-right
---

<div class="mt-32">

## About

</div>

::right::

<div class="flex h-full min-h-0 w-full flex-col justify-center pl-0 -translate-x-20">
<AdManagerStack
  :images="['./slides/assets/About4.jpg', './slides/assets/About1.jpg', './slides/assets/About2.jpg', './slides/assets/About3.jpg']"
  :compact="true"
  :viewport-height="610"
  layer-max-width="100%"
  layer-width-pct="100%"
  pull-down="4.5rem"
  pile-shift="1rem"
/>
</div>

<!--
Before I dive into the work, I'd like to go over what I call my "creative background" One thing about me is I like creating things. Things in all sorts of formats. Here is a bedroom wall which I painted myself and while I didn't make the art, I did curate it and arrange it in a specific way 

and I dont just decorate physicially , here is  my virtual home in Final Fantasy 14, an online multiplayer game which was my pandemic game. One of the most fun things for me was to was decorate these homes, this screenshot here shows a room I did where I placed every single object like the food on top of this table

And I also like creating real life things. I dont crochet as much as I used to but I have made alot small toys such as this baby groot. And the things I like creating the most, are of course the ones I can eat such as this tart
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s11_copy_agenda" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Old Process (sort of)</h2>

<div class="flex flex-col gap-3 mt-16 w-full max-w-4xl mx-auto">
  <div style="display:grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr; gap: 0.75rem 0.5rem; align-items: center;">
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d1">Discovery</div>
    <i class="fa-solid fa-arrow-right text-[#0D9488] text-[1.5rem] shrink-0 anim-fade-up anim-d2"></i>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d2">Problem Statement</div>
    <i class="fa-solid fa-arrow-right text-[#0D9488] text-[1.5rem] shrink-0 anim-fade-up anim-d3"></i>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d3">Wireframes</div>
    <i class="fa-solid fa-arrow-right text-[#0D9488] text-[1.5rem] shrink-0 anim-fade-up anim-d4"></i>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d4">High Fidelity</div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class="flex justify-center">
      <i class="fa-solid fa-arrow-down-long text-[#0D9488] text-[1.5rem]"></i>
    </div>
  </div>
  <div style="display:grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr; gap: 0.75rem 0.5rem; align-items: center;">
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d4">Hand off</div>
    <i class="fa-solid fa-arrow-left text-[#0D9488] text-[1.5rem] shrink-0 anim-fade-up anim-d4"></i>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d4">Final Designs</div>
    <i class="fa-solid fa-arrow-left text-[#0D9488] text-[1.5rem] shrink-0 anim-fade-up anim-d4"></i>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d4">Revisions</div>
    <i class="fa-solid fa-arrow-left text-[#0D9488] text-[1.5rem] shrink-0 anim-fade-up anim-d4"></i>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d4">User Testing</div>
  </div>
</div>

<!--
Now, i was able to reach the "destination" but this was a long 2-year journey that took me a while to get to and had many challenges along the way
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s11_copy_agenda_dup" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Now (sort of)</h2>

<div class="flex flex-col gap-3 mt-16 w-full max-w-4xl mx-auto">
  <div style="display:grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr; gap: 0.75rem 0.5rem; align-items: center;">
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d1">PRD</div>
    <i class="fa-solid fa-arrow-right text-[#0D9488] text-[1.5rem] shrink-0 anim-fade-up anim-d2"></i>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d2">AI Prototype</div>
    <i class="fa-solid fa-arrow-right text-[#0D9488] text-[1.5rem] shrink-0 anim-fade-up anim-d3"></i>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d3">User Feedback</div>
    <i class="fa-solid fa-arrow-right text-[#0D9488] text-[1.5rem] shrink-0 anim-fade-up anim-d4"></i>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d4">AI Prototype (revisions)</div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class="flex justify-center">
      <i class="fa-solid fa-arrow-down-long text-[#0D9488] text-[1.5rem]"></i>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d4">Dev back-and-forth</div>
    <i class="fa-solid fa-arrow-left text-[#0D9488] text-[1.5rem] shrink-0 anim-fade-up anim-d4"></i>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d4">Stakeholder back-and-forth</div>
  </div>
</div>

<!--
Now, i was able to reach the "destination" but this was a long 2-year journey that took me a while to get to and had many challenges along the way
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s11_copy_agenda_dup2" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">How I work (now)</h2>

<div class="grid grid-cols-3 gap-4 max-w-4xl mt-16">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col items-center text-center gap-3 anim-fade-up anim-d1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="h-8 w-8 fill-[#0D9488]" aria-hidden="true"><path d="M568.4 196.5C563.9 207 550 206.3 543.5 196.9C515.7 156.9 477.4 124.7 432.5 104.3C422.1 99.6 418.8 86 428.4 79.7C443.4 69.8 461.4 64 480.7 64C533.3 64 575.9 106.6 575.9 159.2C575.9 172.4 573.2 185 568.3 196.5zM96.5 196.9C90 206.3 76 207 71.6 196.5C66.7 185 64 172.4 64 159.2C64 106.6 106.6 64 159.2 64C178.5 64 196.5 69.8 211.5 79.7C221.1 86 217.8 99.6 207.4 104.3C162.6 124.7 124.3 156.9 96.4 196.9zM454.2 531.4C416.8 559.4 370.3 576 320 576C269.7 576 223.2 559.4 185.9 531.4L150.6 566.6C138.1 579.1 117.8 579.1 105.3 566.6C92.8 554.1 92.8 533.8 105.3 521.3L140.5 486.1C112.6 448.8 96 402.3 96 352C96 228.3 196.3 128 320 128C443.7 128 544 228.3 544 352C544 402.3 527.4 448.8 499.4 486.2L534.6 521.4C547.1 533.9 547.1 554.2 534.6 566.7C522.1 579.2 501.8 579.2 489.3 566.7L454.1 531.5zM344 248C344 234.7 333.3 224 320 224C306.7 224 296 234.7 296 248L296 352C296 358.4 298.5 364.5 303 369L359 425C368.4 434.4 383.6 434.4 392.9 425C402.2 415.6 402.3 400.4 392.9 391.1L343.9 342.1L343.9 248z"/></svg>
    <span>Managing resources: time/headcount/tokens</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col items-center text-center gap-3 anim-fade-up anim-d2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="h-8 w-8 fill-[#0D9488]" aria-hidden="true"><path d="M320 80C377.4 80 424 126.6 424 184C424 241.4 377.4 288 320 288C262.6 288 216 241.4 216 184C216 126.6 262.6 80 320 80zM96 152C135.8 152 168 184.2 168 224C168 263.8 135.8 296 96 296C56.2 296 24 263.8 24 224C24 184.2 56.2 152 96 152zM0 480C0 409.3 57.3 352 128 352C140.8 352 153.2 353.9 164.9 357.4C132 394.2 112 442.8 112 496L112 512C112 523.4 114.4 534.2 118.7 544L32 544C14.3 544 0 529.7 0 512L0 480zM521.3 544C525.6 534.2 528 523.4 528 512L528 496C528 442.8 508 394.2 475.1 357.4C486.8 353.9 499.2 352 512 352C582.7 352 640 409.3 640 480L640 512C640 529.7 625.7 544 608 544L521.3 544zM472 224C472 184.2 504.2 152 544 152C583.8 152 616 184.2 616 224C616 263.8 583.8 296 544 296C504.2 296 472 263.8 472 224zM160 496C160 407.6 231.6 336 320 336C408.4 336 480 407.6 480 496L480 512C480 529.7 465.7 544 448 544L192 544C174.3 544 160 529.7 160 512L160 496z"/></svg>
    <span>Working w/ stakeholders: collaboration &amp; negotiations</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col items-center text-center gap-3 anim-fade-up anim-d3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="h-8 w-8 fill-[#0D9488]" aria-hidden="true"><path d="M64 183.4C44.9 172.4 32 151.7 32 128C32 92.7 60.7 64 96 64C119.7 64 140.4 76.9 151.4 96L488.5 96C499.6 76.9 520.2 64 543.9 64C579.2 64 607.9 92.7 607.9 128C607.9 151.7 595 172.4 575.9 183.4L575.9 456.5C595 467.6 607.9 488.2 607.9 511.9C607.9 547.2 579.2 575.9 543.9 575.9C520.2 575.9 499.5 563 488.5 543.9L151.4 543.9C140.3 563 119.7 575.9 96 575.9C60.7 575.9 32 547.2 32 511.9C32 488.2 44.9 467.5 64 456.5L64 183.4zM512 183.4C502.3 177.8 494.2 169.7 488.6 160L151.4 160C145.8 169.7 137.7 177.8 128 183.4L128 456.5C137.7 462.1 145.8 470.2 151.4 479.9L488.5 479.9C494.1 470.2 502.2 462.1 511.9 456.5L511.9 183.4zM176 240C176 222.3 190.3 208 208 208L320 208C337.7 208 352 222.3 352 240L352 304C352 321.7 337.7 336 320 336L208 336C190.3 336 176 321.7 176 304L176 240zM288 384L320 384C364.2 384 400 348.2 400 304L432 304C449.7 304 464 318.3 464 336L464 400C464 417.7 449.7 432 432 432L320 432C302.3 432 288 417.7 288 400L288 384z"/></svg>
    <span>Setting up the &quot;designer&quot; difference in AI world</span>
  </div>
</div>

<!--
Now, i was able to reach the "destination" but this was a long 2-year journey that took me a while to get to and had many challenges along the way
-->

---
layout: two-cols
layoutClass: h-full
transition: slide-left
---

<div class="slide-4-root flex h-full min-h-0 flex-col py-10 pr-4">
  <div class="flex min-h-0 min-w-0 flex-1 flex-col">
    <div class="flex h-full min-h-0 w-full max-w-md flex-1 flex-col items-start self-stretch py-6 pr-6 pl-0 md:max-w-xl md:py-8 md:pr-8 md:pl-0">
      <div class="mb-8 mt-10 text-3xl font-semibold tracking-tight text-[#3A4652] md:mt-14 md:text-4xl lg:mt-16 lg:text-5xl anim-fade-up"><span class="block">Making</span><span class="block whitespace-nowrap"><span class="text-[#0D9488]">Filters</span> Functional</span></div>
      <div class="max-w-lg text-[28px] font-medium leading-snug text-[#3A4652]/85 anim-fade-up anim-d2 mt-4">Redoing filters for a data-dense tool</div>
      <div class="mt-auto self-start anim-fade-up anim-d4">
        <span class="hero-pill">MINI CASE STUDY</span>
      </div>
    </div>
  </div>
</div>

::right::

<div class="flex h-full min-h-0 w-full flex-col">
<PinterestMasonry :show-images="false" span-src="./slides/assets/FI.png" span-position="center 28%" :span-flex="0.8" :merge-right-stack="true" right-src="./slides/assets/MCFilters.gif" right-position="left center" left-top-src="/filter88.png" left-bottom-src="/datepicker.png" left-bottom-position="center 18%" />
</div>

---
layout: two-cols
layoutClass: h-full
transition: slide-left
---

<div class="slide-4-root flex h-full min-h-0 flex-col py-10 pr-4">
  <div class="flex min-h-0 min-w-0 flex-1 flex-col">
    <div class="flex h-full min-h-0 w-full max-w-md flex-1 flex-col items-start self-stretch py-6 pr-6 pl-0 md:max-w-xl md:py-8 md:pr-8 md:pl-0">
      <div class="flex flex-col gap-8 mt-4">
        <div class="flex flex-col gap-2 anim-fade-up anim-d2">
          <div class="text-sm font-semibold uppercase tracking-wide text-[#0D9488]">Timeline</div>
          <div class="max-w-lg text-[28px] font-medium leading-snug text-[#3A4652]/85">6 Months</div>
        </div>
        <div class="flex flex-col gap-2 anim-fade-up anim-d3">
          <div class="text-sm font-semibold uppercase tracking-wide text-[#0D9488]">Type</div>
          <div class="max-w-lg text-[28px] font-medium leading-snug text-[#3A4652]/85">Internal Tool</div>
        </div>
        <div class="flex flex-col gap-2 anim-fade-up anim-d4">
          <div class="text-sm font-semibold uppercase tracking-wide text-[#0D9488]">Status</div>
          <div class="max-w-lg text-[28px] font-medium leading-snug text-[#3A4652]/85">In Development</div>
        </div>
      </div>
    </div>
  </div>
</div>

::right::

<div class="flex h-full min-h-0 w-full flex-col">
<PinterestMasonry :show-images="false" span-src="./slides/assets/FI.png" span-position="center 28%" :span-flex="0.8" :merge-right-stack="true" right-src="./slides/assets/MCFilters.gif" right-position="left center" left-top-src="/filter88.png" left-bottom-src="/datepicker.png" left-bottom-position="center 18%" />
</div>

---
layout: default
transition: fade
---

<CaseStudyPillTabs :key="s_filters_open" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Mission Control filters</h2>

<div class="mt-4 flex w-full justify-center px-2 anim-fade-in-scale">
  <video
    class="mx-auto block h-auto max-h-[min(400px,46vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_4px_24px_rgb(0_0_0_/_12%)] md:max-w-4xl"
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

<CaseStudyPillTabs :key="s_filters_vid" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Filter map</h2>

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

<CaseStudyPillTabs :key="s_filters_map" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">User feedback</h2>

<div class="grid grid-cols-2 grid-rows-2 auto-rows-fr gap-4 max-w-3xl">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d1">
    <i class="fa-brands fa-google text-[#0D9488] text-[2rem]"></i>
    <span>Users were used to having custom filters in GAM (which we were trying to replace)</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d2">
    <i class="fa-solid fa-tags text-[#0D9488] text-[2rem]"></i>
    <span>They wanted to filter by asset tags &amp; targeting values</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d3">
    <i class="fa-regular fa-square-caret-down text-[#0D9488] text-[2rem]"></i>
    <span>Filter list is one long dropdown, a lot of scrolling</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d4">
    <i class="fa-solid fa-filter text-[#0D9488] text-[2rem]"></i>
    <span>They wanted more granular filtering (AND/OR, IS, IS NOT, etc.)</span>
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s_filters_uf" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Technical issues</h2>

<div class="grid grid-cols-3 gap-4 max-w-4xl mt-16">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d1">
    <i class="fa-solid fa-filter-circle-xmark text-[#0D9488] text-[2rem] self-center"></i>
    <span>Current filter behaviors were implemented inconsistently</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d2">
    <i class="fa-solid fa-layer-group text-[#0D9488] text-[2rem] self-center"></i>
    <span>Filters were added on ad hoc on a case by case, field by field basis</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d3">
    <i class="fa-solid fa-expand text-[#0D9488] text-[2rem] self-center"></i>
    <span>Filters were difficult to scale especially when new fields or data types were introduced</span>
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s_filters_tech" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<div class="flex h-full w-full items-center justify-center">
  <div
    class="mx-auto w-full max-w-4xl rounded-2xl bg-white border border-slate-200/40 px-14 py-12 text-left text-[2rem] font-normal italic leading-snug text-[#0D9488] shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-in-scale"
  >
    Filters were inconsistent, difficult to use, and did not have boolean (AND/OR) logic.
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s_filters_quote" class="-mt-10 mb-10 mx-auto" :initial-index="2" process-label="Designs" />

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

<CaseStudyPillTabs :key="s_filters_goals1" class="-mt-10 mb-10 mx-auto" :initial-index="2" process-label="Designs" />

<h2 class="user-groups-slide-heading m-0 mb-2">Existing patterns</h2>

<AdManagerStack :images="['./slides/assets/MCfilter1.png', './slides/assets/MCfilter2.png', './slides/assets/MCfilter3.png']" :compact="true" :viewport-height="500" layer-max-width="82rem" layer-width-pct="92%" pull-down="-1.5rem" />

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s_filters_patterns_dup" class="-mt-10 mb-10 mx-auto" :initial-index="2" process-label="Designs" />

<div class="flex gap-8 mt-6 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-64">
    <h2 class="user-groups-slide-heading m-0">Layout options</h2>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>Filters in side panel</span>
    </div>
    <CarouselSyncBullet :show-at-click="1">Filters in modal</CarouselSyncBullet>
  </div>
  <div class="flex-1 min-w-0 flex justify-center items-start self-start mt-3">
    <AdManagerStack :images="['./slides/assets/Filters1.png', './slides/assets/Filters2.png']" :compact="true" :viewport-height="480" layer-max-width="72rem" layer-width-pct="95%" pull-down="-1rem" />
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s_filters_patterns" class="-mt-10 mb-10 mx-auto" :initial-index="2" process-label="Designs" />

<div class="flex gap-8 mt-6 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-64">
    <h2 class="user-groups-slide-heading m-0">Initial design</h2>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>Full &quot;Advanced Filters&quot; page</span>
    </div>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d2">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>Too many booleans</span>
    </div>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d3">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>Left panel is not necessary</span>
    </div>
  </div>
  <div class="flex-1 min-w-0 flex justify-center items-start self-start mt-3">
    <img
      src="./slides/assets/FI.png"
      alt="Advanced Filters"
      class="block h-auto max-h-[min(480px,58vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_2px_16px_rgb(0_0_0_/_6%)]"
    />
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s_filters_fi" class="-mt-10 mb-10 mx-auto" :initial-index="2" process-label="Designs" />

<div class="flex gap-8 mt-6 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-64">
    <h2 class="user-groups-slide-heading m-0">Option 1</h2>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>Easier to scan</span>
    </div>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d2">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>First ever AI prototype</span>
    </div>
  </div>
  <div class="flex-1 min-w-0 flex justify-center items-start self-start mt-3">
    <img
      src="./slides/assets/advancefilters.png"
      alt="Advanced Filters"
      class="block h-auto max-h-[min(480px,58vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_2px_16px_rgb(0_0_0_/_6%)]"
    />
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s_filters_adv1" class="-mt-10 mb-10 mx-auto" :initial-index="2" process-label="Designs" />

<div class="flex gap-8 mt-6 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-64">
    <h2 class="user-groups-slide-heading m-0">Option 2</h2>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>Better use of space</span>
    </div>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d2">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>Grouped filters</span>
    </div>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d3">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>Users liked this version more</span>
    </div>
  </div>
  <div class="flex-1 min-w-0 flex justify-center items-start self-start mt-3">
    <img
      src="./slides/assets/advancefilters2.png"
      alt="Advanced Filters 2"
      class="block h-auto max-h-[min(480px,58vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_2px_16px_rgb(0_0_0_/_6%)]"
    />
  </div>
</div>

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s_filters_goals2" class="-mt-10 mb-10 mx-auto" :initial-index="3" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">My goals</h2>

<div class="flex flex-col gap-4 max-w-3xl mt-6">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4">
    <span class="relative shrink-0 w-[1.5rem] h-[1.5rem]">
      <i class="fa-regular fa-square text-slate-300 text-[1.5rem] absolute inset-0 goals-uncheck" style="animation-delay:0.4s"></i>
      <i class="fa-solid fa-square-check text-[#0D9488] text-[1.5rem] absolute inset-0 goals-check" style="animation-delay:0.4s"></i>
    </span>
    <span>Introduce a filter panel or some other new selection area</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4">
    <span class="relative shrink-0 w-[1.5rem] h-[1.5rem]">
      <i class="fa-regular fa-square text-slate-300 text-[1.5rem] absolute inset-0 goals-uncheck" style="animation-delay:0.9s"></i>
      <i class="fa-solid fa-square-check text-[#0D9488] text-[1.5rem] absolute inset-0 goals-check" style="animation-delay:0.9s"></i>
    </span>
    <span>Have consistent style for each type of filter (radio, multi-select, etc)</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4">
    <span class="relative shrink-0 w-[1.5rem] h-[1.5rem]">
      <i class="fa-regular fa-square text-slate-300 text-[1.5rem] absolute inset-0 goals-uncheck" style="animation-delay:1.4s"></i>
      <i class="fa-solid fa-square-check text-[#0D9488] text-[1.5rem] absolute inset-0 goals-check" style="animation-delay:1.4s"></i>
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

<CaseStudyPillTabs :key="s_filters_takeaways" class="-mt-10 mb-10 mx-auto" :initial-index="3" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Takeaways</h2>

<div class="flex flex-row gap-4 mt-6">
  <div class="flex-1 rounded-2xl bg-white border border-slate-200/40 px-6 py-6 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col items-start gap-3 anim-fade-up anim-d1">
    <i class="fa-solid fa-arrow-pointer text-[2rem] text-[#0D9488] self-center"></i>
    <span>Prototyping advanced logic harder than intended; did not need pixel-perfect output</span>
  </div>
  <div class="flex-1 rounded-2xl bg-white border border-slate-200/40 px-6 py-6 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col items-start gap-3 anim-fade-up anim-d2">
    <i class="fa-solid fa-hourglass text-[2rem] text-[#0D9488] self-center"></i>
    <span>Should have considered more scope creep into my own workflows &amp; asked for help sooner</span>
  </div>
  <div class="flex-1 rounded-2xl bg-white border border-slate-200/40 px-6 py-6 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col items-start gap-3 anim-fade-up anim-d3">
    <i class="fa-solid fa-hands-clapping text-[2rem] text-[#0D9488] self-center"></i>
    <span>Biggest win was learning how to prototype such intricate designs</span>
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
      <div class="mb-8 mt-10 text-3xl font-semibold tracking-tight text-[#3A4652] md:mt-14 md:text-4xl lg:mt-16 lg:text-5xl anim-fade-up"><span class="block">Redesigning for <span class="text-[#0D9488]">Agency</span></span><span class="block">Scale</span></div>
      <div class="max-w-lg text-[28px] font-medium leading-snug text-[#3A4652]/85 anim-fade-up anim-d2 mt-4">Updating the Campaign Creation flow</div>
      <div class="mt-auto self-start anim-fade-up anim-d4" style="position:relative; top:1.5rem;">
        <span class="hero-pill">CASE STUDY</span>
      </div>
    </div>
  </div>
</div>

::right::

<div class="flex h-full min-h-0 w-full flex-col">
<PinterestMasonry :show-images="false" span-src="./slides/assets/Campaigngrid4.png" span-position="center 28%" :span-flex="0.8" :merge-right-stack="true" right-src="./slides/assets/Campaigngrid1.png" right-position="left center" left-top-src="./slides/assets/Campaigngrid2.png" left-bottom-src="./slides/assets/Campaigngrid3.png" left-bottom-position="center 18%" />
</div>

---
layout: two-cols
layoutClass: h-full
transition: slide-left
---

<div class="slide-4-root flex h-full min-h-0 flex-col py-10 pr-4">
  <div class="flex min-h-0 min-w-0 flex-1 flex-col">
    <div class="flex h-full min-h-0 w-full max-w-md flex-1 flex-col items-start self-stretch py-6 pr-6 pl-0 md:max-w-xl md:py-8 md:pr-8 md:pl-0">
      <div class="flex flex-col gap-8 mt-4">
        <div class="flex flex-col gap-2 anim-fade-up anim-d2">
          <div class="text-sm font-semibold uppercase tracking-wide text-[#0D9488]">Timeline</div>
          <div class="max-w-lg text-[28px] font-medium leading-snug text-[#3A4652]/85">2 Years</div>
        </div>
        <div class="flex flex-col gap-2 anim-fade-up anim-d3">
          <div class="text-sm font-semibold uppercase tracking-wide text-[#0D9488]">Role</div>
          <div class="max-w-lg text-[28px] font-medium leading-snug text-[#3A4652]/85">Lead Designer</div>
        </div>
        <div class="flex flex-col gap-2 anim-fade-up anim-d4">
          <div class="text-sm font-semibold uppercase tracking-wide text-[#0D9488]">Team</div>
          <div class="flex flex-col gap-1">
            <div class="max-w-lg text-[28px] font-medium leading-snug text-[#3A4652]/85">1 Designer</div>
            <div class="max-w-lg text-[28px] font-medium leading-snug text-[#3A4652]/85">5-7 PMs</div>
            <div class="max-w-lg text-[28px] font-medium leading-snug text-[#3A4652]/85">30-40 Internal &amp; External Deves</div>
            <div class="max-w-lg text-[28px] font-medium leading-snug text-[#3A4652]/85">QA</div>
            <div class="max-w-lg text-[28px] font-medium leading-snug text-[#3A4652]/85">Ad Sales</div>
            <div class="max-w-lg text-[28px] font-medium leading-snug text-[#3A4652]/85">Customer Support</div>
            <div class="max-w-lg text-[28px] font-medium leading-snug text-[#3A4652]/85">Ad Ops</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

::right::

<div class="flex h-full min-h-0 w-full flex-col">
<PinterestMasonry :show-images="false" span-src="./slides/assets/Campaigngrid4.png" span-position="center 28%" :span-flex="0.8" :merge-right-stack="true" right-src="./slides/assets/Campaigngrid1.png" right-position="left center" left-top-src="./slides/assets/Campaigngrid2.png" left-bottom-src="./slides/assets/Campaigngrid3.png" left-bottom-position="center 18%" />
</div>

<!--
And speaking of Ad tech, I'm going to go over my first case study which is the campaign creation flow I did for Disney Campaign Manager

So what is Disney Campaign Manager?
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
So as Jimmy explained, Disney Campaign Manager is Disney's self serve ad platform than. you can access whenever and wherever and is the product I spent most of my time at Disney working on

Before the rebrand, it was known as Hulu Ad Manager, and when I started in 2021 this was campaign creation flow looked like

It was was a page by page flow where you can set up Campaign name, dates, budget,and  targeting options such as demographics and interests
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s7" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Campaign manager in 2021</h2>

<div class="grid grid-cols-3 gap-4 max-w-4xl mt-16">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#0D9488]" aria-hidden="true"><path d="M96 160L96 400L544 400L544 160L96 160zM32 160C32 124.7 60.7 96 96 96L544 96C579.3 96 608 124.7 608 160L608 400C608 435.3 579.3 464 544 464L96 464C60.7 464 32 435.3 32 400L32 160zM192 512L448 512C465.7 512 480 526.3 480 544C480 561.7 465.7 576 448 576L192 576C174.3 576 160 561.7 160 544C160 526.3 174.3 512 192 512z"/></svg>
    <span>Launched in March 2020 as Hulu Ad Manager; maintained by 3rd party</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#0D9488]" aria-hidden="true"><path d="M96 192C96 130.1 146.1 80 208 80C269.9 80 320 130.1 320 192C320 253.9 269.9 304 208 304C146.1 304 96 253.9 96 192zM32 528C32 430.8 110.8 352 208 352C305.2 352 384 430.8 384 528L384 534C384 557.2 365.2 576 342 576L74 576C50.8 576 32 557.2 32 534L32 528zM464 128C517 128 560 171 560 224C560 277 517 320 464 320C411 320 368 277 368 224C368 171 411 128 464 128zM464 368C543.5 368 608 432.5 608 512L608 534.4C608 557.4 589.4 576 566.4 576L421.6 576C428.2 563.5 432 549.2 432 534L432 528C432 476.5 414.6 429.1 385.5 391.3C408.1 376.6 435.1 368 464 368z"/></svg>
    <span>Intended for SMBs since min campaign spend was less than traditional route</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#0D9488]" aria-hidden="true"><path d="M296 88C296 74.7 306.7 64 320 64C333.3 64 344 74.7 344 88L344 128L400 128C417.7 128 432 142.3 432 160C432 177.7 417.7 192 400 192L285.1 192C260.2 192 240 212.2 240 237.1C240 259.6 256.5 278.6 278.7 281.8L370.3 294.9C424.1 302.6 464 348.6 464 402.9C464 463.2 415.1 512 354.9 512L344 512L344 552C344 565.3 333.3 576 320 576C306.7 576 296 565.3 296 552L296 512L224 512C206.3 512 192 497.7 192 480C192 462.3 206.3 448 224 448L354.9 448C379.8 448 400 427.8 400 402.9C400 380.4 383.5 361.4 361.3 358.2L269.7 345.1C215.9 337.5 176 291.4 176 237.1C176 176.9 224.9 128 285.1 128L296 128L296 88z"/></svg>
    <span>Had $10M ARR as of Fall 2021</span>
  </div>
</div>

<!--
Hulu ad manager was launched in early 2020 and was maintained by a 3rd party agency. 

The product itself was created to let SMBs advertise on Hulu because there was a much lower minimum spend than the traditional route, $500 dollars vs $50,000

Even thought it was still a young platform, it was profitable, making about $10mil a year 

So it was making money, but the company really wanted to scale ad manager
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s8" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">New target customers</h2>

<div class="grid grid-cols-2 gap-4 max-w-4xl mt-16 w-full">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#0D9488]" aria-hidden="true"><path d="M64 128C64 92.7 92.7 64 128 64L384 64C419.3 64 448 92.7 448 128L448 249.3C401.1 268.3 368 314.3 368 368C368 395.7 376.8 421.4 391.8 442.4C340.3 463.4 304 514 304 573.1C304 574.1 304 575 304 576L128 576C92.7 576 64 547.3 64 512L64 128zM208 464L208 528L261.4 528C268.6 498.6 282.7 471.9 301.8 449.7C295.7 430.2 277.5 416 256 416C229.5 416 208 437.5 208 464zM339 288.3C338 288.1 337 288 336 288L304 288C295.2 288 288 295.2 288 304L288 336C288 344.8 295.2 352 304 352L320.7 352C322.8 329.2 329.1 307.7 339 288.3zM176 160C167.2 160 160 167.2 160 176L160 208C160 216.8 167.2 224 176 224L208 224C216.8 224 224 216.8 224 208L224 176C224 167.2 216.8 160 208 160L176 160zM288 176L288 208C288 216.8 295.2 224 304 224L336 224C344.8 224 352 216.8 352 208L352 176C352 167.2 344.8 160 336 160L304 160C295.2 160 288 167.2 288 176zM176 288C167.2 288 160 295.2 160 304L160 336C160 344.8 167.2 352 176 352L208 352C216.8 352 224 344.8 224 336L224 304C224 295.2 216.8 288 208 288L176 288zM416 368C416 323.8 451.8 288 496 288C540.2 288 576 323.8 576 368C576 412.2 540.2 448 496 448C451.8 448 416 412.2 416 368zM352 576C352 523 395 480 448 480L544 480C597 480 640 523 640 576C640 593.7 625.7 608 608 608L384 608C366.3 608 352 593.7 352 576z"/></svg>
    <span>Business goals pivoted to appeal to agencies &amp; larger advertisers (over SMBs)</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#0D9488]" aria-hidden="true"><path d="M286.1 368C384.6 368 464.4 447.8 464.4 546.3C464.4 562.7 451.1 576 434.7 576L78.1 576C61.7 576 48.4 562.7 48.4 546.3C48.4 447.8 128.2 368 226.7 368L286.1 368zM562.3 172.1C571.7 162.7 586.9 162.7 596.2 172.1C605.5 181.5 605.6 196.7 596.2 206L562.3 239.9L596.2 273.8C605.6 283.2 605.6 298.4 596.2 307.7C586.8 317 571.6 317.1 562.3 307.7L528.4 273.8L494.5 307.7C485.1 317.1 469.9 317.1 460.6 307.7C451.3 298.3 451.2 283.1 460.6 273.8L494.5 239.9L460.6 206C451.2 196.6 451.2 181.4 460.6 172.1C470 162.8 485.2 162.7 494.5 172.1L528.4 206L562.3 172.1zM256.4 312C190.1 312 136.4 258.3 136.4 192C136.4 125.7 190.1 72 256.4 72C322.7 72 376.4 125.7 376.4 192C376.4 258.3 322.7 312 256.4 312z"/></svg>
    <span>Platform lacked features the target users wanted</span>
  </div>
</div>

<!--
When I started, there was a big push to get more agency users and larger enterprise advertisers because those groups  have larger campaign spends than SMBs and most media buys on streaming are done by agencies

Unfortunately we did not offer all the features that agencies wanted
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s9" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<div class="flex h-full w-full items-center justify-center">
  <div
    class="mx-auto w-full max-w-4xl rounded-2xl bg-white border border-slate-200/40 px-14 py-12 text-left text-[2rem] font-normal italic leading-snug text-[#0D9488] shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-in-scale"
  >
    Agencies (and larger advertisers) did not see value in the self-serve ad platform
  </div>
</div>

<!--
The core problem then became how could we get these large-spend advertisers to use our platform
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s10" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Agency needs</h2>

<div class="flex gap-8 mt-4 items-start w-full">
  <div class="flex flex-col gap-4 min-w-0 flex-shrink-0 max-w-sm pt-2">
    <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d2">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>Ability to run multiple line items</span>
    </div>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d3">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
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

<!--
For this presentation, Im specifically going to focus what agencies wanted in campaign creation since it's the core experience of the platform

These advertisers wanted extra targeting options such as day parting, frequency, pacing but the main thing they wanted was line items.

I think you guys probably know what line items are but they are essentially sub campaigns  each with their own targeting within a larger campaign.

In other ad platforms, they are called ad sets or ad groups
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s23_copy" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Opportunity for a new design</h2>

<div class="max-w-4xl mt-16" style="display:grid; grid-template-columns: 1fr auto 1fr auto 1fr; grid-template-rows: auto auto; gap: 2rem 0.5rem; align-items: stretch;">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-up" style="animation-delay:0s"><span>Budget to move 3rd-party platform to be moved in-house</span></div>
  <i class="fa-solid fa-arrow-right text-[#0D9488] text-[1.5rem] mx-1 anim-fade-up justify-self-center self-center" style="animation-delay:0.4s"></i>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-up" style="animation-delay:0.7s"><span>Chance to redesign entire ad manager (reporting, creative library, etc)</span></div>
  <i class="fa-solid fa-arrow-right text-[#0D9488] text-[1.5rem] mx-1 anim-fade-up justify-self-center self-center" style="animation-delay:1.1s"></i>
  <div class="rounded-2xl bg-white px-8 py-6 text-slate-700 text-[1.1rem] font-medium anim-fade-up glow-pulse-red" style="animation-delay:1.4s"><span>I could create a new campaign flow to meet agency needs</span></div>
</div>

<!--
Part of the initiative to scale the platform was this huge 2-year project to move ad manager from the 3rd party to in house because it would save money and give us full ownership of the platform

For me, I was given the rare opportunity to redesign an entire platform and that included redoing campaign creation
-->

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

<!--
Before I started, I had 2 core goals, add line items and add more targeting options

And the most import thing: the hard deadline which was oct 1 2024
-->

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
      <i class="fa-solid fa-arrow-down-long text-[#0D9488] text-[2rem]"></i>
    </div>
    <div class="flex-1 flex justify-center">
      <i class="fa-solid fa-arrow-down-long text-[#0D9488] text-[2rem]"></i>
    </div>
    <div class="flex-1 flex justify-center">
      <i class="fa-solid fa-arrow-down-long text-[#0D9488] text-[2rem]"></i>
    </div>
    <div class="flex-1 flex justify-center">
      <i class="fa-solid fa-arrow-down-long text-[#0D9488] text-[2rem]"></i>
    </div>
  </div>
  <div class="w-full rounded-2xl bg-white border border-slate-200/40 px-8 py-5 text-[#0D9488] font-bold shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex items-center justify-center gap-3 anim-fade-up anim-d4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="w-8 h-8 shrink-0 fill-[#0D9488]" aria-hidden="true"><path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/></svg>
    <span class="text-[1.75rem]">ME</span>
  </div>
</div>

<!--
Now, I know 2 years sounds like a lot of time to work on a new design, but in reality it was just one of many thing I was working on. I was also working on updating the rest of the platform, as well updating the existing product because it was still making revenue 

One top of that, I was the sole designer for the majority of this project, So, by myself, I had to work with a ton of developers (both internal and overseas), several PMs, the sales teams, the QA team, the marketing and many more people because they were all involved in this initiave
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s9_copy" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<div class="flex h-full w-full items-center justify-center">
  <div
    class="mx-auto w-full max-w-4xl rounded-2xl bg-white border border-slate-200/40 px-14 py-12 text-left text-[2rem] font-normal italic leading-snug text-[#0D9488] shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-in-scale"
  >
    How can I show line items in the campaign creation flow?
  </div>
</div>

<!--
With all that in consideration, I had to figure out the part that kept stumping me: how to add in line items?

In the page by page flow, There were several pages you had to navigate through to create just one campaign, so how could I implement even more sub-campaigns?
-->

---
layout: default
transition: slide-left
---

<div class="flex gap-8 mt-6 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-64">
    <h2 class="user-groups-slide-heading m-0">Previous design</h2>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>Tested well in UXR</span>
    </div>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d2">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
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
Because of the limited resources, I decided to see what designs or patterns were there that I could upcycle. 

There was this single page flow that was done by a previous designer and was also user tested with SMBs. It tested well, most users really liked the layout.

I hypothesized that it would be easier to add more sections (such as new targeting) in a single page flow than adding several more pages in a page-by-page flow
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
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>Ad Groups/Sets</span>
    </div>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d2">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>Left or Right rail</span>
    </div>
  </div>
  <div class="flex-1 min-w-0">
    <AdManagerStack :images="['./slides/assets/CA1.png', './slides/assets/CA2.png', './slides/assets/CA3.png']" :compact="true" :viewport-height="820" layer-max-width="110rem" layer-width-pct="100%" pull-down="-16rem" />
  </div>
</div>

<!--
Unfortunately for me the past designer didn't really have anything that I could use for line items. So I looked at other ad platforms to see how they handled this.

Facebook has this folder structure on the left rail and called them "ad sets"

Snapchat also calls them "ad sets" and has them here in the right rail

TikTok has "ad groups" and displayed them in the left rail  in a folder structure similar to facebook
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

<!--
After looking at all the examples, I decided the core layout would look something like this


On the left would either be the navigation or line item menu, then you have the core campaign creation content in the middle, and here on the right rail would be where the inventory availability meter goes

I still hadn't decided exactly where Line items would go but I figured if I started designing, I could come up with some ideas
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s15" class="-mt-10 mb-4 mx-auto" :initial-index="2" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Top rail</h2>

<div class="flex gap-6 mt-4 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-52 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
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

<!--
I did a ton of mocks, and of my initial ideas was to have line items live in the top as tabs because it would be easier to switch back and forth

I experimented with more high fidelity versions but since line item names could be customized, these tabs could get pretty long and you end up with this weird horizontal scroll which did not look good or scale well

I ditched this idea and went on to try other options
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s16" class="-mt-10 mb-4 mx-auto" :initial-index="2" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Bulk editing</h2>

<div class="flex gap-6 mt-4 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-52 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>Early concepts for bulk editing line items</span>
    </div>
    <CarouselSyncBullet :show-at-click="1">Cut for scope</CarouselSyncBullet>
  </div>
  <div class="flex-1 min-w-0">
    <AdManagerStack :images="['./slides/assets/Concept2a.png', './slides/assets/Concept2b.png']" :compact="true" :viewport-height="820" layer-max-width="130rem" layer-width-pct="98%" pull-down="-16rem" />
  </div>
</div>

<!--
One requirement early on was the ability to do bulk editing, as in be able to edit multiple line items at the same time

because of that concept I came up with these options, like having line items in a dropdown

and this option where line items lived in the left rail. We ended up removing bulk editing for scope but this specific layout stuck with me and I decided to keep experimenting with it
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s17" class="-mt-10 mb-4 mx-auto" :initial-index="2" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Left rail</h2>

<div class="flex gap-6 mt-4 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-52 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>Can scale</span>
    </div>
    <CarouselSyncBullet :show-at-click="2">Easier to switch between line items</CarouselSyncBullet>
    <CarouselSyncBullet :show-at-click="2">Tested well internally</CarouselSyncBullet>
  </div>
  <div class="flex-1 min-w-0">
    <AdManagerStack :images="['./slides/assets/Concept3a.png', './slides/assets/Concept3b.png', './slides/assets/Concept3c.png']" :compact="true" :viewport-height="760" layer-max-width="100rem" layer-width-pct="95%" pull-down="-12rem" />
  </div>
</div>

<!--
Another idea was having tabs that could toggle back and forth with the campaign navigation and line item menu

it was still sort of awkward, so another idea was having this line item accordion that would open up the navigation when selected

this was fine but navigation doesn't change, its the same regardless of whatever line item is selected. what does change is the line item

so I reversed it and came up with this design where the line item menu was an accordion  

I shared this layout with various internal teams specifically the client facing people such as customer support and sales people and they really liked this approach
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s18" class="-mt-10 mb-4 mx-auto" :initial-index="3" />

<h2 class="user-groups-slide-heading m-0 mt-2 mb-2">Final Line Item menu</h2>

<div class="mt-2">
  <AdManagerStack
    :images="['./slides/assets/Finala.png']"
    :compact="true"
    :viewport-height="500"
    layer-max-width="88rem"
    layer-width-pct="89%"
    pull-down="-3rem"
    pile-shift="2rem"
  />
</div>

<!--
I took that idea and revised it a little and this was the final flow that launched, the only change was the name change
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s18b" class="-mt-10 mb-4 mx-auto" :initial-index="3" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">New targeting section</h2>

<AdManagerStack :images="['./slides/assets/Daypart.png']" :compact="true" :viewport-height="510" layer-max-width="86rem" layer-width-pct="89%" pull-down="-2rem" />

<!--
And because we had the single page flow now, it was easy for me to a new card with the new targeting like dayparting
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s18b_copy" class="-mt-10 mb-4 mx-auto" :initial-index="3" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-3">Full flow</h2>

<div class="mt-4 flex w-full justify-center px-2">
  <FastVideo
    src="./slides/assets/New Campaign Flow Walkthrough.mp4"
    :playback-rate="3"
    video-class="mx-auto block h-auto max-h-[min(400px,46vh)] w-auto max-w-full rounded-xl object-contain shadow-[0_2px_16px_rgb(0_0_0_/_8%)] md:max-w-3xl"
  />
</div>

<!--
Here is the final flow sped up 

you can see the new branding here
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s11_copy" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Non-linear journey</h2>

<div class="flex flex-col gap-3 mt-16 w-full max-w-4xl mx-auto">
  <div style="display:grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr; gap: 0.75rem 0.5rem; align-items: center;">
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d1">Wireframes</div>
    <i class="fa-solid fa-arrow-right text-[#0D9488] text-[1.5rem] shrink-0 anim-fade-up anim-d2"></i>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d2">Finalized designs</div>
    <i class="fa-solid fa-arrow-right text-[#0D9488] text-[1.5rem] shrink-0 anim-fade-up anim-d3"></i>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d3">Stakeholder feedback</div>
    <i class="fa-solid fa-arrow-right text-[#0D9488] text-[1.5rem] shrink-0 anim-fade-up anim-d4"></i>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d4">User testing</div>
    <div class="flex justify-center">
      <i class="fa-solid fa-arrow-down-long text-[#0D9488] text-[1.5rem]"></i>
    </div>
    <div></div>
    <div class="flex justify-center">
      <i class="fa-solid fa-arrow-down-long text-[#0D9488] text-[1.5rem]"></i>
    </div>
    <div></div>
    <div class="flex justify-center">
      <i class="fa-solid fa-arrow-down-long text-[#0D9488] text-[1.5rem]"></i>
    </div>
    <div></div>
    <div class="flex justify-center">
      <i class="fa-solid fa-arrow-down-long text-[#0D9488] text-[1.5rem]"></i>
    </div>
  </div>
  <div style="display:grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr; gap: 0.75rem 0.5rem; align-items: center;">
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d4">PRD changes</div>
    <i class="fa-solid fa-arrow-left text-[#0D9488] text-[1.5rem] shrink-0 anim-fade-up anim-d4"></i>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d4">Revisions</div>
    <i class="fa-solid fa-arrow-left text-[#0D9488] text-[1.5rem] shrink-0 anim-fade-up anim-d4"></i>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d4">Design handoff</div>
    <i class="fa-solid fa-arrow-left text-[#0D9488] text-[1.5rem] shrink-0 anim-fade-up anim-d4"></i>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-4 py-4 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] text-center flex items-center justify-center w-full h-[7rem] anim-fade-up anim-d4">Completed flow</div>
  </div>
</div>

<!--
Now, i was able to reach the "destination" but this was a long 2-year journey that took me a while to get to and had many challenges along the way
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">I need help</h2>

<div class="flex flex-col gap-4 max-w-3xl mt-6">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d1">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>Getting a contractor would be easier and faster</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d2">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>Asked around until I got to the people who controlled budget</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d3">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>Hired contractor in summer 2024</span>
  </div>
</div>

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">With internal teams</h2>

<div class="flex flex-col gap-4 max-w-3xl mt-6">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d1">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>Daily slacks/emails to PMs & eng</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d2">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>Weekly 'UX office hour'</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d3">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>Set up feedback sessions with sales & ops teams</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d4">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>Attend on-sites with product/eng</span>
  </div>
</div>

<!--
As I mentioned I was the only designer for the majority of the time, I was able to get a contractor the last couple of months but it was mostly me dealing with a LOT of partners by myself

To keep up with everyone, I would messag the PMs and lead engineers pretty frequently

I held weekly UX office hours where anyone could sign up in the agenda and go over anything design related

I myself shared designs and did discovery in ad hoc sessions with our sales and operations people

And I would even try to go out to the Hulu office, this was before RTO and it wasn't even my assigned office. But I tried to go a few times a month because the PMs were there and it usually was the easiest way for me to get updates and ask questions
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">With external teams</h2>

<div class="flex flex-col gap-4 max-w-3xl mt-6">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d1">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>Daily 8am calls</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d2">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>Asynchronous Q&A via spreadsheets</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d3">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>Very literal on designs</span>
  </div>
</div>

<!--
Working with the external teams was a whole other story, we were using 3rd party developers in Ukraine because this was such a huge project  and we needed additional help

this 3rd party implemented a lot of the front end and it was difficult to communicate with them, because there was a 10 hour time difference as well as a culture and language barrier

I would go to the 8am calls because it the was the only time everyone was online at once, we used this spreadsheet to ask questions and answers. Right before those 8am calls, I would scan the spreadsheet to see if there was anything design related that I had to address

But the biggest challenge, especially for me, was how literal those teams took designs. I was used to sharing designs with devs that had general direction, and they could fill in the blanks themselves but for these teams, they wanted every single flow spelled out
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s13_copy2" class="-mt-10 mb-4 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5 max-w-[18rem]">Handoffs</h2>

<div class="flex gap-6 mt-4 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-52 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>Mapped out every flow</span>
    </div>
    <CarouselSyncBullet :show-at-click="1">And every state</CarouselSyncBullet>
  </div>
  <div class="flex-1 min-w-0">
    <AdManagerStack :images="['./slides/assets/literal1.png', './slides/assets/literal2.png']" :compact="true" :viewport-height="780" layer-max-width="120rem" layer-width-pct="98%" pull-down="-15rem" />
  </div>
</div>

<!--
What I ended up doing was mapping out everything, every flow, every error, modal, every state, whatever

This led to some massive figma files and I really wish I had the AI tooling we have now because it could have sped up a lot of this 

Ultimately this did help the external devs and more importantly didn't hold them up when we had this tight deadline we had to hit
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">User Testing</h2>

<div class="flex flex-col gap-4 max-w-3xl mt-6">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d1">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>UT in Summer 2024; changes would not happen until after launch</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d2">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>"Gut check" to make sure campaign flow made sense</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d3">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>No dedicated UXR team to help with UT</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d4">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>Test with existing customers</span>
  </div>
</div>

<!--
another part of my non liner journey was User testing. I shared designs often with internal teams but I really wanted to test the campaign flow with customers who already used our platform

Because of time and resources, I wasn't able to user test until after the final designs were being implemented. I know you're supposed to user test while the design is in production , like it would be too late to affect the laucn but I was able to convince product to let me put any potential changes as fast follow ups after launch

this was really for my benefit, I wanted to make sure the new design worked and since there was no UXR team I knew I would have to do a lot of the work on my own

One thing I thought would be easy was getting users to test with. I had spoken to sales about testing with existing customers and they seemed receptive at first but...
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s23" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">A wrench in the plan</h2>

<div class="max-w-4xl mt-16" style="display:grid; grid-template-columns: 1fr auto 1fr auto 1fr; grid-template-rows: auto auto; gap: 2rem 0.5rem; align-items: stretch;">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex items-center justify-center h-[7rem] anim-fade-up" style="animation-delay:0s"><span>Shared test plan</span></div>
  <i class="fa-solid fa-arrow-right text-[#0D9488] text-[1.5rem] mx-1 anim-fade-up justify-self-center self-center" style="animation-delay:0.4s"></i>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex items-center justify-center h-[7rem] anim-fade-up" style="animation-delay:0.7s"><span>Sales wants incentives for clients</span></div>
  <i class="fa-solid fa-arrow-right text-[#0D9488] text-[1.5rem] mx-1 anim-fade-up justify-self-center self-center" style="animation-delay:1.1s"></i>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex items-center justify-center h-[7rem] anim-fade-up" style="animation-delay:1.4s"><span>Went to Marketing to get incentive</span></div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex items-center justify-center h-[7rem] anim-fade-up" style="animation-delay:1.8s"><span>Met with Sales again</span></div>
  <i class="fa-solid fa-arrow-right text-[#0D9488] text-[1.5rem] mx-1 anim-fade-up justify-self-center self-center" style="animation-delay:2.2s"></i>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex items-center justify-center h-[7rem] anim-fade-up" style="animation-delay:2.5s"><span class="text-[#0D9488] font-bold">"No"</span></div>
  <div></div>
  <div></div>
</div>

<!--
Nothing is straight forward. I shared my test plan with sales, they asked me to get some type of incentive for their clients, I went to marketing and got the incentive, then I went back to sales and sales said No, they weren't comfortable sharing their clients with me and so ...
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">User Testing</h2>

<div class="flex flex-col gap-4 max-w-3xl mt-6">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d1">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>UT in Summer 2024; changes would not happen until after launch</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d2">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>"Gut check" to make sure campaign flow made sense</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d3">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>No dedicated UXR team to help with UT</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d4">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>Test with <s class="text-[#0D9488]">existing customers</s> &nbsp;users who have done digital advertising</span>
  </div>
</div>

<!--
I had to move on and make the best of what I had, and find other users by myself
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s25" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Methodology</h2>

<div class="grid grid-cols-2 gap-4 max-w-3xl mt-10 mx-auto">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#0D9488]" aria-hidden="true"><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM248 320C234.7 320 224 330.7 224 344C224 357.3 234.7 368 248 368L392 368C405.3 368 416 357.3 416 344C416 330.7 405.3 320 392 320L248 320zM248 416C234.7 416 224 426.7 224 440C224 453.3 234.7 464 248 464L392 464C405.3 464 416 453.3 416 440C416 426.7 405.3 416 392 416L248 416z"/></svg>
    <span>Built test plan and screener criteria, then recruited and moderated all sessions</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#0D9488]" aria-hidden="true"><path d="M173.3 66.5C181.4 62.4 191.2 63.3 198.4 68.8L518.4 308.7C526.7 314.9 530 325.7 526.8 335.5C523.6 345.3 514.4 351.9 504 351.9L351.7 351.9L440.6 529.6C448.5 545.4 442.1 564.6 426.3 572.5C410.5 580.4 391.3 574 383.4 558.2L294.5 380.5L203.2 502.3C197 510.6 186.2 513.9 176.4 510.7C166.6 507.5 160 498.3 160 488L160 88C160 78.9 165.1 70.6 173.3 66.5z"/></svg>
    <span>Partnered with UX engineering to build a high-fidelity interactive prototype</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#0D9488]" aria-hidden="true"><path d="M320 64C355.3 64 384 92.7 384 128C384 163.3 355.3 192 320 192C284.7 192 256 163.3 256 128C256 92.7 284.7 64 320 64zM416 376C416 401 403.3 423 384 435.9L384 528C384 554.5 362.5 576 336 576L304 576C277.5 576 256 554.5 256 528L256 435.9C236.7 423 224 401 224 376L224 336C224 283 267 240 320 240C373 240 416 283 416 336L416 376zM160 96C190.9 96 216 121.1 216 152C216 182.9 190.9 208 160 208C129.1 208 104 182.9 104 152C104 121.1 129.1 96 160 96zM176 336L176 368C176 400.5 188.1 430.1 208 452.7L208 528C208 529.2 208 530.5 208.1 531.7C199.6 539.3 188.4 544 176 544L144 544C117.5 544 96 522.5 96 496L96 439.4C76.9 428.4 64 407.7 64 384L64 352C64 299 107 256 160 256C172.7 256 184.8 258.5 195.9 262.9C183.3 284.3 176 309.3 176 336zM432 528L432 452.7C451.9 430.2 464 400.5 464 368L464 336C464 309.3 456.7 284.4 444.1 262.9C455.2 258.4 467.3 256 480 256C533 256 576 299 576 352L576 384C576 407.7 563.1 428.4 544 439.4L544 496C544 522.5 522.5 544 496 544L464 544C451.7 544 440.4 539.4 431.9 531.7C431.9 530.5 432 529.2 432 528zM480 96C510.9 96 536 121.1 536 152C536 182.9 510.9 208 480 208C449.1 208 424 182.9 424 152C424 121.1 449.1 96 480 96z"/></svg>
    <span>10 participants across beginner to advanced skill levels, each in a 1-hour moderated session</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#0D9488]" aria-hidden="true"><path d="M576 160C576 210.2 516.9 285.1 491.4 315C487.6 319.4 482 321.1 476.9 320L384 320C366.3 320 352 334.3 352 352C352 369.7 366.3 384 384 384L480 384C533 384 576 427 576 480C576 533 533 576 480 576L203.6 576C212.3 566.1 222.9 553.4 233.6 539.2C239.9 530.8 246.4 521.6 252.6 512L480 512C497.7 512 512 497.7 512 480C512 462.3 497.7 448 480 448L384 448C331 448 288 405 288 352C288 299 331 256 384 256L423.8 256C402.8 224.5 384 188.3 384 160C384 107 427 64 480 64C533 64 576 107 576 160zM181.1 553.1C177.3 557.4 173.9 561.2 171 564.4L169.2 566.4L169 566.2C163 570.8 154.4 570.2 149 564.4C123.8 537 64 466.5 64 416C64 363 107 320 160 320C213 320 256 363 256 416C256 446 234.9 483 212.5 513.9C201.8 528.6 190.8 541.9 181.7 552.4L181.1 553.1zM192 416C192 398.3 177.7 384 160 384C142.3 384 128 398.3 128 416C128 433.7 142.3 448 160 448C177.7 448 192 433.7 192 416zM480 192C497.7 192 512 177.7 512 160C512 142.3 497.7 128 480 128C462.3 128 448 142.3 448 160C448 177.7 462.3 192 480 192z"/></svg>
    <span>Evaluated whether users could complete end-to-end: create a campaign, add line items, and set targeting</span>
  </div>
</div>

<!--
What I ended up doing was creating  a screener and recruited users on Dscout (its a usertesting.com type of product we had a license to). From there I found 10 people who said they had used self serve ad platforms before

I conduncted 1 hr usability tests where I asked them to do certain tasks in and see how they went about them,

Even though none of them had used hulu ad manager before, I got some pretty useful feedback
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-3">"Line Item"</h2>

<div class="flex gap-8 mt-0 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-80 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>Term confused some users</span>
    </div>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d2">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
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

<!--
Here are some of the high level ones

First off, the term "line items" was confusing, even to the users who did a lot of advertising were thrown off by the term but understood the concept

I think the term "line item" was one of the things I pushed back against the most with product, I wanted to call it ad set or ad groups. even before this user test, based on my meetings with internal teams, a lot of them didn't get the term either

However product insisted on calling it line items because thats what it was called in our internal ad trafficking tool And like with sales, I had to accept I wasn't going to change their minds and had to move on to other important things in this tight deadline
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-3">Discoverability</h2>

<div class="flex gap-8 mt-0 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-80 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
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

<!--
Another big issue was that people could not find the "create new line item button", it was too small and not noticeable so that was something I prioritized as a fix post launch
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-3">Layout</h2>

<div class="flex gap-8 mt-0 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-[30rem] pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>Users appreciated single-page layout</span>
    </div>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d2">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
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

<!--
On the positive note, the single page flow tested well, people new to the platform quickly figured out how to navigate

and that was a huge goal of mine, was to make sure this new singe page layout was usable
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Design UAT</h2>

<div class="flex gap-8 mt-4 items-start w-full">
  <div class="flex flex-col gap-3 min-w-0 flex-shrink-0 w-[30rem] pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>Created Epic with all requested changes</span>
    </div>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d2">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>Prioritized based on LOE + urgency</span>
    </div>
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d3">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
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

<!--
After all the user feedback as well as my own QA of the testing environment, I made this huge Epic on JIRA with almost 100 tickets from everything to minor UI issues to major issues like the new line item button

I prioritized these tickets based on severity and level of effort and was able to get the engineering teams to work on them in the weeks following launch
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s_new" class="-mt-10 mb-10 mx-auto" :initial-index="3" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Outcome</h2>

<div class="grid grid-cols-2 gap-4 max-w-3xl mt-16 mx-auto">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d1">
    <div class="flex items-center gap-2 self-center text-[3.5rem] font-bold text-[#0D9488]">
      <i class="fa-solid fa-arrow-up text-[2.5rem]"></i>
      <CountUp :to="39" suffix="%" :duration="1200" />
    </div>
    <span class="text-center">Increase in agency users the following year</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d2">
    <div class="flex items-center gap-2 self-center text-[3.5rem] font-bold text-[#0D9488]">
      <CountUp :to="76" prefix="$" suffix="M" :duration="1400" />
    </div>
    <span class="text-center">ARR the following year (from $26M previous year)</span>
  </div>
</div>

<!--
once we released the new campaign flow and new platform, there was pretty quick growth the following year, both revenue and number of agency users signficantly increased

we accomplished the businesses goal of scaling the product and getting more agencies onboard
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s_goals" class="-mt-10 mb-10 mx-auto" :initial-index="3" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">My goals</h2>

<div class="flex flex-col gap-4 max-w-3xl mt-6">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d1">
    <span class="check-wrap shrink-0 anim-check-d1"><i class="fa-regular fa-square text-[#0D9488] text-[1.5rem] check-empty"></i><i class="fa-solid fa-square-check text-[#0D9488] text-[1.5rem] check-filled"></i></span>
    <span>Add line items to campaign creation flow</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d2">
    <span class="check-wrap shrink-0 anim-check-d2"><i class="fa-regular fa-square text-[#0D9488] text-[1.5rem] check-empty"></i><i class="fa-solid fa-square-check text-[#0D9488] text-[1.5rem] check-filled"></i></span>
    <span>Add extra targeting options (dayparting, pacing, etc)</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d3">
    <span class="check-wrap shrink-0 anim-check-d3"><i class="fa-regular fa-square text-[#0D9488] text-[1.5rem] check-empty"></i><i class="fa-solid fa-square-check text-[#0D9488] text-[1.5rem] check-filled"></i></span>
    <span>Have campaign flow (and entire platform) redesigns done by Oct 2024 launch</span>
  </div>
</div>

<!--
and i was able to complete all the goals i had set out to do
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">What I would do differently</h2>

<div class="grid grid-cols-2 gap-4 w-full mt-10">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d1">
    <i class="fa-solid fa-clock text-[#0D9488] text-[2rem] self-center"></i>
    <span>Bring in contractor support earlier. Was hard training new hire while also in the midst of a ton of work.</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d2">
    <i class="fa-solid fa-route text-[#0D9488] text-[2rem] self-center"></i>
    <span>Establish a clear deliverables timeline upfront and revisit scope regularly as the project evolves</span>
  </div>
</div>

<div v-click class="w-full pt-14 text-center click-fade-up">
  <p class="m-0 text-[1.5rem] font-medium italic text-[#0D9488]">
    If I could design this again...
  </p>
</div>

<!--
This was a huge project and probably one of the hardest ones I've ever worked on. I learned a lot from this especially things I would do differently such as getting support earlier and setting up a realistic timeline for my work up front

but one thing i would definitely do differently now is use AI especially for quick concepts. 

Knowing what I know now about ads and wanting to test out AI tooling, I created the campaign flow as i would do it now

SHOW PROTO
-->

---
layout: two-cols
layoutClass: h-full
transition: slide-left
---

<div class="slide-4-root flex h-full min-h-0 flex-col py-10 pr-4">
  <div class="flex min-h-0 min-w-0 flex-1 flex-col">
    <div class="flex h-full min-h-0 w-full max-w-md flex-1 flex-col items-start self-stretch py-6 pr-6 pl-0 md:max-w-xl md:py-8 md:pr-8 md:pl-0">
      <div class="mb-8 mt-20 text-3xl font-semibold tracking-tight text-[#3A4652] md:mt-24 md:text-4xl lg:mt-28 lg:text-5xl anim-fade-up"><span class="block">Designing for <span style="color:#0D9488">VAST</span> Support</span></div>
      <div class="max-w-xs text-[28px] font-medium leading-snug text-[#3A4652]/85 anim-fade-up anim-d2">Adding new creative upload feature</div>
      <div class="mt-auto self-start anim-fade-up anim-d4">
        <span class="hero-pill">CASE STUDY</span>
      </div>
    </div>
  </div>
</div>

::right::

<div class="flex h-full min-h-0 w-full flex-col">
<PinterestMasonry :show-images="false" span-src="./slides/assets/VASTgrid4.png" span-position="center 28%" :span-flex="0.8" :merge-right-stack="true" right-src="./slides/assets/VASTgrid3.png" right-position="left center" left-top-src="./slides/assets/VASTgrid2.png" left-bottom-src="./slides/assets/VASTgrid1.png" left-bottom-position="center 18%" />
</div>

<!--
Before I move on, are there any questions or should I go on to the next case study?

Great, so this is like the previous project, just smaller in scale. And that is adding VAST to the platform

for this project, it wasn't so much about the designs but more so the process and what I learned from it
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">What is VAST?</h2>

<div class="flex gap-8 mt-4 items-start w-full">
  <div class="flex flex-col gap-4 min-w-0 flex-shrink-0 w-[28rem] max-w-[28rem] pt-2">
    <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>Video Ad Serving Template</span>
    </div>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d2">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>VAST tag contains creative assets, tracking pixels and metadata</span>
    </div>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d3">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
      <span>One tag works across dozens of ad platforms simultaneously</span>
    </div>
  </div>
  <div class="flex-1 min-w-0 flex justify-center items-start self-stretch -mt-12">
    <VastTypingDemo />
  </div>
</div>

<!--
so What is VAST?

If any of you are unfamiliar, VAST is a string of code created using a 3rd party vendor that has the creative assets, tracking pixels and metadata so a creative will display correctly not matter where the ad is running

Basically if you are an advertiser running ads on different platforms, you can use the same VAST tag for all of them and if you update it on your end (like you change a tracking pixel), it automatically updates everywhere else

I understand what VAST is now but before this project I did not know anything about it
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Why VAST</h2>

<div class="flex flex-col gap-4 max-w-3xl mt-6">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d1">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>Added before new platform rollout (implemented in a couple of weeks)</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d2">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>Common request from agencies</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d3">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>Vague scope/requirements</span>
  </div>
</div>

<!--
so why do we need VAST? Simply put, like the last project, this was something agencies asked for frequently, I myself noticed this when I sat in on one agency call

we were doing a discovery call with an agency person and they liked the preview we showed them but then they asked of we had VAST and we said no and you could see the disappointment, so I knew why we needed vast

Unlike the last project I only had a few weeks to work on this because it was going to roll out in what was then our current platform, and because I  was told that this would be an easy and quick feature to ad

Despite it being sold as a "quick and easy addition"  I found the requirements early on to be pretty vague
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s9_copy" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<div class="flex h-full w-full items-center justify-center">
  <div
    class="mx-auto w-full max-w-4xl rounded-2xl bg-white border border-slate-200/40 px-14 py-12 text-left text-[2rem] font-normal italic leading-snug text-[#0D9488] shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-in-scale"
  >
    Agencies & large advertisers wanted VAST feature in order to use campaign manager
  </div>
</div>

<!--
I understood the core problem, we needed VAST to get more big-spend advertisers
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s7_copy" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Initial requirements</h2>

<div class="grid grid-cols-3 auto-rows-fr gap-4 w-full mt-16">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#0D9488]" aria-hidden="true"><path d="M342.6 73.4C330.1 60.9 309.8 60.9 297.3 73.4L169.3 201.4C156.8 213.9 156.8 234.2 169.3 246.7C181.8 259.2 202.1 259.2 214.6 246.7L288 173.3L288 384C288 401.7 302.3 416 320 416C337.7 416 352 401.7 352 384L352 173.3L425.4 246.7C437.9 259.2 458.2 259.2 470.7 246.7C483.2 234.2 483.2 213.9 470.7 201.4L342.7 73.4zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 480C96 533 139 576 192 576L448 576C501 576 544 533 544 480L544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480C480 497.7 465.7 512 448 512L192 512C174.3 512 160 497.7 160 480L160 416z"/></svg>
    <span>How to upload a VAST</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d3">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#0D9488]" aria-hidden="true"><path d="M512 160L512 416L128 416L128 160L512 160zM128 96C92.7 96 64 124.7 64 160L64 416C64 451.3 92.7 480 128 480L272 480L256 528L184 528C170.7 528 160 538.7 160 552C160 565.3 170.7 576 184 576L456 576C469.3 576 480 565.3 480 552C480 538.7 469.3 528 456 528L384 528L368 480L512 480C547.3 480 576 451.3 576 416L576 160C576 124.7 547.3 96 512 96L128 96z"/></svg>
    <span>How to display VAST assets</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="self-center w-8 h-8 fill-[#0D9488]" aria-hidden="true"><path d="M320 64C334.7 64 348.2 72.1 355.2 85L571.2 485C577.9 497.4 577.6 512.4 570.4 524.5C563.2 536.6 550.1 544 536 544L104 544C89.9 544 76.8 536.6 69.6 524.5C62.4 512.4 62.1 497.4 68.8 485L284.8 85C291.8 72.1 305.3 64 320 64zM320 416C302.3 416 288 430.3 288 448C288 465.7 302.3 480 320 480C337.7 480 352 465.7 352 448C352 430.3 337.7 416 320 416zM320 224C301.8 224 287.3 239.5 288.6 257.7L296 361.7C296.9 374.2 307.4 384 319.9 384C332.5 384 342.9 374.3 343.8 361.7L351.2 257.7C352.5 239.5 338.1 224 319.8 224z"/></svg>
    <span>How to display VAST errors</span>
  </div>
</div>

<!--
And I understood that I had to design a flow where you could upload your VAST tag, show any errors, and  preview the creative assets within the VAST

what I still didn't understand, was the technical flow of a VAST tag
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Current creative upload</h2>

<AdManagerStack :images="['./slides/assets/upload1.png', './slides/assets/upload2.png', './slides/assets/upload3.png']" :compact="true" :viewport-height="520" layer-max-width="85rem" layer-width-pct="92%" pull-down="-2.3rem" />

<!--
Because again, I was on a time crucnh, I decided to use this pattern we already had in ad upload, which was this panel that slides out from the right side

This is what ad upload looks like and this is what selecting an ad you've already uploaded looks like
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">First pass</h2>

<div class="flex gap-6 mt-4 items-start w-full">
  <div class="flex flex-col gap-3 w-52 min-w-0 flex-shrink-0 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[0.95rem] font-medium leading-snug shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
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

<!--
using that panel this is what I initially came up with, you enter your VAST here

it shows you all the macros or updates automatically made in your tag so the ad can run on hulu

and then you can see the assets that were in the VAST, like the campaigns designs I tried top nav to cycle through assets but decided it took up too much space 

so I moved them to the left side and added icons showing wether the asset passed (or failed) the technical specs needed for the ad to go live
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Feedback</h2>

<div class="flex gap-6 mt-4 items-start w-full">
  <div class="flex flex-col gap-3 w-52 min-w-0 flex-shrink-0 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[0.95rem] font-medium leading-snug shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
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

<!--
I spent a lot of time going back and forth with our customer facing teams especially our ad ops team, they gave me some good feedback because they understood VAST a lot better than I did

They said they didnt need to see all the macros because most users dont understand what they are, instead they suggested only displaying the important ones like cachebuster or site name

And I learned very quickly that the icons did not make sense. They were supposed to indicate wether an asset had passed tech specs or not, tech specs are the first step before a creative goes to the final human review,  the ops people thought that those icons represented the final review not the first step so that was a miss
-->

---
layout: default
transition: slide-left
class: slide-starting-off
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-10">Main issues</h2>

<div class="starting-off-grid grid grid-cols-2 gap-4 w-full">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="h-8 w-8 shrink-0 self-center fill-[#0D9488]" aria-hidden="true"><path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM320 240C302.3 240 288 254.3 288 272C288 285.3 277.3 296 264 296C250.7 296 240 285.3 240 272C240 227.8 275.8 192 320 192C364.2 192 400 227.8 400 272C400 319.2 364 339.2 344 346.5L344 350.3C344 363.6 333.3 374.3 320 374.3C306.7 374.3 296 363.6 296 350.3L296 342.2C296 321.7 310.8 307 326.1 302C332.5 299.9 339.3 296.5 344.3 291.7C348.6 287.5 352 281.7 352 272.1C352 254.4 337.7 240.1 320 240.1zM288 432C288 414.3 302.3 400 320 400C337.7 400 352 414.3 352 432C352 449.7 337.7 464 320 464C302.3 464 288 449.7 288 432z"/></svg>
    <span>Internal users' understanding of VAST was different than PRD; leading to conflicting feedback</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="h-8 w-8 shrink-0 self-center fill-[#0D9488]" aria-hidden="true"><path d="M73 39.1C63.6 29.7 48.4 29.7 39.1 39.1C29.8 48.5 29.7 63.7 39 73.1L567 601.1C576.4 610.5 591.6 610.5 600.9 601.1C610.2 591.7 610.3 576.5 600.9 567.2L343.5 309.7C398.5 298.8 440 250.2 440 192C440 125.7 386.3 72 320 72C261.8 72 213.2 113.5 202.3 168.5L73 39.1zM267.6 369.4C179.9 380.6 112 455.5 112 546.3C112 562.7 125.3 576 141.7 576L474.2 576L267.6 369.4z"/></svg>
    <span>Sudden staffing changes during project</span>
  </div>
</div>

<!--
Based on feedback from various internal teams I realized I did not understand VAST very well because I was going off the PRD and it seemed like the PRD also didn't understand VAST

Then halfway through this project the lead PM who made that PRD ended up suddenly leaving the company and the other PM who would  have understood VAST was on parental leave
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Back to drawing board</h2>

<div class="flex flex-col gap-4 max-w-3xl mt-6">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d1">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>I went back and re-learned VAST info from ops users</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d2">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>Had to figure out a way to display asset preview</span>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-row items-center gap-4 anim-fade-up anim-d3">
    <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
    <span>Discovered a legacy tool for VAST</span>
  </div>
</div>

<!--
I then had to rely on the other teams to help me understand VAST, such as how it was uploaded and how to display the creative assets

One thing i learned from them was that we actually already had a VAST tool
-->

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

<!--
This was an old tool in a legacy platform that wasn't updated anymore but could be used to check VAST tags 

and you can see here that it shows every single parameter in the VAST and wether it passed or failed, the tech requirements
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Revised understanding of VAST</h2>

<div class="mt-12 w-full max-w-4xl mx-auto" style="display:grid; grid-template-columns: 1fr auto 1fr auto 1fr; grid-template-rows: auto auto; gap: 1.5rem 0.5rem; align-items: stretch;">
  <div class="rounded-2xl bg-white border border-slate-200/40 px-6 py-5 text-slate-700 text-[1rem] font-medium leading-snug shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-up" style="animation-delay:0s"><span>Upload VAST</span></div>
  <i class="fa-solid fa-arrow-right text-[#0D9488] text-[1.5rem] mx-1 anim-fade-up justify-self-center self-center" style="animation-delay:0.4s"></i>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-6 py-5 text-slate-700 text-[1rem] font-medium leading-snug shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-up" style="animation-delay:0.7s"><span>VAST passes tech specs</span></div>
  <i class="fa-solid fa-arrow-right text-[#0D9488] text-[1.5rem] mx-1 anim-fade-up justify-self-center self-center" style="animation-delay:1.1s"></i>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-6 py-5 text-slate-700 text-[1rem] font-medium leading-snug shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] anim-fade-up" style="animation-delay:1.4s"><span>Preview assets + submit for review</span></div>
  <div class="rounded-2xl bg-white border border-red-200/50 bg-red-50/40 px-6 py-5 text-[1rem] font-medium leading-snug shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] anim-fade-up" style="animation-delay:1.8s"><span class="text-[#0D9488] font-bold">VAST tag fails upload</span></div>
  <div></div>
  <div class="rounded-2xl bg-white border border-red-200/50 bg-red-50/40 px-6 py-5 text-[1rem] font-medium leading-snug shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] anim-fade-up" style="animation-delay:2.2s"><span class="text-[#0D9488] font-bold">VAST assets fail tech specs</span></div>
  <div></div>
  <div></div>
</div>

<!--
After all of this back and forth with various teams I finally understood how a VAST upload works. As well as the failure points such as incorrectly formatted VAST tags or not passing tech specs
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5 max-w-[11rem]">Designs with table</h2>

<div class="flex gap-6 mt-4 items-start w-full">
  <div class="flex flex-col gap-3 w-52 min-w-0 flex-shrink-0 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[0.95rem] font-medium leading-snug shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
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

<!--
I went back and added the table from the VAST legacy tool because I felt it was useful in pointing out specific errors

and I deicided to only show the icon in assets with errors

I shared these concepts (slide) again with our ops, got good feedback. they told me they didn't need to see every parameter, just the ones with issues

but they did want to see all the statuses at a quick glance.  I knew then they expected those statuses to reflect the final check and not the tech specs, so I changed the logic to match their mental model
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5 max-w-md">Asset status</h2>

<div class="flex gap-6 mt-4 items-start w-full">
  <div class="flex flex-col gap-3 w-52 min-w-0 flex-shrink-0 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[0.95rem] font-medium leading-snug shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
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

<!--
We have 3 creative review states. an asset with a technical error shows up as rejected automatically, one that passes tech spec but hasn't been human reviewed is pending approval and one that has passed tech spec and human review is approved

now I just needed a way to best display this, I tried status chips at first but it looked weird and took up a lot of space

then I switched to icons instead which worked better

And updated the table to only show the errors as opposed to everything
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5 max-w-md">URL entry</h2>

<div class="flex gap-6 mt-4 items-start w-full">
  <div class="flex flex-col gap-3 w-52 min-w-0 flex-shrink-0 pt-2">
    <div class="rounded-xl bg-white border border-slate-200/40 px-5 py-3 text-slate-700 text-[0.95rem] font-medium leading-snug shadow-[0_1px_4px_rgb(0_0_0_/_0.06)] flex flex-row items-center gap-3 anim-fade-up anim-d1">
      <i class="fa-solid fa-circle text-[#0D9488] text-[0.5rem] shrink-0"></i>
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

<!--
From there it was easy to update the rest, I changed the VAST URL upload to only display the major macros being replaced 

and if your VAST doesn't upload you get a specific error message telling you why it didn't pass and you cannot move a head

there are several error codes for this such as incorrect formatting or VAST made with unapproved vendor
-->

---
layout: default
transition: slide-left
---

<h2 class="user-groups-slide-heading m-0 mt-6 mb-2 max-w-md">End-to-end flow</h2>

<div class="mt-5 flex w-full justify-center px-2">
  <video
    class="mx-auto block h-auto w-[70%] rounded-xl object-contain shadow-[0_2px_16px_rgb(0_0_0_/_8%)]"
    autoplay
    loop
    muted
    playsinline
    preload="metadata"
  >
    <source src="./slides/assets/VASTfinal.mp4" type="video/mp4" />
  </video>
</div>

<!--
Here is the full flow
-->

---
layout: default
transition: slide-left
---

<CaseStudyPillTabs :key="s7_copy3" class="-mt-10 mb-10 mx-auto" :initial-index="1" />

<h2 class="user-groups-slide-heading m-0 mt-6 mb-5">Takeaway</h2>

<div class="mt-10 flex flex-col gap-4 w-full">
  <div class="grid grid-cols-2 gap-4 w-full">
    <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d1">
      <span class="text-[#0D9488] font-bold text-[1.15rem]">Impact</span>
      <span>Unblocked agency adoption. The VAST flow shipped and remains in the platform today</span>
    </div>
    <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d2">
      <span class="text-[#0D9488] font-bold text-[1.15rem]">Challenges</span>
      <span>Early confusion stemmed from an inaccurate PRD and a fundamental misunderstanding of how VAST works</span>
    </div>
  </div>
  <div class="rounded-2xl bg-white border border-slate-200/40 px-8 py-6 text-slate-700 text-[1.1rem] font-medium shadow-[0_1px_4px_rgb(0_0_0_/_0.06),_0_4px_16px_rgb(0_0_0_/_0.1)] flex flex-col gap-3 anim-fade-up anim-d3 w-[calc(50%-0.5rem)] max-w-none mx-auto">
    <span class="text-[#0D9488] font-bold text-[1.15rem]">Learnings</span>
    <span>Get context early, especially for unfamiliar concepts. The PRD isn't always the source of truth, so go deeper.</span>
  </div>
</div>

<!--
We released VAST in early 2024 in what is now the old platform and then came to platform 2.0 later in the year

the VAST flow removed another blocker for agencies and the same design is there to this day

of course the process to get there wasn't very smooth,  Honestly I was pretty frustrated on how long it took especially when I now know that it wasn't that complicated

As a result I learned that if I dont get something, I should talk to as many people as I can and do as much research as I can. and not rely solely on PRD as source of truth 

and that is the VAST implementation
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

  <template #subtitle>
    <p style="color: #3a4652; font-weight: 500;">Any questions?</p>
  </template>
</HeroTitle>
  </div>
</div>

::right::

<div class="flex h-full min-h-0 w-full flex-col pl-4">
<PinterestMasonry placement="title" left-top-small-src="/IMG_4215.jpg" left-mid-src="/20221117_091012.jpg" left-top-src="/PXL_20241205_015703401.jpg" right-tall-src="/IMG_20200523_120959.jpg" right-bottom-src="/PXL_20240210_213758992.jpg" />
</div>
