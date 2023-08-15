const cancellable = (fn, args, t) => {
  fn(...args)
  const interval = setInterval(() => fn(...args), t)

  return () => clearInterval(interval)
}