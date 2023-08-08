function method1(start, end) {
  if (typeof start !== "number" || typeof end !== "number") return []; // maybe throw an error?
  if (isNaN(start) || isNaN(end)) return []; // maybe throw an error?
  if (start >= end) return []; // maybe throw an error?

  const res = [];
  while (++start < end) {
    res.push(start);
  }
  return res;
}

module.exports = method1;
