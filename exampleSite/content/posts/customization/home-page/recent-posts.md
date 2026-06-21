---
title: Recent Posts Section
date: 2026-06-21
subject: Customization
topic: Home Page
weight: 4
tags:
  - homepage
  - posts
  - data
summary: Configure the recent posts section on the home page.
---

The recent posts section shows the newest pages from a content section, such as `posts`, on the home page.

It is enabled from `data/home/sections.yaml` and configured from `data/home/recent-posts.yaml`.

## Enable the section

Add the section data file name to `data/home/sections.yaml` without the `.yaml` extension:

```yaml
items:
  - featured-projects
  - recent-posts
  - activity-logs
```

The order of `items` controls the order of home page sections. To show recent posts first, move it to the top:

```yaml
items:
  - recent-posts
  - featured-projects
  - activity-logs
```

## Basic configuration

Create or edit `data/home/recent-posts.yaml`:

```yaml
id: recent-posts
type: recent-posts
icon: article
title: Recent Posts
limit: 3
section: posts
view_all_label: View all posts ->
```

Useful fields:

- `id`: HTML anchor used on the rendered section.
- `type`: must be `recent-posts` for the built-in recent posts section.
- `icon`: icon beside the section title. It must match an SVG file in `assets/icons/`.
- `title`: heading text for the section.
- `limit`: maximum number of recent posts to show before the view-all card.
- `section`: content section to read pages from. The example site uses `posts`.
- `view_all_label`: text for the card that links to the full section index.

## How posts are selected

Nerdy reads regular pages from the configured `section` and sorts them by date, newest first.

For example, with `section: posts`, these pages can appear automatically:

```txt
content/posts/start/setup/quick-start.md
content/posts/customization/home-page/sidebar.md
content/posts/reference/markdown/markdown-examples.md
```

Each card uses the page title, URL, summary, date, and up to three tags from the page front matter.

```yaml
---
title: Quick Start
date: 2026-06-14
tags:
  - setup
  - hugo
summary: Install the theme and run the example site locally.
---
```

## Placeholder items

If the configured section has no pages yet, Nerdy can show fallback cards from `items` instead.

```yaml
id: recent-posts
type: recent-posts
icon: article
title: Latest Notes
limit: 3
section: posts
view_all_label: Browse all notes ->
items:
  - title: Designing a Better API
    url: /posts/designing-a-better-api/
    date: 2026-06-10
    description: Notes from a recent API design pass.
    accent: cyan
    tags:
      - design
      - api
  - title: Debugging Production Latency
    url: /posts/debugging-production-latency/
    date: 2026-06-08
    description: A short checklist for finding slow requests.
    accent: amber
    tags:
      - debugging
      - performance
```

Fallback cards support `title`, `url`, `date`, `description`, `accent`, and `tags`. Built-in accents are `cyan`, `purple`, `emerald`, and `amber`.
