//! Google Question
//! -------------------- Question --------------------
// we have a array
// and we need to find a pair numbers from array --
// if we get a pair in array -- return true else false

/// What we are provided with ?
// targetSum and an array

/// What to find ?
// pair of elements that their sum equals to be provided target

/// What to return ?
// true or false

/// Very first approach that comes into my mind
// for example i get an array of [1,2,3,4,5] and sum=8
const fn1 = (array, targetSum) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) return true;
    }
  }
  return false;
};

// const solution1 = fn1([1, 2, 3, 4, 5], 8);
// console.log(solution1);
// this approach is O(n^2), thats horrible, we need to find some other solution

/// 2nd approach could be -- use of hash tables, for searching
const fn2 = (array, sum) => {
  const map = {};

  let requiredNumber;

  for (i = 0; i < array.length; i++) {
    if (map[array[i]]) return true;
    requiredNumber = sum - array[i];
    map[requiredNumber] = true;
  }

  return false;
};

const solution2 = fn2([1, 2, 3, 4, 6], 8);
console.log(solution2);
// so this approach is -- O(n) much better than previous

//! Logic is :-
//* if the sum is 8 and array is [2,3,5,6]
//* loop-1 : array[0] = 2 , then it means we need number 6, to make 8 --> so we will save '6':true into object.
//* so whenever the next time in some loop --> we get number 6, we will get that from object
//* and will return true
