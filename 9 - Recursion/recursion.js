//! Basic Recursive Function

let i = 0;

const inception = () => {
  console.log(`i is: ${i}`);

  if (i > 3) return 'done'; // base case -- where recursion will stop

  i++;
  return inception(); // recursive case
};

console.log(inception());

//! Main Points
//                Base Case
//                Recursive case
//                Usually have 2 returns

//! Difference btw iterative and recursive

// iterative approach is O(n) - linear
// recursive approach is O(2^n)
// O(1) > O(log n) > O(n) > O(n logn) > O(n^2) > O(2^n)

// so recursive approach is worst against iterative approach -- but there is a tradeoff

/// Advantage to use recursion:
//                               It could make code cleaner - DRY (don't repeat urself)
//                               More Readabilty

/// Disadvantages
//                its time compexity could go upto O(2^n)
//                larger stack it will consume

///- They are still used in most of the trees and the structure that could become a tree
///- because of more readability
