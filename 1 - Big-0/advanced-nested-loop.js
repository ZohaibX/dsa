const fn = (numbers) => {
  console.log('These are the numbers: ');

  numbers.forEach((number) => {
    // O(n) -- where n is a number
    console.log(number);
  });

  console.log('There are the sums of pairs: ');
  numbers.forEach((number) => {
    numbers.forEach((number1) => {
      console.log(number + number1);
    });
  });
  // O(n^2)
};

fn([1, 2, 3, 4, 5]);

// so fn makes O(n + n^2)
// and we will only keep dominant ones
// in this case -- dominant one is n^2 -> so ---------------- O(n^2)

// if we are having O(x^2 + 3x + 100 + x)
// if we think x=5 then 100 is a dominant one
// but if we talk about scalability, x could also be 50 , 500 or could be anything
// so x^2 will be a dominant one --> O(x^2)
