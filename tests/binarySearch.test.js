const binarySearch = require("../src/binarySearch");

describe("binarySearch", () => {
  test("finds target in sorted array of positive integers", () => {
    const arr = [1, 3, 5, 7, 9];
    expect(binarySearch(arr, 5)).toBe(2);
    expect(binarySearch(arr, 1)).toBe(0);
    expect(binarySearch(arr, 9)).toBe(4);
  });

  test("returns -1 when target is not in array", () => {
    const arr = [2, 4, 6, 8, 10];
    expect(binarySearch(arr, 5)).toBe(-1);
    expect(binarySearch(arr, 0)).toBe(-1);
    expect(binarySearch(arr, 12)).toBe(-1);
  });

  test("works with negative numbers", () => {
    const arr = [-10, -5, -2, 0, 3, 7];
    expect(binarySearch(arr, -5)).toBe(1);
    expect(binarySearch(arr, 0)).toBe(3);
    expect(binarySearch(arr, 7)).toBe(5);
    expect(binarySearch(arr, -1)).toBe(-1);
  });

  test("works with single element array", () => {
    expect(binarySearch([42], 42)).toBe(0);
    expect(binarySearch([42], 0)).toBe(-1);
  });

  test("returns -1 for empty array", () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  test("works with array of two elements", () => {
    expect(binarySearch([1, 2], 1)).toBe(0);
    expect(binarySearch([1, 2], 2)).toBe(1);
    expect(binarySearch([1, 2], 3)).toBe(-1);
  });

  test("works with duplicate values (returns first found index)", () => {
    const arr = [1, 2, 2, 2, 3];
    const idx = binarySearch(arr, 2);
    expect([1, 2, 3]).toContain(idx);
    expect(arr[idx]).toBe(2);
  });

  test("works with floating point numbers", () => {
    const arr = [0.1, 0.5, 1.2, 2.8, 3.14];
    expect(binarySearch(arr, 2.8)).toBe(3);
    expect(binarySearch(arr, 0.1)).toBe(0);
    expect(binarySearch(arr, 3.14)).toBe(4);
    expect(binarySearch(arr, 1.5)).toBe(-1);
  });

  test("works with Infinity and -Infinity", () => {
    const arr = [-Infinity, -1, 0, 1, Infinity];
    expect(binarySearch(arr, -Infinity)).toBe(0);
    expect(binarySearch(arr, Infinity)).toBe(4);
    expect(binarySearch(arr, 0)).toBe(2);
    expect(binarySearch(arr, 100)).toBe(-1);
  });

  test("works with zero and negative zero", () => {
    const arr = [-1, -0, 0, 1];
    expect(binarySearch(arr, 0)).toBe(2);
    expect(binarySearch(arr, -0)).toBe(1);
  });
});
