import * as fs from 'node:fs/promises'
import path from 'node:path'
const crypto = await import('node:crypto')
import {fileURLToPath} from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const calculateHash = async () => {
  // Write your code here
  const pathLink = __dirname + path.sep + 'files' + path.sep + 'fileToCalculateHashFor.txt'
  const fileContent = await fs.readFile(pathLink)
  const hex = crypto.createHash('sha256').update(fileContent).digest('hex')
  console.log(hex);
}

await calculateHash()