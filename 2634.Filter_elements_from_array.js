const filter = (arr, fn) => {
  return arr.reduce((acc, item, index) => {
    if (fn(item, index)) acc.push(item)
    return acc
  }, [])
}