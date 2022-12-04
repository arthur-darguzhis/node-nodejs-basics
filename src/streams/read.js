import * as fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const read = async () => {
  // Write your code here
  const sourcePath = __dirname + path.sep + 'files' + path.sep + 'fileToRead.txt'
  const readStream = fs.createReadStream(sourcePath, 'utf-8')
  readStream.pipe(process.stdout)
}

await read()