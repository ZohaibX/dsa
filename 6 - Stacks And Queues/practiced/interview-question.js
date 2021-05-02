///-                             Interview Question

//! Build Queue Using Stack

/// what is the plan
// we have to build a queue using a stack
// we will build stack using array
// and we will make a function to remove very 1st item of array as we do in queues

class Queue {
  constructor() {
    this.firstArray = [];
    this.secondArray = [];
  }

  push(value) {
    // we will push in second array
    const length = this.firstArray.length;
    // we have to save length here, because in loop, array's length will keep decreasing due to pop()

    for (let i = 0; i < length; i++) {
      this.secondArray.push(this.firstArray.pop());
    }
    this.secondArray.push(value);
    return this;
  }

  pop() {
    const length = this.secondArray.length;
    // we have to save length here, because in loop, array's length will keep decreasing due to pop()

    for (let i = 0; i < length; i++) {
      this.firstArray.push(this.secondArray.pop());
    }
    this.firstArray.pop();

    return this;
  }

  peek() {
    // we have to return the data element that was pushed very 1st
    if (this.secondArray.length) return this.secondArray[0];

    return this.firstArray[this.firstArray.length - 1];
  }
}

const queue = new Queue();

queue.push(1);
queue.push(2);
queue.push(3);

queue.pop();
// queue.pop();

// queue.push(2);
// queue.push(1);

console.log(queue);

console.log(queue.peek());

//!      -------------------      IDEA      ------------------------
// queues are to build with stack
// and stack are to build with array
// main difference btw both is , stack is LIFO and queue is FIFO
// we will push data in the array , as same way in both ds
// but in queues, we can remove very 1st index and in stacks , we can remove only last index

//! Now
// we have to push data, at the end of array -- which is normal for both ds
// we have to remove data, from the ENDDD of array -- which is not right for queues

/// So idea is ,

//! 1:-
// when we will push data, we will do it normally on one array

//! 2:-
// when we will have to remove very 1st index,
// we will reverse array-1 to another array-2, and will make array-1 empty
// so very 1st item in array-1, will be the last item in array-2, so we could easily remove that last item

//! 3:-
// and, when we push data again , we can't push in array-2, which is reversed
// and we can't push in array-1, which is empty
// so we will reverse array-2 into array-1 and will make array-2 empty
// array-1 will be back to its original form, except the data element we removed
// now, we can push the data at the very end

//! So that's what we can do to build queues using stacks
