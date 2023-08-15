const flat = (arr, n) => {
  return recursiveFlat(arr, n, 0)
}

const recursiveFlat = (arr, n, currentN) => {
  let result = []
  for(let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && currentN < n) {
      result.push(...recursiveFlat(arr[i], n, currentN + 1))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
console.log(flat(arr, 1))