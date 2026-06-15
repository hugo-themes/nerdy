---
title: "Markdown Examples"
date: 2026-06-13
subject: Reference
topic: Markdown
weight: 99
tags:
  - markdown
  - reference
  - design
summary: See how common Markdown elements look in Nerdy.
---

Use this page as a quick preview of headings, lists, code blocks, tables, images, and other common Markdown elements.

## Headings

Headings should create a clear hierarchy and enough spacing to scan the page quickly.

### Level 3 Heading

This section is nested below a level 2 heading.

#### Level 4 Heading

Level 4 headings are useful for small subsections.

##### Level 5 Heading

This is a deeper heading level.

###### Level 6 Heading

This is the smallest standard heading level.

## Paragraph Text

This is a normal paragraph with **bold text**, *italic text*, ***bold italic text***, ~~strikethrough text~~, and `inline code`. It also includes a [regular link](https://gohugo.io/) and an autolink: <https://example.com>.

Longer paragraphs should remain readable across line lengths. The theme should keep a comfortable measure, enough contrast, and predictable spacing between text blocks.

## Lists

### Unordered List

- First item
- Second item
  - Nested item
  - Another nested item
- Third item with `inline code`

### Ordered List

1. Install dependencies
2. Run the development server
3. Review the generated page
   1. Check typography
   2. Check spacing
   3. Check dark mode

### Task List

- [x] Write the outline
- [x] Add examples
- [ ] Review the draft
- [ ] Publish the post

## Blockquotes

> Good typography is invisible until it is missing.

Nested quotes should also be readable:

> This is the first quote level.
>
> > This is a nested quote.
> > It should not feel too heavy.

## Code

Inline code like `const enabled = true` should sit naturally inside text.

### Plain Code Block

```
GET /healthz HTTP/1.1
Host: example.com
Accept: application/json
```

### Highlighted Code Block

```go
package main

import (
    "encoding/json"
    "net/http"
)

type response struct {
    Status string `json:"status"`
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(response{Status: "ok"})
}
```

### Shell Commands

```bash
npm install
npm run build
hugo server --disableFastRender
```

## Tables

| Element | Purpose | Example status |
| --- | --- | --- |
| Headings | Page structure and TOC anchors | Ready |
| Paragraphs | Main reading experience | Ready |
| Tables | Structured comparison data | Ready |
| Code blocks | Technical examples | Ready |

| Align Left | Align Center | Align Right |
| :--- | :---: | ---: |
| Alpha | Beta | 123 |
| Longer text | Centered | 4,567 |

## Horizontal Rule

Content before the rule.

---

Content after the rule.

## Images

![A placeholder image](https://placehold.co/960x360/0f172a/e2e8f0?text=Markdown+Preview)

Image captions can be written as normal text below the image.

## Definition List

Markdown
: A lightweight markup language for formatting text.

Hugo
: A static site generator used to build this theme.

## Footnotes

This sentence includes a footnote reference.[^note]

[^note]: Footnotes are useful for extra context without interrupting the main paragraph.

## Raw HTML Policy

Raw HTML is disabled in the example site by default. Prefer Markdown or theme partials for authored content.

For example, write keyboard shortcuts as text like `Ctrl` + `K` instead of inline `<kbd>` tags unless your own site explicitly opts into trusted raw HTML.

## Escaped Characters

Use a backslash when you need literal Markdown characters: \*not italic\*, \`not code\`, and \[not a link\].

## Writing Tips

- Use `summary` in front matter so cards have helpful preview text.
- Use level 2 headings for major sections; they appear in the table of contents.
- Keep tables compact so they are easier to read on small screens.
