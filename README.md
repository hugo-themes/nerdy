# Nerdy

A Hugo theme template initialized with Tailwind CSS and Alpine.js.

## Development

```sh
npm install
hugo server
```

The theme uses Hugo's Tailwind integration with build stats enabled so Tailwind can discover classes in Hugo templates.

## Partial structure

- `components/` contains shared UI building blocks, icons, theme controls, accent helpers, and empty states.
- `site/` contains document chrome and asset loading partials.
- `home/`, `posts/`, and `terminal/` contain feature-specific sections, cards, and command output templates.

Shared card, chip, surface, hover, and accent styles live in `assets/css/main.css` as `nerdy-*` component classes.
The theme toggle is mounted once from `site/theme-toggle-float.html` for a consistent location across pages.
