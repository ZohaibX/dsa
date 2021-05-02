//! Implement Queue Using Stacks

/// Queue means we can apply some operations on the very 1st data element
/// FIFO
/// it means the first enter , will out first
//! it doesn't mean that every element we will push, be the first data element
//! if we push data element, it will go to the end of data structure, but if we wanna remove any item, it will be the 1st one

class CrazyQueue {
  constructor() {
    this.first = [];
    this.last = [];
  }

  enqueue(value) {
    const length = this.first.length;
    for (let i = 0; i < length; i++) {
      this.last.push(this.first.pop());
      // pop removes and return the last value of array
    }
    this.last.push(value);
    return this;
  }

  dequeue() {
    const length = this.last.length;
    for (let i = 0; i < length; i++) {
      this.first.push(this.last.pop());
    }
    this.first.pop();
    return this;
  }

  peek() {
    if (this.last.length > 0) {
      return this.last[0];
    }
    return this.first[this.first.length - 1];
  }
}

const myQueue = new CrazyQueue();
// myQueue.peek();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
// myQueue.peek();

console.log(myQueue);

myQueue.dequeue();
console.log(myQueue);

myQueue.enqueue('Zohaib');
console.log(myQueue);

// myQueue.dequeue();
// myQueue.dequeue();

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
