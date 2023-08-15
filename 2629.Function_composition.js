const compose = (functions) => {
  return number => {
    functions.reverse()
    return  functions.reduce((acc, item) => {
      return  item(acc)
    }, number)
    // let value = number;
    // for(let i = functions.length - 1; i >= 0; i--) {
    //   value = functions[i](value)
    // }
    // return value
  }
};

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)) // 9