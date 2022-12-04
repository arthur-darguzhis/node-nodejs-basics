import * as fs from 'node:fs/promises'
import path from 'node:path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const read = async () => {
  // Write your code here
  const pathLink = __dirname + path.sep + 'files' + path.sep + 'fileToRead.txt'
  try {
    const fileContent = await fs.readFile(pathLink, {encoding: 'utf8'})
    console.log(fileContent)
  } catch (e) {
    throw new Error('FS operation failed')
  }
}

await read()