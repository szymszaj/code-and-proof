const findMax = require("../src/findMax");

describe("findMax", () => {
  test("should return the maximum value from an array of positive numbers", () => {
    const input = [1, 5, 3, 9, 2];
    const expected = 9;
    expect(findMax(input)).toBe(expected);
  });

  test("should return the maximum value from an array with negative numbers", () => {
    const input = [-5, -2, -10, -1];
    const expected = -1;
    expect(findMax(input)).toBe(expected);
  });

  test("should return the maximum value from an array with mixed positive and negative numbers", () => {
    const input = [-5, 3, -10, 7, -1];
    const expected = 7;
    expect(findMax(input)).toBe(expected);
  });

  test("should return undefined for an empty array", () => {
    const input = [];
    const expected = undefined;
    expect(findMax(input)).toBe(expected);
  });

  test("should return the single element for an array with one element", () => {
    const input = [42];
    const expected = 42;
    expect(findMax(input)).toBe(expected);
  });

  test("should handle an array with duplicate maximum values", () => {
    const input = [3, 7, 7, 2, 7, 1];
    const expected = 7;
    expect(findMax(input)).toBe(expected);
  });

  test("should handle an array with all identical elements", () => {
    const input = [5, 5, 5, 5];
    const expected = 5;
    expect(findMax(input)).toBe(expected);
  });

  test("should handle zero in the array", () => {
    const input = [-3, 0, -1, -5];
    const expected = 0;
    expect(findMax(input)).toBe(expected);
  });

  test("should handle floating point numbers", () => {
    const input = [1.5, 2.7, 1.2, 3.14, 2.1];
    const expected = 3.14;
    expect(findMax(input)).toBe(expected);
  });

  test("should handle very large numbers", () => {
    const input = [1000000, 999999, 1000001, 500000];
    const expected = 1000001;
    expect(findMax(input)).toBe(expected);
  });

  test("should handle very small decimal numbers", () => {
    const input = [0.001, 0.002, 0.0005, 0.003];
    const expected = 0.003;
    expect(findMax(input)).toBe(expected);
  });

  test("should handle negative zero", () => {
    const input = [-0, 0];
    const expected = 0;
    expect(findMax(input)).toBe(expected);
  });

  test("should handle array with two elements", () => {
    const input = [10, 20];
    const expected = 20;
    expect(findMax(input)).toBe(expected);
  });

  test("should handle array where first element is maximum", () => {
    const input = [100, 50, 75, 25];
    const expected = 100;
    expect(findMax(input)).toBe(expected);
  });

  test("should handle array where last element is maximum", () => {
    const input = [50, 75, 25, 100];
    const expected = 100;
    expect(findMax(input)).toBe(expected);
  });

  test("should handle Infinity", () => {
    const input = [1, 2, Infinity, 3];
    const expected = Infinity;
    expect(findMax(input)).toBe(expected);
  });

  test("should handle negative Infinity", () => {
    const input = [-Infinity, -1, -2];
    const expected = -1;
    expect(findMax(input)).toBe(expected);
  });
});
