const flatArray = (arr) => {
  let result = []
  for(let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const flatResult = flatArray(arr[i])
      result = [...result, ...flatResult]
    } else {
      result.push(arr[i])
    }
  }
  return result
}

const inorderTraversal = function*(arr)  {
  const flatArr = flatArray(arr)
  for(let i = 0; i < flatArr.length; i++) {
    yield flatArr[i]
  }
}

const test = [[[6]],[1,3],[]]

console.log(flatArray(test))