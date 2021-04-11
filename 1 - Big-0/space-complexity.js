const boo = (n) => {
  for (i = 0; i < n; i++) {
    console.log('Boo!');
  }
};

boo(5); // space complexity here is O(1)
// because we are only allocating space in i=0 , which is constant

const arrayOfHi = (n) => {
  const arrayOfHi = [];

  for (i = 0; i < n; i++) {
    arrayOfHi[i] = 'hi';
  }
  return arrayOfHi;
};

const data = arrayOfHi(8);
console.log(data); // here space complexity is O(n)
// because space is allocating according to the input -- linear time
