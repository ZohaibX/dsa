/// what we need to do ?
// build a singly linked list

/// what actions singly linked list will perform ?
// append , prepend , printAll , insert, remove

/// what we have in a singly linked list
// head , tail , value , next

class LinkedList {
  constructor(firstValue) {
    (this.head = {
      value: firstValue,
      next: null,
    }),
      (this.tail = this.head);
    this.length = 1;
  }

  // at last
  append(value) {
    const newNode = { value, next: null }; // it will be the last node
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // at start
  prepend(value) {
    const newNode = { value, next: this.head }; // this node will be the very starting node
    this.head = newNode;
    this.length++;
    return this;
  }

  // print all
  print() {
    let currentNode = this.head; // grabbing very 1st node
    const array = [];

    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  // insert anywhere
  insert(index, value) {
    // length starts from 1 and index start from 0 -- so used >=
    if (index >= this.length) return this.append(value);
    if (index === 0) return this.prepend(value);

    const newNode = { value, next: null };

    const leader = this.grabIndex(index - 1); // if the index is 1, then we have to start setting with index 0
    const holdLeaderNext = leader.next;
    leader.next = newNode;
    newNode.next = holdLeaderNext;

    this.length++;

    return this.print();
  }

  // remove value
  remove(index) {
    const leader = this.grabIndex(index - 1); // we have to start setting by index-1
    leader.next = leader.next.next; // removing the node with (index)
    this.length--;

    return this.print();
  }

  grabIndex(index) {
    let currentNode = this.head; // this is for i=0

    for (let i = 1; i <= index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}

const myLinkedList = new LinkedList(3);
myLinkedList.append(5);
myLinkedList.prepend(2);

myLinkedList.insert(3, 55);
myLinkedList.insert(0, 11);

myLinkedList.insert(1, 1);

myLinkedList.remove(2);
console.log(myLinkedList.print());
