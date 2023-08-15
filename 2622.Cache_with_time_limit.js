class TimeLimitedCache {
  cache = {
    length: 0
  }
  set(key, value, duration) {
    if (this.cache[key]) {
      clearTimeout(this.cache[key].timeout)
    }

    this.cache[key] = {
      value, duration, isExpired: false, timeout: setTimeout(() => {
        this.cache[key].isExpired = true
        this.cache.length -= 1
      }, duration)
    }
    this.cache.length += 1

    return this.cache[key].isExpired
  }

  get(key) {
    return this.cache[key] && !this.cache[key].isExpired ? this.cache[key].value : -1
  }

  count() {
    return this.cache.length
  }
}

const obj = new TimeLimitedCache()
console.log(obj.set(1, 42, 50))
console.log(obj.set(1, 50, 100))
console.log(obj.get(1))
console.log(obj.get(1))
console.log(obj.get(1))
console.log(obj.count())