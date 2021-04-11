const boxes = [1, 2, 3, 4, 5];

for (i = 0; i < boxes.length; i++) {
  console.log(`normal for loop: ${boxes[i]}`);
}

boxes.forEach((box) => {
  console.log(`for each loop: ${box}`);
});

for (let box of boxes) {
  console.log(`for of loop: ${box}`);
}
