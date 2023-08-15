Function.prototype.callPolyfill = function (context, ...args) {
  return this.call(context, ...args)
}

fn = function add(b) {
  return this.a + b;
}

console.log(fn.callPolyfill({a: 5}, 7))

