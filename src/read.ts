import { existsSync, readFileSync } from "node:fs"
import path from "node:path"

export function existsConfig(root: string): boolean {
  return existsSync(path.join(root, "ohdoc.config.mts"))
}

export function existsVitepressDir(root: string): boolean {
  return existsSync(path.join(root, ".ohdoc"))
}

export function existsVitepressConfig(root: string): boolean {
  return existsSync(path.join(root, ".ohdoc", "config.mts"))
}

export function existsVitepressTheme(root: string): boolean {
  return existsSync(path.join(root, ".ohdoc", "theme", "index.ts"))
}

export function gitignoreHasOhDoc(root: string): boolean {
  const target = path.join(root, ".gitignore")
  if (!existsSync(target)) {
    return false
  }
  const content = readFileSync(target, "utf8")
  return content.split(/\r?\n/).some(line => line.trim() === ".ohdoc/" || line.trim() === ".ohdoc")
}
