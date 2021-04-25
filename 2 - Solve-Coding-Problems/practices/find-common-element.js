//! Google Question
//! Question
// 2 arrays and find a common element

/// what are we provided with
// 2 arrays

/// what we need to find
// a common element

/// what we need to return
// that common element/elements

/// array could be any type - string/int or anything

/// very first solution that comes into my mind
// for example - 2 arrays are [1,2,3,4,5] , [6,2,3,7]
const fn1 = (array1, array2) => {
  let commonElements = [];

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) commonElements.push(array1[i]);
    }
  }
  return commonElements.length ? commonElements : false;
};

//* const solution = fn1([1, 2, 3, 4, 5], [6, 2, 3, 7]);
//* console.log(solution); // [2,3]
//* O(n^2) -- naah! -- find another way

/// 2nd Solution could be with hash tables , when we want to search
const fn2 = (array1, array2) => {
  const map = {};

  // let's use while loop here
  let i = 0;
  while (i < array1.length) {
    map[array1[i]] = true;
    i++;
  }

  let j = 0;
  let commonElements = [];
  while (j < array2.length) {
    if (array2[j] in map) commonElements.push(array2[j]);
    j++;
  }

  // console.log(map);
  return commonElements.length ? commonElements : false;
};

//* const solution1 = fn2([1, 2, 3, 4, 5], [6, 2, 3, 7, 5, 1]);
//* console.log(solution1); // [ 2, 3, 5, 1 ]

/// More Readable Form
const fn3 = (array1, array2) => array1.some((item) => array2.includes(item));
// this will return true or false only

//* const solution3 = fn3([1, 2, 3, 4, 5], [6, 2, 3, 7, 5, 1]);
//* console.log(solution3);

/// this is a tradeoff btw time , space or readability
