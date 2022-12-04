import * as fs from 'node:fs/promises'
import path from 'node:path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rename = async () => {
  // Write your code here
  const oldPath = __dirname + path.sep + 'files/wrongFilename.txt'
  const newPath = __dirname + path.sep + 'files/properFilename.md'

  try {
    await fs.rename(oldPath, newPath)
  } catch (e) {
    throw new Error('FS operation failed')
  }
}

await rename()