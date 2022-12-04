const parseArgs = () => {
  // Write your code here
  const args = process.argv.reduce((acc, argWithValue) => {
    if (argWithValue.includes('--')) {
      const preparedString = argWithValue.
        replace('--', '').
        replace('=', ' is ')

      acc.push(preparedString)
    }
    return acc
  }, [])

  console.log(args.join(', '))
}

parseArgs()