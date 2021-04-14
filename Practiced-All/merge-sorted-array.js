//! Question
// Merge two sorted arrays in to one SORTED array

/// What we are provided with ?
// 2 sorted arrays

/// what we need to find and return ?
// one sorted array after merging provided arrays

/// can we assume that provided arrays are integer arrays
// if yes - then fine
// otherwise we will use if statements to check, if arrays are int arrays

const fn = (array1, array2) => {
  // if array1 has no element , then array2 is a merged array
  if (!array1.length) return array2;

  // if array2 has no element , then array1 is a merged array
  if (!array2.length) return array1;

  // we can grab 1st 1st elements of both arrays at 1st
  let array1item = array1[0];
  let array2item = array2[0];

  let i = (j = 1);
  let mergedArray = [];

  // we will keep ++ array1item and array2item , and there will be time when both of these will be undef
  // suppose , 2 arrays are [1,2,3] [3,5]
  while (array1item || array2item) {
    if (!array2item || array1item < array2item) {
      // array2item could be undefined after being going into else section and after being ++
      mergedArray.push(array1item);
      array1item = array1[i];
      i++;
    } else {
      // it could not be else if, because if we use -- else if(array2item < array1item) --
      // same elements will go nowhere, which are like -- array2item === array1item --
      // but they can go in else section
      mergedArray.push(array2item);
      array2item = array2[j];
      j++;
    }
  }
  return mergedArray;
};

const solution = fn([1, 2, 3], [3, 5]);
console.log(solution);
