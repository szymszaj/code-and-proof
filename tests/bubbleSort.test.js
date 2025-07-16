const bubbleSort = require("../src/bubbleSort");

describe("bubbleSort", () => {
  test("should sort an array of positive integers in ascending order", () => {
    const input = [64, 34, 25, 12, 22, 11, 90];
    const expected = [11, 12, 22, 25, 34, 64, 90];
    expect(bubbleSort(input)).toEqual(expected);
  });

  test("should sort an array of negative integers in ascending order", () => {
    const input = [-5, -2, -10, -1, -8];
    const expected = [-10, -8, -5, -2, -1];
    expect(bubbleSort(input)).toEqual(expected);
  });

  test("should sort an array with mixed positive and negative numbers", () => {
    const input = [-5, 3, -10, 7, -1, 0];
    const expected = [-10, -5, -1, 0, 3, 7];
    expect(bubbleSort(input)).toEqual(expected);
  });

  test("should return empty array when input is empty", () => {
    const input = [];
    const expected = [];
    expect(bubbleSort(input)).toEqual(expected);
  });

  test("should return single element array unchanged", () => {
    const input = [42];
    const expected = [42];
    expect(bubbleSort(input)).toEqual(expected);
  });

  test("should sort array with two elements", () => {
    const input = [20, 10];
    const expected = [10, 20];
    expect(bubbleSort(input)).toEqual(expected);
  });

  test("should handle already sorted array", () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    expect(bubbleSort(input)).toEqual(expected);
  });

  test("should handle reverse sorted array", () => {
    const input = [5, 4, 3, 2, 1];
    const expected = [1, 2, 3, 4, 5];
    expect(bubbleSort(input)).toEqual(expected);
  });

  test("should handle array with duplicate values", () => {
    const input = [3, 7, 3, 2, 7, 1, 7];
    const expected = [1, 2, 3, 3, 7, 7, 7];
    expect(bubbleSort(input)).toEqual(expected);
  });

  test("should handle array with all identical elements", () => {
    const input = [5, 5, 5, 5, 5];
    const expected = [5, 5, 5, 5, 5];
    expect(bubbleSort(input)).toEqual(expected);
  });

  test("should sort floating point numbers", () => {
    const input = [3.14, 1.5, 2.7, 1.2, 2.1];
    const expected = [1.2, 1.5, 2.1, 2.7, 3.14];
    expect(bubbleSort(input)).toEqual(expected);
  });

  test("should handle zero in the array", () => {
    const input = [-3, 0, -1, 5, 0];
    const expected = [-3, -1, 0, 0, 5];
    expect(bubbleSort(input)).toEqual(expected);
  });

  test("should handle very large numbers", () => {
    const input = [1000000, 999999, 1000001, 500000];
    const expected = [500000, 999999, 1000000, 1000001];
    expect(bubbleSort(input)).toEqual(expected);
  });

  test("should handle very small decimal numbers", () => {
    const input = [0.003, 0.001, 0.002, 0.0005];
    const expected = [0.0005, 0.001, 0.002, 0.003];
    expect(bubbleSort(input)).toEqual(expected);
  });

  test("should handle Infinity values", () => {
    const input = [1, Infinity, 3, -Infinity, 2];
    const expected = [-Infinity, 1, 2, 3, Infinity];
    expect(bubbleSort(input)).toEqual(expected);
  });

  test("should handle negative zero", () => {
    const input = [-0, 0, 1, -1];
    const expected = [-1, -0, 0, 1];
    expect(bubbleSort(input)).toEqual(expected);
  });

  test("should not modify the original array", () => {
    const input = [3, 1, 4, 1, 5];
    const originalInput = [...input];
    bubbleSort(input);
    expect(input).toEqual(originalInput);
  });

  test("should return a new array instance", () => {
    const input = [3, 1, 4, 1, 5];
    const result = bubbleSort(input);
    expect(result).not.toBe(input);
  });

  test("should handle array with maximum at beginning", () => {
    const input = [100, 50, 75, 25, 60];
    const expected = [25, 50, 60, 75, 100];
    expect(bubbleSort(input)).toEqual(expected);
  });

  test("should handle array with minimum at end", () => {
    const input = [50, 75, 25, 60, 10];
    const expected = [10, 25, 50, 60, 75];
    expect(bubbleSort(input)).toEqual(expected);
  });
});
