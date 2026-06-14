---
title: Colors and Custom CSS
date: 2026-06-11
subject: Customize
topic: Site Surface
weight: 3
tags:
  - css
  - appearance
summary: Override Nerdy's stable design tokens from your site without editing the theme directly.
---

Create `assets/css/custom.css` in your site. Nerdy loads it after the main stylesheet and fingerprints it in production.

Prefer token overrides over editing theme CSS:

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

Supported tokens include `--background`, `--foreground`, `--muted`, `--muted-foreground`, `--primary`, `--primary-foreground`, `--border`, `--card`, `--card-foreground`, `--surface`, `--surface-muted`, `--surface-elevated`, `--accent-cyan`, `--accent-purple`, `--accent-emerald`, and `--accent-amber`.
