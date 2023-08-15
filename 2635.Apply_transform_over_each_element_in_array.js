const map = (arr, fn) => {
  for(let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i], i)
  }
  return arr
};

const arr = [2, 3, 4]
const fn = (n) => n + 1

console.log(map(arr, fn))