import type { UserConfig } from "vitepress"
import type { OhDocUserConfig } from "./types"
import { withSidebar } from "vitepress-sidebar"
import { VITEPRESS_CONFIG } from "./config"

export function defineOhDocConfig(config: OhDocUserConfig): OhDocUserConfig {
  return config
}

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
