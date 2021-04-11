// Log All Pairs of array
// like 1,2 1,3 1,4 and so on

const boxes = [1, 2, 3, 4, 5];

// n means boxes here
for (i = 0; i < boxes.length; i++) {
  // O(n)
  for (j = 0; j < boxes.length; j++) {
    // O(n)
    console.log('Box Pair Is: ', boxes[i], boxes[j]);
  }
}

// for a loop -- based on some input -- BigO is O(n)
// for a nested loop, we use *
// so here ---------------------------- O(n*n) -> O(n^2)

// for 2 elements, we will be having 4 operations
// for 3 - 9 operations
// it is called Quadratic Time

// same as for loop
boxes.forEach((box1) => {
  boxes.forEach((box2) => {
    console.log('Box Pair Is: ', box1, box2);
  });
});
