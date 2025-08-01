const gcdOfStrings = require("./createCounter");

describe("gcdOfStrings", () => {
  test('returns "ABC" for "ABCABC" and "ABC"', () => {
    expect(gcdOfStrings("ABCABC", "ABC")).toBe("ABC");
  });

  test('returns "AB" for "ABABAB" and "ABAB"', () => {
    expect(gcdOfStrings("ABABAB", "ABAB")).toBe("AB");
  });

  test('returns "" for "LEET" and "CODE"', () => {
    expect(gcdOfStrings("LEET", "CODE")).toBe("");
  });

  test('returns "A" for "A" and "A"', () => {
    expect(gcdOfStrings("A", "A")).toBe("A");
  });

  test('returns "" for "ABAB" and "ABAC"', () => {
    expect(gcdOfStrings("ABAB", "ABAC")).toBe("");
  });

  test('returns "ABCDEF" for "ABCDEFABCDEF" and "ABCDEF"', () => {
    expect(gcdOfStrings("ABCDEFABCDEF", "ABCDEF")).toBe("ABCDEF");
  });

  test('returns "" for empty strings', () => {
    expect(gcdOfStrings("", "")).toBe("");
    expect(gcdOfStrings("A", "")).toBe("");
    expect(gcdOfStrings("", "A")).toBe("");
  });

  test('returns "AB" for "ABAB" and "AB"', () => {
    expect(gcdOfStrings("ABAB", "AB")).toBe("AB");
  });

  test('returns "" for non-matching patterns', () => {
    expect(gcdOfStrings("ABCDEF", "ABC")).toBe("");
  });

  test('returns "XYZ" for "XYZXYZXYZ" and "XYZXYZ"', () => {
    expect(gcdOfStrings("XYZXYZXYZ", "XYZXYZ")).toBe("XYZ");
  });
});
