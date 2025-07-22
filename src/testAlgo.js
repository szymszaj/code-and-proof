function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

function findMax(arr) {
  if (arr.length === 0) return undefined;

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

if (require.main === module) {
  console.log("Silnia z 5:", factorial(5));

  console.log("17 jest liczbą pierwszą:", isPrime(17));
}
