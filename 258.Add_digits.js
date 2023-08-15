const addDigits = (num) => {
  let sum = num
  while (sum > 9) {
    sum = sum.toString().split('').reduce((reducer, strDigit) => {
      let digit = parseInt(strDigit)
      reducer += digit
      return reducer
    }, 0)
  }
  return sum
}

console.log(addDigits(38))