//! What to do ?
// hmm, build a stack

//! how are we supposed to build this ?
// thru Array .

//! what things we normally have in stacks and array ?
// stack is LIFO - push, pop and peek only and array already have built in methods

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
stack.push(4);
stack.push(5);

console.log(stack);

stack.pop();
stack.pop();

console.log(stack);

console.log(stack.peek());
