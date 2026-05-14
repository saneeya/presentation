<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    /** `title`: CSS grid so left column spans full height; bottom strip is narrower. Case study: omit or `default`. */
    placement?: 'default' | 'title'
    /** When false, all tiles render as empty placeholder boxes (no images). */
    showImages?: boolean
  }>(),
  { placement: 'default', showImages: true },
)

/**
 * Masonry-style gallery (title slide + case study right column).
 * Add JPG/PNG/WebP files under `pictures/` — slots fill after SLOT_OVERRIDES.
 */
const SLOT_OVERRIDES: readonly { slotIndex: number; pathSubstr: string }[] = [
  { slotIndex: 1, pathSubstr: '20191229_134146' },
  { slotIndex: 2, pathSubstr: 'PXL_20240608_204901982' },
  { slotIndex: 3, pathSubstr: 'PXL_20251222_030347531' },
  { slotIndex: 4, pathSubstr: '20210702_173403' },
]

const EXCLUDED_PATH_SUBSTRS: readonly string[] = []

const SLOT_COUNT = 5

const imageModules = import.meta.glob('../pictures/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const pictureUrls = computed(() =>
  Object.entries(imageModules)
    .filter(([path]) => !EXCLUDED_PATH_SUBSTRS.some(s => path.includes(s)))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map(([, url]) => url),
)

function urlsOrderedForSlots(sorted: string[]): (string | undefined)[] {
  const out: (string | undefined)[] = Array.from({ length: SLOT_COUNT }, () => undefined)
  const pinned = new Set<string>()

  for (const { slotIndex, pathSubstr } of SLOT_OVERRIDES) {
    if (slotIndex < 0 || slotIndex >= SLOT_COUNT)
      continue
    const url = sorted.find(u => u.includes(pathSubstr))
    if (url != null) {
      out[slotIndex] = url
      pinned.add(url)
    }
  }

  const rest = sorted.filter(u => !pinned.has(u))
  let r = 0
  for (let i = 0; i < SLOT_COUNT; i++) {
    if (out[i] != null)
      continue
    out[i] = rest[r++]
  }
  return out
}

/** Five URLs: [0,1] left; [2] right tall; [3] span; [4] right stack below tall */
const slots = computed(() => urlsOrderedForSlots(pictureUrls.value))

const leftCells = computed(() => {
  /** Title left column: top slot, dashed insert, and nudge photo share height with proportional flex. */
  const mainLeftGrow = props.placement === 'title' ? 1 : 1.6
  const bottomGrow = props.placement === 'title' ? 0 : 1
  const top = { src: slots.value[0], grow: mainLeftGrow, nudge: true as const }
  const bottom = { src: slots.value[1], grow: bottomGrow, nudge: false as const }
  if (props.placement === 'title')
    return [bottom, top]
  return [top, bottom]
})

function leftTileFlex(c: { grow: number; nudge: boolean }): Record<string, string> {
  if (props.placement === 'title' && c.nudge)
    return { flex: '1 1 0' }
  if (props.placement === 'title' && !c.nudge)
    return { flex: '0.42 1 0' }
  return { flex: `${c.grow} 1 0` }
}

type LeftPiece =
  | { kind: 'cell'; c: { src: string | undefined; grow: number; nudge: boolean }; i: number }
  | { kind: 'spacer' }

/** Title slide: extra dashed box between first and second left tiles */
const leftColumnPieces = computed((): LeftPiece[] => {
  const cells = leftCells.value
  if (props.placement !== 'title')
    return cells.map((c, i) => ({ kind: 'cell' as const, c, i }))
  return [
    { kind: 'cell', c: cells[0], i: 0 },
    { kind: 'spacer' },
    { kind: 'cell', c: cells[1], i: 1 },
  ]
})

const rightCell = computed(() => ({ src: slots.value[2] }))
const rightBelowCell = computed(() => ({ src: slots.value[4] }))
const spanCell = computed(() => ({ src: slots.value[3] }))
</script>

<template>
  <div class="masonry-root" :class="{ 'masonry-root--title': placement === 'title' }">
    <template v-if="placement === 'title'">
      <div class="masonry">
        <div class="masonry-col">
          <div class="tile tile--stretch" :class="{ 'tile--has-img': !!slots[4] }">
            <img v-if="slots[4]" class="tile-img" style="object-position: center 15%" :src="slots[4]" alt="" />
          </div>
          <div class="tile tile--stretch" :class="{ 'tile--has-img': !!slots[1] }">
            <img v-if="slots[1]" class="tile-img" style="object-position: center 35%" :src="slots[1]" alt="" />
          </div>
          <div class="tile tile--stretch" style="flex: 1.8 1 0" :class="{ 'tile--has-img': !!slots[0] }">
            <img v-if="slots[0]" class="tile-img tile-img--nudge-down" style="object-position: center 70%" :src="slots[0]" alt="" />
          </div>
        </div>
        <div class="masonry-col">
          <div class="tile tile--stretch" style="flex: 1.6 1 0" :class="{ 'tile--has-img': !!slots[2] }">
            <img v-if="slots[2]" class="tile-img" :src="slots[2]" alt="" />
          </div>
          <div class="tile tile--stretch" :class="{ 'tile--has-img': !!slots[3] }">
            <img v-if="slots[3]" class="tile-img" :src="slots[3]" alt="" />
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="masonry">
        <div class="masonry-col">
          <template v-for="(p, j) in leftColumnPieces" :key="`lp-${j}`">
            <div
              v-if="p.kind === 'cell'"
              class="tile tile--stretch"
              :class="{ 'tile--has-img': showImages && !!p.c.src }"
              :style="leftTileFlex(p.c)"
            >
              <img
                v-if="showImages && p.c.src"
                class="tile-img"
                :class="{ 'tile-img--nudge-down': p.c.nudge }"
                :src="p.c.src"
                alt=""
              />
            </div>
          </template>
        </div>
        <div class="masonry-right-stack">
          <div
            class="tile tile--stretch"
            :class="{ 'tile--has-img': showImages && !!rightCell.src }"
          >
            <img
              v-if="showImages && rightCell.src"
              class="tile-img"
              :src="rightCell.src"
              alt=""
            />
          </div>
          <div
            class="tile tile--stretch tile--right-below"
            :class="{ 'tile--has-img': showImages && !!rightBelowCell.src }"
          >
            <img
              v-if="showImages && rightBelowCell.src"
              class="tile-img"
              :src="rightBelowCell.src"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="masonry-span">
        <div
          class="tile tile--stretch tile--span-full"
          :class="{ 'tile--has-img': showImages && !!spanCell.src }"
        >
          <img
            v-if="showImages && spanCell.src"
            class="tile-img"
            :src="spanCell.src"
            alt=""
          />
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.masonry-root {
  flex: 1 1 0;
  height: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: visible;
  width: 100%;
  max-width: none;
  margin-left: 0;
  margin-right: 0;
  box-sizing: border-box;
  gap: 0.65rem;
}


/* Case study: two right images; must NOT use .masonry-col here — that rule sets display:flex and breaks 50/50 grid. */
.masonry-right-stack {
  display: grid;
  grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
  gap: 0.65rem;
  min-height: 0;
  min-width: 0;
  flex: 1 1 0;
}

.masonry-right-stack > .tile.tile--stretch {
  flex: none;
  min-height: 0;
  min-width: 0;
}

.masonry-root--title > .masonry-span.masonry-span--title {
  grid-column: 2;
  grid-row: 2;
  flex: none;
  min-height: 0;
}

.masonry {
  display: flex;
  flex-direction: row;
  flex: 1 1 0;
  min-height: 0;
  overflow: visible;
  gap: 0.65rem;
}

.masonry-col {
  flex: 1 1 0;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.tile {
  position: relative;
  border-radius: 16px;
  border: 1px dashed rgb(148 163 184 / 0.85);
  background: rgb(248 250 252 / 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
  box-shadow: 0 1px 4px rgb(0 0 0 / 0.06), 0 4px 16px rgb(0 0 0 / 0.1);
  overflow: hidden;
}

.tile:not(.tile--has-img) {
  min-height: 2.75rem;
}

.masonry-root--title .tile:not(.tile--has-img) {
  min-height: 3.35rem;
}

.masonry-root--title .tile--title-insert {
  min-height: 3rem;
}

.tile--stretch {
  flex: 1 1 0;
  min-height: 0;
}

.tile--stretch.tile--tall {
  flex: 1 1 0;
}

.masonry-span {
  flex: 0.58 1 0;
  min-height: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
}

/* Title slide only: bottom strip matches one masonry column width, right-aligned */
.masonry-span--title {
  width: calc((100% - 0.65rem) / 2);
  max-width: 100%;
  min-width: 0;
  align-self: flex-end;
  flex-direction: row;
  justify-content: flex-end;
  align-items: stretch;
}

.masonry-span--title .tile.tile--span-full {
  flex: 1 1 0;
  width: 100%;
  min-width: 0;
  max-width: 100%;
}

.tile--span-full {
  flex: 1 1 0;
  width: 100%;
  min-height: 0;
}

.tile--has-img {
  padding: 0;
  border: none;
  background: rgb(241 245 249);
}

.tile-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: inherit;
  box-shadow: none;
}

.tile-img.tile-img--nudge-down {
  object-position: center 10%;
}

/* Title slide: main left photo fills space below the top slot and sits on the column bottom */
.masonry-root--title .tile-img.tile-img--nudge-down {
  object-position: center bottom;
}
</style>
