import type { UserConfig } from "vitepress"
import { withSidebar } from "vitepress-sidebar"

/**
 * user-facing config shape for ohdoc.config.ts.
 */
export interface OhDocUserConfig {
  src?: string
  title?: string
  repo?: string
}

/**
 * default partial vitepress user config.
 */
export const VITEPRESS_CONFIG: Partial<UserConfig> = {
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

/**
 * identity helper used in ohdoc.config.ts.
 */
export function defineOhDocConfig(config: OhDocUserConfig): OhDocUserConfig {
  return config
}

/**
 * merges user config with defaults and vitepress-sidebar.
 */
export function buildVitepressConfig(userConfig: OhDocUserConfig): UserConfig {
  const repo = userConfig.repo ? userConfig.repo.replace(/^@/, "") : "xtwis"
  return withSidebar({
    ...VITEPRESS_CONFIG,
    srcDir: userConfig.src ?? VITEPRESS_CONFIG.srcDir,
    title: userConfig.title,
    themeConfig: {
      ...VITEPRESS_CONFIG.themeConfig,
      socialLinks: [
        { icon: "github", link: `https://github.com/${repo}` },
      ],
    },
  } as UserConfig)
}
