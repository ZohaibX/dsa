//! What are we supposed to do ?
// build a stack data structure

//! how we are supposed to build a stack
// we could build a stack with arrays or linked list
// as we have to make certain operations on the last data item in stacks, so arrays and linked lists both are fine for the task

//! What we have in stacks
// top plate/data , botton plate/data

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.length) {
      (this.top = newNode), (this.bottom = newNode);
    } else {
      const holdTop = this.top;
      this.top = newNode;
      this.top.next = holdTop;
    }
    this.length++;
    return this;
  }

  pop() {
    // top is a full linked list , not a single node -- keep in mind -- it's a head of it's own linked list
    if (!this.top) return null;

    this.top = this.top.next;
    this.length--;

    if (this.length === 0) this.bottom = null;
    return this;
  }
}

const myStack = new Stack();

myStack.push(10);
myStack.push(3);
console.log(myStack.push(5));
console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());

//Discord
//Udemy
//google
