const addTwoPromises = async (promise1, promise2) => {
  return Promise.all([promise1, promise2]).then((results) => results[0] + results[1])
}

addTwoPromises(Promise.resolve(2), Promise.resolve(1)).then(console.log); // 4