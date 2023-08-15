const expect = (val) => {
  return {
    toBe: (num) => {
      if (num === val) return true
      throw new Error('Not Equal')
    },
    notToBe: (num) => {
      if (num !== val) return true
      throw new Error('Equal')
    }
  }
}

console.log(expect(5).toBe(null))