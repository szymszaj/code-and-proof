const twoSum = require("./twoSum2");

describe("twoSum", () => {
  test("returns indices of two numbers that add up to target", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test("returns undefined if no solution exists", () => {
    expect(twoSum([1, 2, 3], 7)).toBeUndefined();
  });

  test("works with negative numbers", () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });

  test("works with zero in the array", () => {
    expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
  });

  test("returns first valid pair if multiple exist", () => {
    expect(twoSum([1, 2, 3, 4, 3], 6)).toEqual([1, 3]);
  });
});
