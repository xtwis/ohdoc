---
layout: home
title: OhDoc
order: 0

hero:
  name: "@xtwis/ohdoc"
  text: 仓库级 VitePress 工作区
  tagline: 在每个仓库本地脚手架一个 VitePress 开发环境, 一个 CLI, 零配置.
  actions:
    - theme: brand
      text: 快速开始
      link: ./guide/getting-started.md
    - theme: alt
      text: API 参考
      link: ./reference/api.md
    - theme: alt
      text: GitHub
      link: https://github.com/xtwis/ohdoc

features:
  - title: 极简脚手架
    details: ohdoc init 自动生成一切配置, 立即可用.
  - title: 自动侧边栏
    details: 基于 vitepress-sidebar, 自动发现 markdown 树并生成导航.
  - title: Mermaid 自动渲染
    details: 跟随站点主题切换 dark/light, 无需任何手动配置.
  - title: 统一 CLI 入口
    details: ohdoc dev / build / preview 自动启动 vitepress 对应服务.
  - title: TypeScript 优先
    details: 全链路严格类型.
---
