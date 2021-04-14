//! Google Question
//! Question
// Given an array of integers nums and an integer target, return indices of the two numbers
// such that they add up to target.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

/// You may assume that each input would have exactly one solution,
/// and you may not use the same element twice.
/// You can return the answer in any order.

/// 1st solution that comes into my mind, is nested loops
// for example i get an array of [1,2,3,4,5] and sum=8
const fn1 = (array, targetSum) => {
  let pairOfIndexes = [];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        pairOfIndexes.push(i);
        pairOfIndexes.push(j);
        return pairOfIndexes;
      }
    }
  }
  return false;
};

// const solution1 = fn1([1, 2, 3, 4, 5], 8);
// console.log(solution1);
// this approach is O(n^2), thats horrible, we need to find some other solution

/// as we are comparing here - we could use hash tables
const fn2 = (array, targetSum) => {
  const map = {};
  let pairOfIndexes = [];

  for (let i = 0; i < array.length; i++) {
    const requiredElement = targetSum - array[i];

    if (requiredElement in map) {
      pairOfIndexes.push(map[requiredElement]);
      pairOfIndexes.push(i);
    }
    map[array[i]] = i;
  }

  return pairOfIndexes.length ? pairOfIndexes : null;
};

const solution = fn2([1, 2, 3, 4, 5], 8);
console.log(solution);

//! logic
//* we have an object
//* in a for loop - if we get 5 as array[0], then the required is 4 - to make 9
//* so 5 will be stored in map object with its index as {5:0}
//* next time if we get 4 as array[1], then we will see if this 4 is available in map object
//* we have index of 4 as array[1] and we will get index of 5 from mapObject
