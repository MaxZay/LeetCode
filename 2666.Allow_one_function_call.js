const once = (fn) => {
  let isFunctionCalled = false
  return (...args) => {
    if (!isFunctionCalled) {
      isFunctionCalled = true
      return fn(...args)
    }
  }
}

const func = once((a,b,c) => (a + b + c))
console.log(func(3, 1, 3))
console.log(func(3, 1, 3))
console.log(func(3, 1, 3))