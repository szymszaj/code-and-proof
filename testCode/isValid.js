function isValid(s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let char of s) {
    if (map[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0 || map[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([{}])"));

module.exports = isValid;
