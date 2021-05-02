//! What are we supposed to do ?
// build a stack data structure

//! how we are supposed to build a stack
// we could build a stack with arrays or linked list
// as we have to make certain operations on the last data item in stacks, so arrays and linked lists both are fine for the task

//! What we have in stacks
// top plate/data , botton plate/data

class Stack {
  constructor() {
    this.array = [];
  }

  push(value) {
    return this.array.push(value);
  }

  pop() {
    return this.array.pop();
  }

  peek() {
    return this.array[this.array.length - 1];
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.pop();
stack.pop();

console.log(stack);

console.log(stack.peek());
