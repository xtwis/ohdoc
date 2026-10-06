---
title: 配置
order: 2
---

# 配置

通过项目根的 `ohdoc.config.mts` 自定义行为。

## 格式

```ts
import { defineOhDocConfig } from "@xtwis/ohdoc"

export default defineOhDocConfig({
  src: "docs",
  title: "Documentation",
  repo: "@xtwis/myrepo",
})
```

## 字段

### src

Markdown 目录。默认 `"docs"`。

```ts
defineOhDocConfig({ src: "docs" })
```

### title

导航和浏览器标签的站点标题。

```ts
defineOhDocConfig({ title: "我的项目" })
```

### repo

GitHub 仓库路径，用于社交链接图标。自动去掉开头的 `@`。

```ts
defineOhDocConfig({ repo: "@xtwis/myrepo" }) // → https://github.com/xtwis/myrepo
defineOhDocConfig({ repo: "xtwis/myrepo" }) // → https://github.com/xtwis/myrepo
```

## 生成的文件

`ohdoc init` 之后：

```
.vitepress/
├── config.mts           # vitepress 入口，调用 buildVitepressConfig
└── theme/index.ts       # 从 @xtwis/ohdoc/theme re-export VITEPRESS_THEME
```

`config.mts` 是自动生成的，请勿手动编辑。如需修改，请改 `ohdoc.config.mts`。
