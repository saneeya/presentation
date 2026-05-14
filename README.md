# Presentation (Slidev)

Browser-first slides: Markdown + Vue, keyboard pacing, optional presenter mode.

Deck canvas uses a **near-white base with soft silver-gray gradients** in [`styles/theme.css`](styles/theme.css); see [`docs/warm-theme-css.md`](docs/warm-theme-css.md) for the same CSS in a fenced block.

Slidev’s default **`bg-main` on `.slidev-slide-content`** paints **white** over the full stage, so custom `body` backgrounds looked unchanged after refresh. `theme.css` now sets **`#page-root`**, **`.slidev-slide-content`**, and **`--slidev-slide-container-background`** transparent so the canvas layers show through.

**If it still looks wrong:** stop the dev server (`Ctrl+C`), run `npm run dev` again, then **hard refresh** the browser (**Cmd+Shift+R**). Confirm you are on the Slidev URL (e.g. `http://localhost:3030/`), not a different app or an old static export.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Static SPA in `dist/` |
| `npm run export` | PDF / PPTX (needs Playwright; see [export docs](https://sli.dev/guide/exporting)) |

## Presenting (your pace)

- **Next** click or animation: `Space`, `→`, `PageDown`, or `Enter` (details in Slidev UI).
- **Previous**: `←`, `Shift+Space`, `PageUp`.
- **Jump slides**: `↑` / `↓` (vertical) in default navigation; hover the bottom-left control strip for overview and **Presenter Mode**.
- **Presenter Mode**: second window with notes (last HTML comment block on each slide), next slide preview, optional timer—advance only when you choose.
- **Fragments**: this deck uses `v-click` / `<v-clicks>` so bullets and lines appear one step at a time.

## Light theme and background

- Deck uses **`colorSchema: light`** in `slides.md` so Slidev chrome matches a light UI.
- Canvas styling lives in [`styles/theme.css`](styles/theme.css): cool off-white base, soft radial gradients for depth, and a fixed SVG **noise** tile (low opacity, `multiply`) for texture without a busy pattern.
- Tweak `--deck-bg-base`, `--deck-bg-tint`, or the noise opacity inside the `--deck-grain` data URL if you want calmer or stronger grain.

## Contrast check (before you present)

On your real display or projector: body text should read clearly at a glance; links should stay visibly teal, not gray.

| Token | Role | Approximate contrast on `#f4f6f9` |
| --- | --- | --- |
| `--deck-ink` `#0f172a` | Body / headings | High (dark on light) |
| `--deck-muted` `#475569` | Secondary text | ~7:1+ on base |
| `--deck-accent` `#0d9488` | Links | Strong vs white; meets common large-text targets |

If code blocks look low-contrast in a venue, bump editor theme in Slidev or reduce room lighting on the projection surface.

## Deploying the static SPA

1. `npm run build` produces `dist/`.
2. Serve any static host: `npx serve dist` for a quick local check.
3. Subpath hosting (e.g. GitHub Pages project site): `npm run build -- --base /your-repo-name/`.
4. For automated GitHub Pages, follow [Slidev hosting](https://sli.dev/guide/hosting) (workflow template with `actions/upload-pages-artifact`).
