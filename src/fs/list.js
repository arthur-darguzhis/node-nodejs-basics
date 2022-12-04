import * as fs from 'node:fs/promises'
import path from 'node:path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const list = async () => {
  // Write your code here
  const pathLink = __dirname + path.sep + 'files'
  try {
    const files = await fs.readdir(pathLink)
    files.forEach((file) => console.log(file))
  } catch (e) {
    throw new Error('FS operation failed')
  }
}

await list()