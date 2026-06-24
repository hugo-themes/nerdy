---
title: Activity Log Section
date: 2026-06-21
subject: Customization
topic: Home Page
weight: 5
tags:
  - homepage
  - activity
  - data
summary: Configure the activity log section on the home page.
---

The activity log section shows a dated timeline on the home page. It can mix manual activity items with automatically generated entries for published posts.

It is enabled from `data/home/sections.yaml` and configured from `data/home/activity-logs.yaml`.

## Basic configuration

```yaml
id: activity-logs
type: activity
icon: clock
title: Activity Log
activityLimit: 10
lookbackDays: 15
includePosts: true
postSection: posts
items:
  - activityDate: 2026-06-24
    type: merged-pr
    info:
      number: 1042
      title: Improved hook dependency bailout optimization for edge cases
      url: https://github.com/facebook/react/pull/1042
      repo: https://github.com/facebook/react
```

Useful section fields:

- `id`: HTML anchor used on the rendered section.
- `type`: must be `activity` for the built-in activity log section.
- `icon`: icon beside the section title. It must match an SVG file in `assets/icons/`.
- `title`: heading text for the section.
- `activityLimit`: maximum number of activity entries to show after sorting newest first.
- `lookbackDays`: only show entries with an activity date within this many days.
- `includePosts`: when `true`, add published posts to the activity log.
- `postSection`: content section to read published posts from. The example site uses `posts`.
- `dateFormat`: optional date format for manual activity and post entries. The default is `Jan 2, 2006`.

The newest visible activity is highlighted automatically with the glowing timeline dot.
Activities from the same day are grouped under one date label to keep the timeline compact.

## Manual activity dates

Manual items require `activityDate`. It is the source for sorting, `lookbackDays`, and the displayed date label.

```yaml
items:
  - activityDate: 2026-06-21
    type: release
    info:
      version: v2.3.5
      url: https://github.com/gopher/cli-task-manager/releases/tag/v2.3.5
      repo: https://github.com/gopher/cli-task-manager
```

Manual entries without `activityDate` fail the build because Nerdy cannot sort or filter them reliably.

## Published post activity

With `includePosts: true`, Nerdy reads regular pages from `postSection`, adds each page as a `published-post` activity, sorts those entries together with manual items, then applies `activityLimit`.

For example, this front matter can appear as `Published post Quick Start.` in the activity log:

```yaml
---
title: Quick Start
date: 2026-06-14
summary: Install the theme and run the example site locally.
---
```
