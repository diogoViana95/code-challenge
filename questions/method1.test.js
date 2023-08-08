const method1 = require("./method1");

describe("Method 1", () => {
  it("should return array with element from 2 to 7", () => {
    expect(method1(2, 7)).toEqual([3, 4, 5, 6]);
  });
  it("should return empty array if typeof start value is not a number", () => {
    expect(method1(true, 7)).toEqual([]);
  });

  it("should return empty array if start value is NaN", () => {
    expect(method1(NaN, 7)).toEqual([]);
  });

  it("should return empty array if typeof end value is not a number", () => {
    expect(method1(2, true)).toEqual([]);
  });
  it("should return empty array if end value is NaN", () => {
    expect(method1(2, NaN)).toEqual([]);
  });

  it("should return empty array if end value is smaller than start", () => {
    expect(method1(2, 1)).toEqual([]);
  });

  it("should return empty array if end value is equal to start", () => {
    expect(method1(2, 2)).toEqual([]);
  });
});
