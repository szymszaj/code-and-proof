const longestCommonPrefix = require("./longestCommonPrefix");

describe("longestCommonPrefix", () => {
  test("returns the longest common prefix for a typical case", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });

  test("returns empty string when there is no common prefix", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });

  test("returns the word itself when array has one string", () => {
    expect(longestCommonPrefix(["single"])).toBe("single");
  });

  test("returns empty string for empty array", () => {
    expect(longestCommonPrefix([])).toBe("");
  });

  test("returns empty string when one of the strings is empty", () => {
    expect(longestCommonPrefix(["", "b", "c"])).toBe("");
  });

  test("returns the full string when all strings are identical", () => {
    expect(longestCommonPrefix(["same", "same", "same"])).toBe("same");
  });

  test("returns correct prefix when prefix is a full string of one element", () => {
    expect(longestCommonPrefix(["abc", "ab", "a"])).toBe("a");
  });

  test("returns empty string when no strings share a prefix", () => {
    expect(longestCommonPrefix(["a", "b", "c"])).toBe("");
  });

  test("handles array with empty string and non-empty strings", () => {
    expect(longestCommonPrefix(["", "abc"])).toBe("");
  });

  test("handles array with all empty strings", () => {
    expect(longestCommonPrefix(["", "", ""])).toBe("");
  });
});
