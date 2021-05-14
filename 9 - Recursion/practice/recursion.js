/// Example
const recursion = (n) => {
  if (n > 5) return 'done'; // the condition we apply on iteration -- to break loop/recursion

  return recursion(n + 1); // operation on the number will be performed here
};

//! we will work on the argument - we provide

const factorial = (n) => {
  if (n === 1) return 'Done Xd';

  return n * factorial(n - 1);
};

const fib = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(8));

// i was unable to figure logic with recursion
// but I made logic with loops by myself - atleast
// So, I am something ...
