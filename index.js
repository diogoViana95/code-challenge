const { method1, method2, method3 } = require("./questions");

const testRunner = (name, fn, ...useCasesArguments) => {
  console.log(name);
  useCasesArguments.forEach((args) => {
    if (!Array.isArray(args)) {
      args = [args];
    }
    let res = fn(...args);

    if (Array.isArray(res) && res.length === 0) {
      res = "[]";
    }

    console.log(`  ${args} => ${res}`);
  });
};

(() => {
  testRunner("method1", method1, [2, 7], [5, 10], [2, 1], [NaN, 10], [2, NaN]);
  testRunner("method2", method2, 69856, 998877, NaN);
  testRunner(
    "method3",
    method3,
    ["3G", "4G", "5G"],
    ["3G", "4G", "5G"],
    ["3G", "4G", "5G"],
    ["3G", "4G", "5G"]
  );
})();
