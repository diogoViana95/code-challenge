const method3 = require("./method3");

describe("Method 3", () => {
  it("should return each element of args input in each call", () => {
    const arr = ["3G", "4G", "5G"];
    arr.forEach((e) => {
      expect(method3(...arr)).toEqual(e);
    });
    // we test again to test for circularity
    expect(method3(...arr)).toEqual(arr[0]);
  });
});
