const reduce = (nums, fn, init) => {
  let result = init
  nums.forEach((item) => {
    result = fn(result, item)
  })
  return result
};