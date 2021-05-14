// bubble sort is ,
// 1st number will be compared to everyone - and then, it will be replaced with the greater one, and greater one will go to last position

// 6 5 3 1 7 8  2 4

// 6 will be compared to everyone, when it will meet 8, then 8 will start getting compared with others -- and 8 will go to last
// 5 will be compared to everyone, when it will meet 7 , 7 will go to last until it meet 8, as 8 is last number, 7 will be fixed before 8

const sort = (array) => {
  for (let i = 0; i <= array.length - 1; i++) {
    for (let j = 0; j <= array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
        console.log(array);
      }
    }
  }
  return array;
};
// j loop will sort array the way it could
// i loop will restart sorting

console.log(sort([6, 54, 33, 1, 74, 82, 23, 44]));
