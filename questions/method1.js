function method1(start, end) {
  if (isNaN(start) || isNaN(end)) return []; // maybe throw an error?
  if (start >= end) return []; // maybe throw an error?

  const res = [];
  while (++start < end) {
    res.push(start);
  }
  return res;
}

module.exports = method1;
