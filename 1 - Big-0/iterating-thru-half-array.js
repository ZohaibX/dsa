// Iterating Through Half Collection of array

const boxes = [1, 2, 3, 4, 5];

for (i = 0; i < Math.floor(boxes.length / 2); i++) {
  // O(n/2) -- where n is a total numbers
  console.log(i);
}

// O(n/2) comes to be O(n)
