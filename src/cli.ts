import { spawnSync } from "node:child_process"
import { existsSync, readFileSync } from "node:fs"
import { appendFile, mkdir, writeFile } from "node:fs/promises"
import path from "node:path"
import process from "node:process"

/**
 * vitepress runtime config content.
 */
const VITEPRESS_CONFIG_CONTENT = `import { buildVitepressConfig } from "@xtwis/ohdoc"
import userConfig from "../ohdoc.config.mts"

export default buildVitepressConfig(userConfig)
`

/**
 * vitepress runtime theme content.
 */
const VITEPRESS_THEME_CONTENT = `export { VITEPRESS_THEME as default } from "@xtwis/ohdoc/theme"
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
 * cli log, colorizes title and prefixes messages.
 */
function log(title: string, ...messages: string[]): void {
  const bg = title === "error" ? "\u001B[41m" : "\u001B[46m"
  const color = "\u001B[30m"
  const reset = "\u001B[0m"
  console.log(`${bg}${color} ${title} ${reset} ${messages.join("")}`)
}

/**
 * scaffolds the ohdoc workspace at root.
 */
async function runInit(root: string): Promise<number> {
  try {
    await mkdir(path.join(root, ".vitepress", "theme"), { recursive: true })
    log("success", "create .vitepress at ", path.join(root, ".vitepress", "theme"))
  }
  catch (err) {
    log("error", "create .vitepress failed with ", (err as Error).message)
  }

  if (!existsSync(path.join(root, ".vitepress", "config.mts"))) {
    try {
      await writeFile(path.join(root, ".vitepress", "config.mts"), VITEPRESS_CONFIG_CONTENT, "utf8")
      log("success", "create config.mts at ", path.join(root, ".vitepress", "config.mts"))
    }
    catch (err) {
      log("error", "create config.mts failed with ", (err as Error).message)
    }
  }

  if (!existsSync(path.join(root, ".vitepress", "theme", "index.ts"))) {
    try {
      await writeFile(path.join(root, ".vitepress", "theme", "index.ts"), VITEPRESS_THEME_CONTENT, "utf8")
      log("success", "create theme at ", path.join(root, ".vitepress", "theme", "index.ts"))
    }
    catch (err) {
      log("error", "create theme failed with ", (err as Error).message)
    }
  }

  if (!existsSync(path.join(root, "ohdoc.config.mts"))) {
    try {
      await writeFile(path.join(root, "ohdoc.config.mts"), OHDOC_CONFIG_CONTENT, "utf8")
      log("success", "create ohdoc.config.mts at ", path.join(root, "ohdoc.config.mts"))
    }
    catch (err) {
      log("error", "create ohdoc.config.mts failed with ", (err as Error).message)
    }
  }

  const gitignorePath = path.join(root, ".gitignore")
  let hasEntry = false
  if (existsSync(gitignorePath)) {
    const content = readFileSync(gitignorePath, "utf8")
    hasEntry = content.split(/\r?\n/).some(line => line.trim() === ".vitepress/" || line.trim() === ".vitepress")
  }
  if (!hasEntry) {
    try {
      await appendFile(gitignorePath, "\n# OhDoc Vitepress\n.vitepress/\n", "utf8")
      log("success", "append .vitepress/ entry to ", gitignorePath)
    }
    catch (err) {
      log("error", "append .vitepress/ entry to ", gitignorePath, " failed with ", (err as Error).message)
    }
  }

  return 0
}

/**
 * spawns vitepress and returns its exit code.
 */
function runVitepress(args: string[]): number {
  const r = spawnSync("npx", ["vitepress", ...args], { stdio: "inherit", shell: true })
  return r.status ?? 1
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
      code = runVitepress(["dev"])
      break
    case "build":
      code = runVitepress(["build"])
      break
    case "preview":
      code = runVitepress(["preview"])
      break
    default:
      code = 1
  }
  if (code !== 0) {
    process.exit(code)
  }
}

main().catch((err) => {
  log("error", (err as Error).message)
  process.exit(1)
})
