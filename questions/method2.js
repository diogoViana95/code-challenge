function method2(num) {
  if (typeof num !== "number" || isNaN(num)) return NaN;

  let res = 0;
  while (num > 0) {
    let digit = num % 10;
    res = res * 10 + digit;
    num = parseInt(num / 10);
  }
  return res;
}

module.exports = method2;
