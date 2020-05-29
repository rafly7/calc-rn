function compute(operator) {
    let checks = operator.split('')
    let len = checks.length
    let last = checks[len - 1]
    console.log(checks)
    if (checks.length > 3) {
      if (checks[checks.length - 1] === '=') {
        if (operator.includes('+')) {
          console.log('benar')
        }
      }
    } else {
      if (last === '+' || last === '-' || last === '*' || last === '/') {
        if (checks[len - 2] === '+' || checks[len - 2] === '-' || checks[len -2] === '*' || checks[len - 2] === '/') {
            console.log(checks[len - 2])
            return checks[len - 2]
        } else {
            return operator;
        }
      }
    }
    
  }