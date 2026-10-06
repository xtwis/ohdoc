---
title: API 参考
order: 1
---

# API 参考

## Lib 导出（`@xtwis/ohdoc`）

### `defineOhDocConfig(config)`

`ohdoc.config.mts` 的 identity helper。原样返回参数以保留类型。

```ts
import { defineOhDocConfig } from "@xtwis/ohdoc"

export default defineOhDocConfig({ title: "文档" })
```

### `buildVitepressConfig(userConfig)`

合并用户配置和 `VITEPRESS_CONFIG`，并接入 `vitepress-sidebar`。由自动生成的 `.vitepress/config.mts` 调用，请勿手动调用。

### `VITEPRESS_CONFIG`

默认 VitePress partial config：`srcDir: "docs"`、`lastUpdated: true`、`ignoreDeadLinks: true`、双语 locale（en/zh）、GitHub 社交链接。

### `OhDocUserConfig`

TypeScript 用户配置类型：

```ts
interface OhDocUserConfig {
  src?: string
  title?: string
  repo?: string
}
```

## 主题入口（`@xtwis/ohdoc/theme`）

### `VITEPRESS_THEME`

VitePress `Theme`，扩展默认主题并自动注入 Mermaid 渲染，跟随站点暗/亮主题切换。

```ts
// .vitepress/theme/index.ts（由 ohdoc init 自动生成）
export { VITEPRESS_THEME as default } from "@xtwis/ohdoc/theme"
```

如需替换，在 `ohdoc init` 之后编辑 `.vitepress/theme/index.ts`。

## CLI

### `ohdoc init`

脚手架 `.vitepress/{config.mts, theme/index.ts}` 和 `ohdoc.config.mts`，追加 `.gitignore`。幂等——已存在的文件不会被覆盖。

### `ohdoc dev`

启动 VitePress dev server，地址 `http://localhost:5173`。

### `ohdoc build`

构建静态站点到 `.vitepress/dist/`。

### `ohdoc preview`

本地预览生产构建产物。
