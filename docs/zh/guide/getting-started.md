---
title: 快速开始
order: 1
---

# 快速开始

三步启动本地 VitePress 开发服务器。

## 安装

将 `@xtwis/ohdoc` 添加为开发依赖：

```bash
pnpm add -D @xtwis/ohdoc
# 或
npm install -D @xtwis/ohdoc
# 或
yarn add -D @xtwis/ohdoc
```

## 脚手架

在项目根目录运行：

```bash
pnpm ohdoc init
```

生成 `.vitepress/config.mts`、`.vitepress/theme/index.ts`、`ohdoc.config.mts`，并把 `.vitepress/` 加入 `.gitignore`。已存在的文件会被跳过。

## 编写文档

将 Markdown 放在 `docs/` 下，VitePress 自动识别。例如：

```
docs/
├── en/
│   └── index.md
└── zh/
    └── index.md
```

## 启动开发服务器

```bash
pnpm ohdoc dev
```

VitePress 在 `http://localhost:5173` 启动，使用默认主题、Mermaid 渲染和自动侧边栏。

## 下一步

- [配置](./configuration.md) —— 自定义 `title`、`src`、`repo`
- [API 参考](../reference/api.md) —— `@xtwis/ohdoc` 的所有导出
