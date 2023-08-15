const join = (arr1, arr2) => {
  const reducedArr = arr1.reduce((acc, item) => {
    const secondArrItem = arr2.find((test) => test.id === item.id)
    if (secondArrItem) {
      const indexOf = arr2.indexOf(secondArrItem)
      arr2.splice(indexOf, 1)
      acc.push({...item, ...secondArrItem})
    } else {
      acc.push(item)
    }
    return acc
  }, [])
  return [...reducedArr, ...arr2].sort((a, b) => a.id - b.id)
}

const arr1 = [{"id": 1,"x": 2,"y": 3},{"id": 2,"x": 3,"y": 6}]

const arr2 = [{"id": 2,"x": 10,"y": 20},{"id": 3,"x": 0,"y": 0}]

console.log(join(arr1, arr2))