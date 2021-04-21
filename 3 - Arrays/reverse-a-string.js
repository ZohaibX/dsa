function reverse1(str) {
  // first check if input is a string
  if (typeof str !== 'string' || str.length < 2 || !str)
    return 'Something is not good';

  const reversed = [];
  const lengthOfArray = str.length - 1;

  for (let i = lengthOfArray; i >= 0; i--) {
    reversed.push(str[i]);
  }
  // console.log(reversed); ['b', 'i', 'a', 'h', 'o',  'Z', ' ', 's', 'I', ' ',  'e', 'm', 'a', 'N', ' ',  'y', 'M']

  return reversed.join(''); //! 'biahoZ sI emaN yM'
}

/// More Readable
function reverse2(str) {
  return str.split('').reverse().join('');
}
//! "123".split('')     // (3) ["1", "2", "3"]
//! [..."123"]          // (3) ["1", "2", "3"]
// string is like array of characters -- and spread operator will open that array and spread all characters
// -- so ..."123" means "1","2","3"

/// More Readable
const reverse3 = (str) => [...str].reverse().join('');

const solution = reverse3('My Name Is Zohaib');
console.log(solution);
