const compactObject = (obj) => {
  const isObjArray = Array.isArray(obj)
  let result = isObjArray ? [] : {}
  for(let key in obj) {
    if (Array.isArray(obj[key]) || Object.prototype.toString.call(obj[key]) === '[object Object]') {
      let res = compactObject(obj[key])
      if (isObjArray) result.push(res)
      else result[key] = res
    } else {
      if (!!obj[key]) {
        if (isObjArray) result.push(obj[key])
        else result[key] = obj[key]
      }

    }
  }
  return result
}

console.log(compactObject({"a": null, "b": [false, 1]}))