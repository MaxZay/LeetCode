const memoize = (fn) => {
  const cache = {}
  return (...args) => {
    let keyOfArgs = args.toString()
    if (cache.hasOwnProperty(keyOfArgs)) {
      return cache[keyOfArgs]
    } else {
      let fnResult = fn(...args)
      cache[keyOfArgs] = fnResult
      return fnResult
    }
  }
}