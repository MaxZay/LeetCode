const debounce = (fn, t) => {
  let timerOfPreviousFunction
  let isTimerWorking = false

  return (...args) => {
    if(isTimerWorking) {}
    clearTimeout(timerOfPreviousFunction)
    timerOfPreviousFunction = setTimeout(() => {
      fn(...args)
      isTimerWorking = false
    }, t)
    isTimerWorking = true
  }
}