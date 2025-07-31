const isValid = require("../testCode/isValid");

describe("isValid", () => {
  test('returns true for "()[]{}"', () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  test('returns false for "(]"', () => {
    expect(isValid("(]")).toBe(false);
  });

  test('returns true for "([{}])"', () => {
    expect(isValid("([{}])")).toBe(true);
  });

  test('returns false for "([)]"', () => {
    expect(isValid("([)]")).toBe(false);
  });

  test('returns false for "("', () => {
    expect(isValid("(")).toBe(false);
  });

  test("returns true for empty string", () => {
    expect(isValid("")).toBe(true);
  });

  test('returns false for "((("', () => {
    expect(isValid("(((")).toBe(false);
  });

  test('returns false for "())"', () => {
    expect(isValid("())")).toBe(false);
  });

  test('returns true for "{[()]}"', () => {
    expect(isValid("{[()]}")).toBe(true);
  });

  test('returns false for "{[(])}"', () => {
    expect(isValid("{[(])}")).toBe(false);
  });
});
