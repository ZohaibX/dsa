// ---------------------- Question ----------------------

// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
// should return false.

//! ---------------------- Question ----------------------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

//! ---------------------- Answer ----------------------

// return true or false
// confirm if we have 2 parameters -- as arrays

const array1 = ['a', 1, null, 'c', 'x', []];
const array2 = ['z', 'y', 2, 'j', 1];

/// First Solution
const findMatchingElements = (array1, array2) => {
  for (i = 0; i < array1.length; i++) {
    for (j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) return true;
    }
  }
  return false;
};

// findMatchingElements(array1, array2);
// O(n^2) - Time Complexity
// O(1) - Space Complexity

/// Second Solution
const findMatchingElements1 = (array1, array2) => {
  // run a loop to make this array1 into object
  let map = {};
  for (i = 0; i < array1.length; i++) {
    if (!map[array1[i]]) map[array1[i]] = true;
  }

  // run a loop to match array2 value from object
  for (j = 0; j < array2.length; j++) {
    if (map[array2[j]]) return true; // it means if map[anyArray2Element] exist
  }

  return false;
};

// findMatchingElements1(array1, array2);
// O(a+b) - Time Complexity -- better than previous method
// O(a) -- Space Complexity -- bad than previous method

/// Third Solution -- More Readable
const findMatchingElements2 = (array1, array2) =>
  array1.some((item) => array2.includes(item));
// some() is specially for the case in js when we want to return true if any of the element in arr1 is matched to some element in arr2

// findMatchingElements2(array1, array2);
