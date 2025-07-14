const longestCommonPrefix = require("../src/longestCommonPrefix");

describe("longestCommonPrefix", () => {
  test("should return common prefix for strings with common beginning", () => {
    const input = ["flower", "flow", "flight"];
    const expected = "fl";
    expect(longestCommonPrefix(input)).toBe(expected);
  });

  test("should return empty string when no common prefix exists", () => {
    const input = ["dog", "racecar", "car"];
    const expected = "";
    expect(longestCommonPrefix(input)).toBe(expected);
  });

  test("should return empty string for empty array", () => {
    const input = [];
    const expected = "";
    expect(longestCommonPrefix(input)).toBe(expected);
  });

  test("should return the string itself when array has only one string", () => {
    const input = ["alone"];
    const expected = "alone";
    expect(longestCommonPrefix(input)).toBe(expected);
  });

  test("should return empty string when one of the strings is empty", () => {
    const input = ["hello", "", "help"];
    const expected = "";
    expect(longestCommonPrefix(input)).toBe(expected);
  });

  test("should handle identical strings", () => {
    const input = ["test", "test", "test"];
    const expected = "test";
    expect(longestCommonPrefix(input)).toBe(expected);
  });

  test("should handle single character strings", () => {
    const input = ["a", "a", "a"];
    const expected = "a";
    expect(longestCommonPrefix(input)).toBe(expected);
  });

  test("should handle single character with no common prefix", () => {
    const input = ["a", "b", "c"];
    const expected = "";
    expect(longestCommonPrefix(input)).toBe(expected);
  });

  test("should handle strings where one is prefix of another", () => {
    const input = ["prefix", "prefixes", "prefixed"];
    const expected = "prefix";
    expect(longestCommonPrefix(input)).toBe(expected);
  });

  test("should handle case sensitivity", () => {
    const input = ["Hello", "hello", "HELLO"];
    const expected = "";
    expect(longestCommonPrefix(input)).toBe(expected);
  });

  test("should handle numbers as strings", () => {
    const input = ["123456", "123789", "123000"];
    const expected = "123";
    expect(longestCommonPrefix(input)).toBe(expected);
  });

  test("should handle special characters", () => {
    const input = ["@#$test", "@#$temp", "@#$term"];
    const expected = "@#$te";
    expect(longestCommonPrefix(input)).toBe(expected);
  });

  test("should handle very long strings", () => {
    const longPrefix = "a".repeat(1000);
    const input = [longPrefix + "x", longPrefix + "y", longPrefix + "z"];
    const expected = longPrefix;
    expect(longestCommonPrefix(input)).toBe(expected);
  });

  test("should handle whitespace", () => {
    const input = ["  hello", "  help", "  hero"];
    const expected = "  he";
    expect(longestCommonPrefix(input)).toBe(expected);
  });

  test("should return empty string when first character differs", () => {
    const input = ["abc", "def", "ghi"];
    const expected = "";
    expect(longestCommonPrefix(input)).toBe(expected);
  });
});
