//! Question
// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

/// What are we provided with ?
// an array

/// what do we need to find ?
// find an sub-array from actual array, containing numbers making highest sum

/// what we want to return ?
// return highest sum

/// assume - array will always be integers array

const fn = (array) => {
  let sum = 0;
  let result = Number.MIN_SAFE_INTEGER; // minimum value

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    result = Math.max(sum, result); // will keep the maximum one
    sum = sum < 0 ? 0 : sum;
  }

  return result;
};

const solution = fn([-5, 2, 1, -5, 2, 2, -5]);
console.log(solution);

//! Logic
// we need to find array of numbers that make highest sum

// result = minimum safe integer
// if array is [-2,1,-3,4,-1,2,1,-5,4]

// loop 1 - sum =  -2       , result = -2                     , sum = 0
// loop 2 - sum =  0+1 =  1 , result = Math.max( 1 , -2) =  1 , sum = 1
// loop 3 - sum =  1-3 = -2 , result = Math.max(-2 , -1) = -1 , sum = 0
// loop 4 - sum =  0+4 =  4 , result = Math.max( 4 , -1) =  4 , sum = 4
// loop 5 - sum =  4-1 =  3 , result = Math.max( 3 ,  4) =  4 , sum = 3
// loop 6 - sum =  3+2 =  5 , result = Math.max( 5 ,  4) =  5 , sum = 5
// loop 7 - sum =  5+1 =  6 , result = Math.max( 6 ,  5) =  6 , sum = 6
// loop 8 - sum =  6-5 =  1 , result = Math.max( 1 ,  6) =  6 , sum = 1
// loop 9 - sum =  1+4 =  5 , result = Math.max( 5 ,  6) =  6 , sum = 5

// so result is 6 and the array that made this highest addition is [4,-1,2,1]
