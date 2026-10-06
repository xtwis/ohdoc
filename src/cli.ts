import process from "node:process"
import { runInit } from "./init"
import { runVitepress } from "./vitepress"

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
