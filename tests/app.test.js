const { reverseString, isPalindrome, removeDuplicates } = require("../src/app");

describe("reverseString", () => {
  test("reverses a regular string", () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test("reverses an empty string", () => {
    expect(reverseString("")).toBe("");
  });

  test("reverses a string with spaces", () => {
    expect(reverseString("abc def")).toBe("fed cba");
  });
});

describe("isPalindrome", () => {
  test("returns true for a palindrome", () => {
    expect(isPalindrome("madam")).toBe(true);
  });

  test("returns false for a non-palindrome", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  test("ignores case and non-alphanumeric characters", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  test("returns true for an empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });
});

describe("removeDuplicates", () => {
  test("removes duplicates from an array", () => {
    expect(removeDuplicates([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  test("returns the same array if no duplicates", () => {
    expect(removeDuplicates([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("works with empty array", () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  test("works with array of strings", () => {
    expect(removeDuplicates(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
  });
});
