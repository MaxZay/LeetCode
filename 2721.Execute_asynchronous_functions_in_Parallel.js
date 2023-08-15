const promiseAll = async (functions) => {
  // return new Promise((res, rej) => {
  //   const result = []
  //   for(let i = 0; i < functions.length; i++) {
  //     functions[i]().then((fnRes) => {
  //       result.push(fnRes)
  //       if (result.length === functions.length) res(result)
  //     }).catch((err) => {
  //       rej(err)
  //     })
  //   }
  // })
  return new Promise((resolve, reject) => {
    let resultArr = []
    let completed = 0
    resultArr.length = functions.length
    for(let i = 0; i < functions.length; i++) {
      functions[i]().then((res) => {
        resultArr[i] = res
        completed += 1
        if (completed === functions.length) {
          resolve(resultArr)
        }
      }).catch((err) => {
        reject(err)
      })
    }
  })
}

const arrayOfPromises = [
  () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
  () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
  () => new Promise(resolve => setTimeout(() => resolve(16), 100))
]

promiseAll(arrayOfPromises).then(console.log)

