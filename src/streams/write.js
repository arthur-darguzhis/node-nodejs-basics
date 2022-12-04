import * as fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const write = async () => {
  // Write your code here
  const sourcePath = __dirname + path.sep + 'files' + path.sep + 'fileToWrite.txt'
  const writeStream = fs.createWriteStream(sourcePath)
  process.stdin.pipe(writeStream)
}

await write()