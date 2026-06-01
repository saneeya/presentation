# Deck canvas CSS — duplicate of [`styles/theme.css`](../styles/theme.css)

Near-white base with soft **silver-gray** layered gradients (not tan). Copy the block below only if you want a standalone reference; the live file is the source of truth.

```css
/* Light deck: near-white canvas + soft silver-gray layered depth */
:root {
  --deck-bg-base: #f8f9fb;
  --deck-bg-elevated: #ffffff;
  --deck-bg-tint: rgba(148, 163, 184, 0.11);
  --deck-bg-corner: rgba(203, 213, 225, 0.28);
  --deck-accent: #0d9488;
  --deck-accent-dim: #0f766e;
  --deck-ink: #0f172a;
  --deck-muted: #3a4652;
  /* Must win over @slidev/client/styles/vars.css (:root sets black later in bundle) */
  --slidev-slide-container-background: transparent !important;
}

body {
  position: relative;
  isolation: isolate;
  background: transparent;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-color: var(--deck-bg-base);
  background-image:
    radial-gradient(ellipse 115% 90% at 18% -8%, var(--deck-bg-tint), transparent 58%),
    radial-gradient(ellipse 78% 62% at 100% 100%, var(--deck-bg-corner), transparent 52%),
    linear-gradient(188deg, var(--deck-bg-elevated) 0%, #f6f7f9 40%, var(--deck-bg-base) 72%, #f0f2f5 100%);
}

html,
body,
#app,
#page-root {
  background-color: transparent !important;
}

.slidev-slide-content {
  background-color: transparent !important;
}

.slidev-layout {
  color: var(--deck-ink);
  background-color: transparent;
}

.slidev-layout h1,
.slidev-layout h2,
.slidev-layout h3 {
  letter-spacing: -0.02em;
}

.slidev-layout a {
  color: var(--deck-accent);
  text-decoration-color: color-mix(in srgb, var(--deck-accent) 45%, transparent);
}

.slidev-layout a:hover {
  color: var(--deck-accent-dim);
}

.slidev-layout blockquote {
  border-left: 3px solid var(--deck-accent);
  background: rgba(15, 23, 42, 0.05);
}
```

[`components/HeroTitle.vue`](../components/HeroTitle.vue) uses `--deck-ink` / `--deck-muted` with fallbacks aligned to these tokens.
