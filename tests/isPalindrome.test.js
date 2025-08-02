const isPalindrome = require("../testCode/isPalindrome");

describe("isPalindrome", () => {
  test("returns true for a classic palindrome with punctuation and spaces", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  test("returns false for a non-palindrome string", () => {
    expect(isPalindrome("race a car")).toBe(false);
  });

  test("returns true for an empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  test("returns true for a single character", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  test("returns true for a palindrome with mixed case", () => {
    expect(isPalindrome("Madam")).toBe(true);
  });

  test("returns true for a palindrome with numbers and symbols", () => {
    expect(isPalindrome("1@2#2@1")).toBe(true);
  });

  test("returns false for a string with only non-palindromic numbers", () => {
    expect(isPalindrome("12345")).toBe(false);
  });

  test("returns true for a string with only non-alphanumeric characters", () => {
    expect(isPalindrome("!!!")).toBe(true);
  });
});
