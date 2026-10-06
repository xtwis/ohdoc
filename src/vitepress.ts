import { spawnSync } from "node:child_process"

export function runVitepress(args: string[]): number {
  const r = spawnSync("npx", ["vitepress", ...args], { stdio: "inherit" })
  return r.status ?? 1
}
