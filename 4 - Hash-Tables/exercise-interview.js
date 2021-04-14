/// Google Question

// an array is given and we need to return the very first recurring character .
// 1st recurring character means which element got its second 1st

// example array = [2,5,1,2,3,5,1,2,4]
// it should return 2 // bcz 2 is the element whose pair found first

// example array = [2,1,1,2,3,5,1,2,4]
// it should return 1 // bcz 1 is the element whose pair found 1st in this return

/// what should we return when no element is found
// undefined

/// if we wanna solve it without thinking much -- solving it with arrays
const fn2 = (array) => {
  let outputArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = outputArray.find((item) => item === array[i]);
    if (element) return element;

    outputArray.push(array[i]);
  }
};
// const solution = fn2([2, 5, 3, 1, 5, 4]);
// console.log(solution);
// This solution is O(n^2)

/// very 1st method that comes into my mind - solving it with hash tables
//! MashaAllah did it by myself
const fn = (array) => {
  const mySet = new Set();

  for (let i = 0; i < array.length; i++) {
    if (mySet.has(array[i])) return array[i];

    mySet.add(array[i]);
  }
  return undefined;
};
/// using normal object
const fn3 = (array) => {
  const map = {};

  for (let i = 0; i < array.length; i++) {
    if (map[array[i]] !== undefined) return array[i];
    // we couldn't do -- if(map[array[i]]) here because array element could be 0
    // it will go to else statement then

    map[array[i]] = true;
  }
  return undefined;
};

const solution = fn3([2, 1, 2, 5, 3, 2, 4]);
console.log(solution);
