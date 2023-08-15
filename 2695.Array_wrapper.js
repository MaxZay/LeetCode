class ArrayWrapper {
  constructor(arr) {
    this.arr = arr
  }
  valueOf() {
    return this.arr.reduce((acc, item) => {
      return acc + item
    }, 0)
  }

  toString() {
    return `[${this.arr.toString()}]`
  }
}