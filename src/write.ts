import { appendFile, mkdir, writeFile } from "node:fs/promises"
import path from "node:path"

import { RUNTIME_CONFIG, RUNTIME_THEME } from "./config"

export async function createFolder(root: string): Promise<void> {
  await mkdir(path.join(root, ".ohdoc", "theme"), { recursive: true })
}

export async function writeConfig(root: string): Promise<void> {
  await writeFile(path.join(root, ".ohdoc", "config.mts"), RUNTIME_CONFIG, "utf8")
}

export async function writeTheme(root: string): Promise<void> {
  await writeFile(path.join(root, ".ohdoc", "theme", "index.ts"), RUNTIME_THEME, "utf8")
}

export async function writeRuntime(root: string): Promise<void> {
  await createFolder(root)
  await writeConfig(root)
  await writeTheme(root)
}

export async function appendGitignore(root: string): Promise<void> {
  await appendFile(path.join(root, ".gitignore"), "\n# OhDoc\n.ohdoc/\n", "utf8")
}
