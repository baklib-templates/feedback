# Baklib Feedback Theme

An enterprise-grade product roadmap and feedback collection theme for Baklib community sites. Publish your product plan, track progress across roadmap stages, gather user suggestions, and prioritize what to build next.

Documentation: https://help.baklib.cn/themes/community/feedback

## Features

- **Product roadmap** — Kanban-style Inbox, Planned, In Progress, and Completed columns
- **Feedback collection** — Users submit feature requests, improvements, and experience notes
- **Voting** — Surface high-demand ideas through upvotes
- **Filtering** — Organize by status, board, and tags
- **Comments** — Threaded discussion on each post
- **Moderation** — Optional publish-before-review or review-before-publish workflow

## Brand & theming

This theme follows the Baklib three-layer DaisyUI color architecture:

1. **L1** — Default palettes in `config/settings_schema.json` (`recommendations.color_schemas`)
2. **L2** — Static tokens (radius, size, border) in `src/main.css`
3. **L3** — Runtime mapping in `snippets/_theme_runtime_colors.liquid`, rendered in `layout/theme.liquid` before CSS

Visual spec and component examples: static page **`/p/brand`** (`statics/brand.liquid`).

Use DaisyUI semantic classes in templates (`bg-primary`, `text-base-content`, `border-base-300`, etc.). Avoid hard-coded Tailwind color scales (`slate-*`, `gray-*`, hex literals).

## Build

```bash
yarn
yarn build
```

- CSS: `src/main.css` → `assets/css/main.css` (Tailwind v3 + daisyUI 5, `themes: false`)
- JS: `src/main.js` → `assets/javascripts/main.js` (esbuild)

Use **Yarn** only (lockfile: `yarn.lock`).

## Project structure

```
├── config/settings_schema.json
├── layout/
│   ├── error.liquid
│   └── theme.liquid
├── locales/
│   ├── en.json
│   └── zh-CN.json
├── snippets/
│   ├── _theme_runtime_colors.liquid
│   ├── _header.liquid
│   ├── _footer.liquid
│   ├── _filter.liquid
│   ├── _page.liquid
│   ├── _page_form.liquid
│   ├── _reply.liquid
│   └── roadmap/
│       ├── _card.liquid
│       └── _filter.liquid
├── statics/
│   ├── brand.liquid
│   ├── edit.liquid
│   ├── new.liquid
│   ├── profile.liquid
│   └── replies.liquid
├── src/
│   ├── main.css
│   ├── main.js
│   └── controllers/
├── templates/
│   ├── index.liquid
│   ├── page.liquid
│   ├── roadmap.liquid
│   └── search.liquid
├── tailwind.config.js
└── yarn.lock
```

## Preview images

Theme preview thumbnails are referenced in `config/settings_schema.json` under `theme_preview_images` (upload to theme assets when publishing).
