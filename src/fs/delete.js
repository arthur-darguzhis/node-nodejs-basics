import * as fs from 'node:fs/promises'
import path from 'node:path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const remove = async () => {
  // Write your code here
  const pathLink = __dirname + path.sep + 'files' +  path.sep + '/fileToRemove.txt'

  try {
    await fs.unlink(pathLink)
  } catch (e) {
    throw new Error('FS operation failed')
  }
}

await remove()