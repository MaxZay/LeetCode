const cancellable = (fn, args, t) => {
  const timeout = setTimeout(() => fn(...args), t)
  return () => clearTimeout(timeout)
}