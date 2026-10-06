---
title: Getting Started
order: 1
---

# Getting Started

From zero to a local VitePress dev server in three commands.

## Installation

Add `@xtwis/ohdoc` as a dev dependency:

```bash
pnpm add -D @xtwis/ohdoc
# or
npm install -D @xtwis/ohdoc
# or
yarn add -D @xtwis/ohdoc
```

## Scaffold the workspace

From your project root, run:

```bash
pnpm ohdoc init
```

This creates `.vitepress/config.mts`, `.vitepress/theme/index.ts`, `ohdoc.config.mts`, and appends `.vitepress/` to `.gitignore`. Existing files are left in place.

## Write your docs

Place Markdown under `docs/`. VitePress picks them up automatically. Example:

```
docs/
├── en/
│   └── index.md
└── zh/
    └── index.md
```

## Run the dev server

```bash
pnpm ohdoc dev
```

VitePress starts at `http://localhost:5173` with the default theme, an auto Mermaid renderer, and a generated sidebar.

## Next

- [Configuration](./configuration.md) — customize `title`, `src`, `repo`.
- [API Reference](../reference/api.md) — every export from `@xtwis/ohdoc`.
