// O(a+b)

const compressBoxesTwice = (boxes, boxes1) => {
  boxes.forEach((box) => {
    // O(n) -- where n is one input -- linear time
    console.log(box);
  });

  boxes1.forEach((box) => {
    // O(m) -- where m is another input -- linear time
    console.log(box);
  });
};

const boxes = [1];
const boxes1 = [2];

compressBoxesTwice(boxes, boxes1);

// O(n) + O(m) makes O(n+m) or O(a+b)
