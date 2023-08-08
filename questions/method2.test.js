const method2 = require("./method2");

describe("Method 2", () => {
  it("should return number 69856 reversed to 65896", () => {
    expect(method2(69856)).toEqual(65896);
  });

  it("should return number 998877 reversed to 778899", () => {
    expect(method2(998877)).toEqual(778899);
  });
  it("should return number 0", () => {
    expect(method2(0)).toEqual(0);
  });

  it("should return NaN if typeof input is not a number", () => {
    expect(method2(true)).toEqual(NaN);
  });

  it("should return NaN if input is NaN", () => {
    expect(method2(NaN)).toEqual(NaN);
  });
});
