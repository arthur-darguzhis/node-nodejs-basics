import { spawn } from 'node:child_process'
import {fileURLToPath} from 'url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const spawnChildProcess = async (args) => {
  // Write your code here
  const pathToChildScript = __dirname + path.sep + 'files' + path.sep + 'script.js'

  const childProcess = spawn('node', [pathToChildScript, ...args.split(' ')])
  process.stdin.on('data', (data) => childProcess.stdin.write(data))

  childProcess.stdout.on('data', (data) => {
    console.log(data.toString())
  })
}

spawnChildProcess('--firstArg --secondArg --thirdArg')