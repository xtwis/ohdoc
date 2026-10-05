import type { Theme, UserConfig } from "vitepress"
import { useData } from "vitepress"
import { createMermaidRenderer } from "vitepress-mermaid-renderer"
import DefaultTheme from "vitepress/theme"
import { h, nextTick, watch } from "vue"

export const OHDOC_CONFIG: Partial<UserConfig> = {
  srcDir: "docs",
  lastUpdated: true,
  ignoreDeadLinks: true,
  locales: {
    en: { label: "English", lang: "en", dir: "en" },
    zh: { label: "简体中文", lang: "zh_CN", dir: "zh" },
  },
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/xtwis" },
    ],
  },
  markdown: { html: false },
}

export const OHDOC_THEME = {
  extends: DefaultTheme,
  Layout: () => {
    const { isDark } = useData()

    const initMermaid = (): void => {
      createMermaidRenderer({
        theme: isDark.value ? "dark" : "forest",
      })
    }

    void nextTick(() => initMermaid())

    watch(
      () => isDark.value,
      () => {
        initMermaid()
      },
    )

    return h(DefaultTheme.Layout)
  },
} satisfies Theme

export const RUNTIME_CONFIG = `import userConfig from "../ohdoc.config"
import { buildVitepressConfig } from "@xtwis/ohdoc"
export default buildVitepressConfig(userConfig)
`

export const RUNTIME_THEME = `import { OHDOC_THEME } from "@xtwis/ohdoc"
export default OHDOC_THEME
`
