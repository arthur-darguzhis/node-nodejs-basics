import {fileURLToPath} from 'url'
import zlib from 'node:zlib'
import stream from 'node:stream'
import * as fs from 'node:fs'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const decompress = async () => {
  // Write your code here
  const sourcePath = __dirname + path.sep + 'files' + path.sep + 'archive.gz'
  const destinationPath = __dirname + path.sep + 'files' + path.sep + 'fileToCompress.txt'

  const source = fs.createReadStream(sourcePath)
  const gzip = zlib.createUnzip()
  const destination = fs.createWriteStream(destinationPath)

  stream.pipeline(
    source,
    gzip,
    destination,
    (err) => {
      if (err) {
        console.error('An error occurred:', err)
        process.exitCode = 1
      }
    })
}

await decompress()