function twoSumSorted(numbers, target) {
  let left = 0;
  let right = numbers.lenght - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

console.log(twoSumSorted([2, 7, 11, 15], 9));
console.log(twoSumSorted([1, 2, 3, 4, 4, 9, 56, 90], 8));
