//! Most common interview question

/// what we need to do ?
//  reverse a singly linked list

/// what actions we have to perform ?
//  handle head , tail and all the next references

class LinkedList {
  constructor(firstValue) {
    this.head = {
      value: firstValue,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // append
  append(value) {
    const newNode = { value, next: null };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  // prepend
  prepend(value) {
    const newNode = { value, next: this.head };
    this.head = newNode;
    this.length++;

    return this;
  }

  // print
  print() {
    let currentNode = this.head;
    const array = [];

    for (let i = 0; i < this.length && currentNode; i++) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  // insert
  insert(index, value) {
    const newNode = { value, next: null };
    if (index >= this.length) return this.append(value);
    if (index === 0) return this.prepend(value);

    const leader = this.grabLeader(index - 1);
    const leaderNext = leader.next;
    leader.next = newNode;
    newNode.next = leaderNext;
    this.length++;

    return this;
  }

  remove(index) {
    const leader = this.grabLeader(index - 1);
    leader.next = leader.next.next; // skipping the node with (index)
    this.length--;

    return this;
  }

  grabLeader(index) {
    let currentNode = this.head;
    if (index === 1) return currentNode;

    for (let i = 1; i <= index && currentNode; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  //! THIS IS ACTUAL QUESTION HERE
  /// ALL the logic is in -- '5 - Linked-Lists -> interview-question.js'
  reverse() {
    let first = this.head;
    this.tail = this.head; // whatever this.head is, it will go to the end
    let second = first.next;

    while (second) {
      let third = second.next;
      second.next = first;
      first = second;
      second = third;
    }

    this.head.next = null;
    this.head = first;

    return this;
  }
}

const myLinkedList = new LinkedList(3);

myLinkedList.append(5);
myLinkedList.prepend(2);

myLinkedList.insert(3, 10);
myLinkedList.insert(0, 10);
myLinkedList.insert(1, 10);

myLinkedList.remove(4);

console.log(myLinkedList.print());

myLinkedList.reverse();
console.log(myLinkedList.print());
