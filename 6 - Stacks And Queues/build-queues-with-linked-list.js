//! What are we supposed to do ?
// build a queue data structure

//! how we are supposed to build a queue
// we could build a stack with arrays or linked list
// as we have to make certain operations on the 1st data item in queue,
/// but arrays shouldn't be used with queues because we have to set 1st data element and with arrays, we will have to set indexes

//! What we have in queues
// top plate/data , botton plate/data

/// This is FIFO - First In First Out
// the value that is pushed 1st, will always be the 1st value of stack
// that value inserted first will be the head of linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
      return this;
    }
    this.tail.next = node;
    this.tail = node;

    this.length++;
    return this;
  }

  peek() {
    return this.head;
  }

  dequeue() {
    if (!this.head) return null;

    this.head = this.head.next;
    this.length--;

    if (this.length === 0) this.tail = null;
    return this;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue);

queue.dequeue();
// queue.dequeue();
// queue.dequeue();

console.log(queue);
console.log(`Top Node is: ${JSON.stringify(queue.peek())}`);
