const removeElement = (arr, val) => {
  arr = arr.filter((item) => item !== val)
  console.log(arr)
  return arr.length
}

console.log(removeElement([3, 2, 2, 3], 3))