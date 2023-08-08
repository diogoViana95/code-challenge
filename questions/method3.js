function areArraysEqual(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, idx) => val === b[idx])
  );
}
function method3(...args) {
  if (this.calls === undefined) {
    this.calls = [];
  }

  let idx = this.calls.findIndex((c) => areArraysEqual(c.args, args));

  if (idx === -1) {
    this.calls.push({ args, idx: 0 });
    idx = this.calls.length - 1;
  }

  const nexVal = this.calls[idx].args[this.calls[idx].idx];
  this.calls[idx].idx =
    this.calls[idx].idx === args.length - 1 ? 0 : this.calls[idx].idx + 1;

  return nexVal;

  // if (this.idx === undefined) {
  //   this.idx = 0;
  // }
  // const val = args[idx];
  // this.idx = this.idx === args.length - 1 ? 0 : this.idx + 1;
  // return val;
}

module.exports = method3;
