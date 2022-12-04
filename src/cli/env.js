const parseEnv = () => {
  // Write your code here
  const matchedVariables = [];
  for (const [envVariable, value] of Object.entries(process.env)) {
    if(envVariable.includes('RSS_')){
      matchedVariables.push(envVariable);
    }
  }
  console.log(matchedVariables.join('; '))
}

parseEnv()