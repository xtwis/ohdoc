import type { Theme } from "vitepress"
import { useData } from "vitepress"
import { createMermaidRenderer } from "vitepress-mermaid-renderer"
import DefaultTheme from "vitepress/theme"
import { h, nextTick, watch } from "vue"

/**
 * vitepress theme with mermaid auto renderer.
 */
export const VITEPRESS_THEME = {
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
