import { spawnSync } from "node:child_process"
import { existsSync, readFileSync } from "node:fs"
import { appendFile, mkdir, writeFile } from "node:fs/promises"
import path from "node:path"
import process from "node:process"

/**
 * vitepress runtime config content.
 */
const VITEPRESS_CONFIG_CONTENT = `import { buildVitepressConfig } from "@xtwis/ohdoc"
import userConfig from "../ohdoc.config"

export default buildVitepressConfig(userConfig)
`

/**
 * vitepress runtime theme content.
 */
const VITEPRESS_THEME_CONTENT = `import { VITEPRESS_THEME } from "@xtwis/ohdoc"

export default VITEPRESS_THEME
`

/**
 * ohdoc user config content.
 */
const OHDOC_CONFIG_CONTENT = `import { defineOhDocConfig } from "@xtwis/ohdoc"

export default defineOhDocConfig({
  src: "docs",
  title: "Documentation",
})
`

/**
 * spawns vitepress and returns its exit code.
 */
function runVitepress(args: string[]): number {
  const r = spawnSync("npx", ["vitepress", ...args], { stdio: "inherit" })
  return r.status ?? 1
}

/**
 * scaffolds the ohdoc workspace at root.
 */
async function runInit(root: string): Promise<number> {
  await mkdir(path.join(root, ".ohdoc", "theme"), { recursive: true })

  if (!existsSync(path.join(root, ".ohdoc", "config.mts"))) {
    await writeFile(path.join(root, ".ohdoc", "config.mts"), VITEPRESS_CONFIG_CONTENT, "utf8")
  }
  if (!existsSync(path.join(root, ".ohdoc", "theme", "index.ts"))) {
    await writeFile(path.join(root, ".ohdoc", "theme", "index.ts"), VITEPRESS_THEME_CONTENT, "utf8")
  }

  if (!existsSync(path.join(root, "ohdoc.config.mts"))) {
    await writeFile(path.join(root, "ohdoc.config.mts"), OHDOC_CONFIG_CONTENT, "utf8")
  }

  const gitignorePath = path.join(root, ".gitignore")
  let hasEntry = false
  if (existsSync(gitignorePath)) {
    const content = readFileSync(gitignorePath, "utf8")
    hasEntry = content.split(/\r?\n/).some(line => line.trim() === ".ohdoc/" || line.trim() === ".ohdoc")
  }
  if (!hasEntry) {
    await appendFile(gitignorePath, "\n# OhDoc\n.ohdoc/\n", "utf8")
  }

  return 0
}

/**
 * cli entry, routes argv to init or vitepress commands.
 */
async function main(): Promise<void> {
  const command = process.argv[2]
  let code = 0
  switch (command) {
    case "init":
      code = await runInit(process.cwd())
      break
    case "dev":
      code = runVitepress(["dev", "docs", "--config", ".ohdoc/config.mts"])
      break
    case "build":
      code = runVitepress(["build", "docs", "--config", ".ohdoc/config.mts"])
      break
    case "preview":
      code = runVitepress(["preview", "docs", "--config", ".ohdoc/config.mts"])
      break
    default:
      code = 1
  }
  if (code !== 0) {
    process.exit(code)
  }
}

main().catch(() => process.exit(1))
