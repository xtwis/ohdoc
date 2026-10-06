import { appendFile, mkdir, writeFile } from "node:fs/promises"
import path from "node:path"

const VITEPRESS_CONFIG_CONTENT = `import { buildVitepressConfig } from "@xtwis/ohdoc"
import userConfig from "../ohdoc.config"

export default buildVitepressConfig(userConfig)
`

const VITEPRESS_THEME_CONTENT = `import { VITEPRESS_THEME } from "@xtwis/ohdoc"

export default VITEPRESS_THEME
`

const OHDOC_CONFIG_CONTENT = `import { defineOhDocConfig } from "@xtwis/ohdoc"

export default defineOhDocConfig({
  src: "docs",
  title: "Documentation",
})
`

export async function createVitepressFolder(root: string): Promise<void> {
  await mkdir(path.join(root, ".ohdoc", "theme"), { recursive: true })
}

export async function writeVitepressConfig(root: string): Promise<void> {
  await writeFile(path.join(root, ".ohdoc", "config.mts"), VITEPRESS_CONFIG_CONTENT, "utf8")
}

export async function writeVitepressTheme(root: string): Promise<void> {
  await writeFile(path.join(root, ".ohdoc", "theme", "index.ts"), VITEPRESS_THEME_CONTENT, "utf8")
}

export async function appendGitignore(root: string): Promise<void> {
  await appendFile(path.join(root, ".gitignore"), "\n# OhDoc\n.ohdoc/\n", "utf8")
}

export async function writeConfig(root: string): Promise<void> {
  await writeFile(path.join(root, "ohdoc.config.mts"), OHDOC_CONFIG_CONTENT, "utf8")
}
