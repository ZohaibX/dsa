// ficonacci series 0,1,1,2,3,5,8,13,21,34 and so on
// number is the addition of its two previous numbers sum

// a number will be provided on the argument
// and we will return the fib value on the number/index

//! Iterative
const iterativeFibonacci = (n) => {
  let number1 = 0; // i=0
  let number2 = 1; // i=1

  for (i = 2; i <= n; i++) {
    let number3 = number1 + number2;
    number1 = number2;
    number2 = number3;
  }

  return number2;
};

//! Recursive
/// its graph is in the same folder
const recursiveFibonacci = (n) => {
  // O(2^n)
  if (n < 2) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

///- I can see the difference in both of speeds

console.log('iterative: ', iterativeFibonacci(40));
console.log('recursive: ', recursiveFibonacci(40));
