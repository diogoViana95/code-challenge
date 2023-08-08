function method3(...args) {
  if (this.idx === undefined) {
    this.idx = 0;
  }
  const val = args[idx];
  this.idx = this.idx === args.length - 1 ? 0 : this.idx + 1;
  return val;
}

module.exports = method3;
