const chunk = (arr, size) => {
  let result = []
  let currentChunkSize = 0
  let currentChunkIndex = 0
  for(let i = 0; i < arr.length; i++) {
    if (currentChunkSize === size) {
      currentChunkIndex += 1
      currentChunkSize = 0
    }
    if (!currentChunkSize) result[currentChunkIndex] = [arr[i]]
    else result[currentChunkIndex].push(arr[i])
    currentChunkSize += 1
  }
  return result
}

console.log(chunk([1, 2, 3, 4, 5], 2))