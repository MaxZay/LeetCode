const createCounter = (init) => {
  let value = init
  const increment = () => {
    value += 1
    return value
  }

  const decrement = () => {
    value -= 1
    return value
  }

  const reset = () => {
    value = init
    return value
  }

  return {
    decrement, increment, reset
  }
};

const counter = createCounter(10)

console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.decrement())
console.log(counter.reset())