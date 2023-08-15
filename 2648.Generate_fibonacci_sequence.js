const fibGenerator = function*() {
  const fibArr = []
  for(let i = 0; i <= 50; i++) {
    if (i === 0) {
      fibArr.push(0)
      yield 0
    } else if (i === 1) {
      fibArr.push(1)
      yield 1
    } else {
      const num = fibArr[i - 1] + fibArr[i - 2]
      fibArr.push(num)
      yield num
    }
  }
}

const gen = fibGenerator()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)