//! -------------------- Question --------------------
// we have a array
// and we need to find a pair numbers from array --
// if we get a pair in array -- return true else false

/// Naive Approach
const findPair = (array, sum) => {
  for (i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === sum) return true;
    }
  }
  return false;
};
// this is how - 1 will be compared to 2,3,9
// 2 with 3,9
// 3 with 9

// O(n^2) for time complexity
// O(1) for space

// findPair([1, 2, 3, 9], 8);

/// Better Approach
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

const solution = hasPairWithSum2([1, 2, 4, 6], 8);
console.log(solution);

//! Logic
// we need a pair of numbers that will make 8
// for example we encounter a number which is 3
// it means we need 5 more (8-3), to make 8
// so we will save 5 in Set and whenever we encounter 5 from array
// we will see Set if it has 5 -- so it will be true

//! Set
const myTestSet = new Set();
myTestSet.add(1); // Set [1]
myTestSet.add('a'); // Set [1 , "a"]

myTestSet.has(1); // true
// wo could add any type of values in Set
