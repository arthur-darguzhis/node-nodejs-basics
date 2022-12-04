import * as fs from 'node:fs/promises'
import path from 'node:path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const copy = async () => {
  // Write your code here
  const sourcePath = __dirname + path.sep + 'files'
  const destinationPath = __dirname + path.sep + 'files_copy'

  try {
    await fs.cp(sourcePath, destinationPath, {recursive: true, force: false, errorOnExist: true})
  } catch (e) {
    throw new Error('FS operation failed')
  }
}

copy()