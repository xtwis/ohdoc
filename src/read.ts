import type { UserConfig } from "vitepress"
import type { OhDocUserConfig } from "./types"
import { withSidebar } from "vitepress-sidebar"
import { OHDOC_CONFIG } from "./config"

export function defineOhDocConfig(config: OhDocUserConfig): OhDocUserConfig {
  return config
}

export function buildVitepressConfig(userConfig: OhDocUserConfig): UserConfig {
  const repo = userConfig.repo ? userConfig.repo.replace(/^@/, "") : "xtwis"
  return withSidebar({
    ...OHDOC_CONFIG,
    srcDir: userConfig.src ?? OHDOC_CONFIG.srcDir,
    title: userConfig.title,
    themeConfig: {
      ...OHDOC_CONFIG.themeConfig,
      socialLinks: [
        { icon: "github", link: `https://github.com/${repo}` },
      ],
    },
  } as UserConfig)
}
