import os from 'node:os'
import stream from 'node:stream'

const transform = async () => {
  // Write your code here
  const revert = new stream.Transform({
    transform(chunk, encoding, callback) {
      const string = chunk.toString().replace(os.EOL, '')
      const reverseString = [...string].reverse().join('')
      callback(null, reverseString + os.EOL)
    }
  })

  stream.pipeline(
    process.stdin,
    revert,
    process.stdout,
    (err) => {
      err
        ? console.error('An error occurred in pipeline.', err)
        : console.log('Pipeline execution successful')
    }
  )
}

await transform()