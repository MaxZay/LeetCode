const createCounter = (n) => {
  let value = n
  return () => {
    return value++
  };
};

const counter = createCounter(10)
