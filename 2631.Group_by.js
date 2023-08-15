Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, item) => {
    let key = fn(item)
    if (acc.hasOwnProperty(key)) {
      acc[key].push(item)
    } else {
      acc[key] = [item]
    }
    return acc
  }, {})
}

let arr = [1, 2 ,3]
arr.groupBy()

console.log(arr.groupBy())