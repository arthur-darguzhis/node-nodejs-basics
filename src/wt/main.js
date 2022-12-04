import os from 'node:os'
import {Worker} from 'node:worker_threads'
import {fileURLToPath} from 'url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const performCalculations = async () => {
  // Write your code here
  const cpusCount = os.cpus()
  let fibNumber = 10

  const workersResults = await Promise.allSettled(cpusCount.map(() => {
      return new Promise((resolve, reject) => {
          const scriptUrl = __dirname + path.sep + 'worker.js'
          const worker = new Worker(scriptUrl, {workerData: fibNumber++})
          worker.on('message', message => resolve(message))
          worker.on('error', error => reject(error))
    })
  }))


  const result = workersResults.map(({status, value}) => {
    return {
      status: status === 'fulfilled' ? 'resolved' : 'error',
      value: status === 'fulfilled' ? value : null
    }
  })

  console.log(result)
}

await performCalculations()