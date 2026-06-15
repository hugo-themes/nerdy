---
title: Custom CSS
date: 2026-06-11
subject: Customization
topic: Look and Feel
weight: 1
tags:
  - css
  - appearance
summary: Override Nerdy's color tokens from your site.
---

Create `assets/css/custom.css` in your site. Nerdy loads it after the main stylesheet.

Prefer token overrides instead of editing theme files:

```css
:root {
  --background: oklch(0.985 0.006 255);
  --foreground: oklch(0.21 0.035 260);
  --surface: oklch(0.965 0.012 255);
  --accent-cyan: oklch(0.47 0.105 224);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --surface: oklch(0.155 0.045 265.08);
  --accent-cyan: oklch(0.865 0.127 207.078);
}
```

Supported tokens include:

- `--background`, `--foreground`, `--muted`, `--muted-foreground`
- `--primary`, `--primary-foreground`, `--border`
- `--card`, `--card-foreground`
- `--surface`, `--surface-muted`, `--surface-elevated`
- `--accent-cyan`, `--accent-purple`, `--accent-emerald`, `--accent-amber`

Start with a few accent colors first. It is easier to keep the design consistent when most tokens stay close to the default palette.
