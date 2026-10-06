---
title: Configuration
order: 2
---

# Configuration

Customize ohdoc through `ohdoc.config.mts` at your project root.

## Shape

```ts
import { defineOhDocConfig } from "@xtwis/ohdoc"

export default defineOhDocConfig({
  src: "docs",
  title: "Documentation",
  repo: "@xtwis/myrepo",
})
```

## Fields

### src

Markdown directory. Defaults to `"docs"`.

```ts
defineOhDocConfig({ src: "docs" })
```

### title

Site title shown in the nav and browser tab.

```ts
defineOhDocConfig({ title: "My Project" })
```

### repo

GitHub repo for the social link icon. A leading `@` is stripped automatically.

```ts
defineOhDocConfig({ repo: "@xtwis/myrepo" }) // → https://github.com/xtwis/myrepo
defineOhDocConfig({ repo: "xtwis/myrepo" }) // → https://github.com/xtwis/myrepo
```

## Generated files

After `ohdoc init`:

```
.vitepress/
├── config.mts           # vitepress entry, calls buildVitepressConfig
└── theme/index.ts       # re-exports VITEPRESS_THEME from @xtwis/ohdoc/theme
```

The `config.mts` is auto-generated and should not be edited manually. Change `ohdoc.config.mts` instead.
