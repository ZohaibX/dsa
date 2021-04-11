// Merge two sorted arrays in to one SORTED array

//! Logic of while loop

function mergeSortedArrays(array1, array2) {
  if (array1.length === 0) return array2;
  if (array2.length === 0) return array1;

  const mergedArray = [];

  let array1Item = array1[0];
  let array2Item = array2[0];

  let i = 1; // 1st item of array 1 is already saved in variable
  let j = 1; // 1st item of array 2 is already saved in variable

  while (array1Item || array2Item) {
    // while there is any of the element in any of the array
    if (array2Item === undefined || array1Item < array2Item) {
      // if array2's item is finished or undefined || array2's Item is larger
      mergedArray.push(array1Item);
      array1Item = array1[i]; // assign next array element to temporary variable
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

const solution = mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);
console.log(solution);

//! Logic
//* push array-1 item into mergedArray if Array-2 item is undefined or larger
//* vice versa for array2
