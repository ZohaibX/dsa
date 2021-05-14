const directApproach = (str) => {
  return str.split('').reverse().join('');
};

const iterative = (str) => {
  const array = [];
  for (let i = str.length - 1; i >= 0; i--) {
    array.push(str[i]);
  }
  return array.join('');
};

const recursive = (str) => {
  if (str === '') {
    return '';
  } else {
    return recursive(str.substr(1)) + str.charAt(0);
  }
};

// i was unable to figure logic with recursion
// but I made logic with loops by myself - atleast
// So, I am something ...
