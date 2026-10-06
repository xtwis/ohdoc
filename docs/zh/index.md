---
layout: home
title: OhDoc
order: 0

hero:
  name: "@xtwis/ohdoc"
  text: 仓库级 VitePress 工作区
  tagline: 在每个仓库本地脚手架一个 VitePress 开发环境, 主文档站定时拉取并构建.
  actions:
    - theme: brand
      text: GitHub
      link: https://github.com/xtwis/ohdoc

features:
  - title: 一行脚手架
    details: ohdoc init 自动生成 .ohdoc/, ohdoc.config.mts, 并追加 .gitignore. 立即可用.
  - title: 自动侧边栏
    details: 基于 vitepress-sidebar, 自动发现 markdown 树并生成导航.
  - title: Mermaid 自动渲染
    details: 跟随站点主题切换 dark/light, 无需任何手动配置.
  - title: 主站聚合构建
    details: 每个仓库自有 docs/, 主文档站定时拉取构建. 文档与代码同源, 永不过期.
  - title: 统一 CLI 入口
    details: ohdoc dev / build / preview. 告别手敲 --config 与路径.
  - title: TypeScript 优先
    details: 全链路严格类型, ohdoc.config.ts 的形状自动推断.
---
