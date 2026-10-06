---
layout: home
title: OhDoc
order: 0

hero:
  name: "@xtwis/ohdoc"
  text: VitePress workspace for your repo
  tagline: Scaffold a local VitePress dev environment per repo, then let a central docs site pull and build them.
  actions:
    - theme: brand
      text: GitHub
      link: https://github.com/xtwis/ohdoc

features:
  - title: One-Command Workspace
    details: ohdoc init scaffolds .ohdoc/, ohdoc.config.mts, and .gitignore. Ready to dev in seconds.
  - title: Built-in Sidebar
    details: Powered by vitepress-sidebar. Markdown tree is auto-discovered and turned into navigation.
  - title: Mermaid Auto-Renderer
    details: Theme-aware Mermaid blocks. Dark/light follow the site theme with zero manual config.
  - title: Central Site Aggregation
    details: Each repo owns its docs/. The central site pulls and builds them. Docs live with code, never go stale.
  - title: Single CLI Surface
    details: ohdoc dev, build, preview. No more typing --config or paths every time.
  - title: TypeScript-First
    details: Strict types end to end. User config shape is inferred from ohdoc.config.ts.
---
