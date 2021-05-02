//! What to do ?
// hmm, build a queue

//! how are we supposed to build this ?
// thru linked list .
/// we should only build this with linked list and not with array --
/// removing 1st item from an array is O(n)

//! what things we normally have in queues and linked list ?
// stack is LIFO - enqueue , dequeue and peek only and a NODE , head, tail, length in linked list

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // its like pushing -- at the first
  enqueue(value) {
    const node = { value, next: null };

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // im setting pushed data into the TAIL, so i can see very 1ST pushed data item on HEAD,
      // so when we remove 1st item, we can see it being removed
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  dequeue() {
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

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);

queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// console.log(queue);

console.log(queue.peek());
