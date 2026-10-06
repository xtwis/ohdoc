import {
  existsConfig,
  existsVitepressConfig,
  existsVitepressDir,
  existsVitepressTheme,
  gitignoreHasOhDoc,
} from "./read"
import {
  appendGitignore,
  createVitepressFolder,
  writeConfig,
  writeVitepressConfig,
  writeVitepressTheme,
} from "./write"

export async function runInit(root: string): Promise<number> {
  if (!existsVitepressDir(root)) {
    await createVitepressFolder(root)
  }
  if (!existsVitepressConfig(root)) {
    await writeVitepressConfig(root)
  }
  if (!existsVitepressTheme(root)) {
    await writeVitepressTheme(root)
  }
  if (!existsConfig(root)) {
    await writeConfig(root)
  }
  if (!gitignoreHasOhDoc(root)) {
    await appendGitignore(root)
  }
  return 0
}
