import type { UserConfig } from "vitepress"
import type { VitePressSidebarOptions } from "vitepress-sidebar/types"
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
 * vitepress-sidebar options for each locale.
 */
const VITEPRESS_SIDEBAR_CONFIG: VitePressSidebarOptions[] = [
  {
    documentRootPath: "docs",
    scanStartPath: "en",
    resolvePath: "/en/",
    includeRootIndexFile: true,
    includeFolderIndexFile: true,
    sortMenusByFrontmatterOrder: true,
    useTitleFromFrontmatter: true,
  },
  {
    documentRootPath: "docs",
    scanStartPath: "zh",
    resolvePath: "/zh/",
    includeRootIndexFile: true,
    includeFolderIndexFile: true,
    sortMenusByFrontmatterOrder: true,
    useTitleFromFrontmatter: true,
  },
]

/**
 * default partial vitepress user config.
 */
const VITEPRESS_CONFIG: Partial<UserConfig> = {
  srcDir: "docs",
  lastUpdated: true,
  ignoreDeadLinks: true,
  locales: {
    en: { label: "English", lang: "en", dir: "en" },
    zh: { label: "简体中文", lang: "zh_CN", dir: "zh" },
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
  const srcDir = userConfig.src ?? VITEPRESS_CONFIG.srcDir
  const repo = userConfig.repo ? userConfig.repo.replace(/^@/, "") : "xtwis"
  const sidebar = VITEPRESS_SIDEBAR_CONFIG.map(c => ({
    ...c,
    documentRootPath: srcDir,
  }))
  return withSidebar({
    ...VITEPRESS_CONFIG,
    srcDir,
    title: userConfig.title,
    themeConfig: {
      socialLinks: [
        { icon: "github", link: `https://github.com/${repo}` },
      ],
    },
  } as UserConfig, sidebar)
}
