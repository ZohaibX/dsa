//! Google Question

// Given an array of integers nums and an integer target, return indices of the two numbers
// such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

const getPair = (array, target) => {
  const map = {};

  for (i = 0; i < array.length; i++) {
    const required = target - array[i];

    if (required in map) {
      return [map[required], i];
    }

    map[array[i]] = i;
  }

  return null;
};

const solution = getPair([2, 7, 11, 15], 9);
console.log('solution is: ', solution);

//! logic
//* we have an object
//* in a for loop - if we get 5 as array[0], then the required is 4 - to make 9
//* so 5 will be stored in map object with its index as {5:0}
//* next time if we get 4 as array[1], then we will see if this 4 is available in map object
//* we have index of 4 as array[1] and we will get index of 5 from mapObject
