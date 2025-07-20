function reverseString(str) {
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

module.exports = { reverseString, isPalindrome, removeDuplicates };
