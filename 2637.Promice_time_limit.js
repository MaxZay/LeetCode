const timeLimit = (fn, t) => {
  return async function(...args) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      fn(...arguments).then((result) => {
        clearTimeout(timeout);
        resolve(result);
      }).catch((error) => {
        clearTimeout(timeout);
        reject(error);
      });
    });
  }
};