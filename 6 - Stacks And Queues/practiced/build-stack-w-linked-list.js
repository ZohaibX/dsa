//! What to do ?
// hmm, build a stack

//! how are we supposed to build this ?
// thru linked list .

//! what things we normally have in stacks and linked list ?
// stack is LIFO - push, pop and peek only and a NODE , head, tail, length in linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // im setting push data to the HEAD, so i can see the LAST pushed data on the HEAD,
      // so when we remove that last data item, we can see that being removed
      const holdTop = this.head;
      this.head = node;
      node.next = holdTop;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null;
    this.head = this.head.next;
    this.length--;

    if (!this.head) this.tail = null;
    return this;
  }

  peek() {
    return this.head;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(3);
stack.push(5);

console.log(stack);

// stack.pop();
// stack.pop();
stack.pop();
// console.log(stack);

console.log(stack.peek());
