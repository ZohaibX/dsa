//! Factorial -- with recursion and iteration

/// Iterative
const factorialWithIteration = (n) => {
  if (typeof n !== 'number') return 'Provide a Number Idiot !!';

  let factorial = 1;
  for (i = n; i >= 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
};

/// Recursive
const factorialWithRecursion = (n) => {
  if (n === 1) return 1;

  return n * factorialWithRecursion(n - 1);
};

console.log(factorialWithRecursion(5));
