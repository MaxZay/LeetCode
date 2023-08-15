const twoSum = (nums, target) => {
  return Array.from( new Set (nums.reduce((acc, num, index, arr) => {
    delete arr[index]
    const element = arr.find(item => item === target - num)
    if (element !== undefined) {
      const elementIndex = arr.indexOf(element)
      if (elementIndex !== index) {
        acc.push(index)
        acc.push(arr.indexOf(element))
      }
    }
    return acc
  }, [])))
}

console.log(twoSum([0,4,3,0], 0))