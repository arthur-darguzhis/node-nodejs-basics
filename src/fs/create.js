import * as fs from 'node:fs/promises'
import path from 'node:path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const create = async () => {
  // Write your code here
  const fileName = 'fresh.txt'
  const fileContent = 'I am fresh and young'
  const filePath = __dirname + path.sep + 'files' + path.sep + fileName

  try {
    await fs.writeFile(filePath, fileContent, {flag: 'wx'}) //wx - Open file for writing. The file is created (if it does not exist) but fails if the path exists
  } catch (e) {
    throw new Error('FS operation failed')
  }
}

await create()