<div align="center">

# @xtwis/ohdoc

VitePress workspace scaffold for your repo. One CLI, zero config.

[![npm version](https://img.shields.io/npm/v/@xtwis/ohdoc)](https://www.npmjs.com/package/@xtwis/ohdoc)
[![CI](https://img.shields.io/github/actions/workflow/status/xtwis/ohdoc/ci.yml?branch=main)](https://github.com/xtwis/ohdoc/actions)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@xtwis/ohdoc)](https://bundlephobia.com/package/@xtwis/ohdoc)

</div>

```bash
pnpm ohdoc init
pnpm ohdoc dev
```

- **Minimal Scaffold**: `ohdoc init` generates all config in seconds.
- **Auto-Generated Sidebar**: Powered by `vitepress-sidebar`. Markdown tree is auto-discovered.
- **Mermaid Auto-Renderer**: Theme-aware Mermaid blocks. Dark/light follow the site theme.
- **Unified CLI Surface**: `ohdoc dev`, `build`, `preview` auto-start the matching vitepress service.
- **TypeScript-First**: Strict types end to end.

## Installation

```bash
pnpm add -D @xtwis/ohdoc
# or
npm install -D @xtwis/ohdoc
# or
yarn add -D @xtwis/ohdoc
```

## Quick Start

Create `ohdoc.config.mts` at your project root:

```ts
import { defineOhDocConfig } from "@xtwis/ohdoc"

export default defineOhDocConfig({
  src: "docs",
  title: "Documentation",
})
```

Then run:

```bash
pnpm ohdoc init   # scaffold .vitepress/ and .gitignore
pnpm ohdoc dev    # vitepress at http://localhost:5173
```

## Documentation

Full guides and API reference live at:

- English: <https://x.twis.uk/en/ohdoc/>
- 简体中文: <https://x.twis.uk/zh/ohdoc/>
