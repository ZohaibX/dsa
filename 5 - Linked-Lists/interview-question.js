//! most common interview question for linked lists

// reverse a linked list

/// which linked list to use ?
// singly

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

  reverse() {
    /// we have to change head , tail , next references // we wanna reverse a singly linked list
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head; // as 1st value will be last later
    let second = first.next;

    while (second) {
      const third = second.next;
      second.next = first;
      first = second;
      second = third;
    }

    this.head.next = null; // this.head has gone to the end of linked list now, so, it's next should be null
    this.head = first; // first is the very first node, which was the last node prevoius. so we assign this to head
    return this.print();
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

const reverse = myLinkedList.reverse();
console.log('Reversed: ', myLinkedList.print());

// for example the linked list is
/// Important Information
// every node is a linkedList in itselt , node-3 is a full linked list except 1st 2 nodes

/*
const linkedList = {
  value: "node-1" , first
  next : {
    value: "node-2" , second
    next : {
      value: "node-3" , third
      next : {
        value: "node-4" , fourth
        next : {
          value: "node-5" , fifth
          next : null 
        }
      }
    }
  }
}

//! Reversing explaination

loop 1: first = node-1  , second = node-2 
    third = second.next = node-3
    second.next = first => node-2.next = node-1 // 2 points to 1 & 1 is a full linked list though
    first = second = node-2
    second = node-3
    // here, first = node-2 is a head and it points to node-1 only, where node-1 is a node itself starting from node-1 to node-4

Loop 2: first = node-2  , second = node-3
    third = second.next = node-3.next = node-4
    second.next = first => node-3.next = node-2
    first = node-3
    second = node-4    
    // now first = node-3 is a head and it points to node-2 from this loop, 
    // and node-2 points to node-1 from previous loop 

Loop 3: first = node-3  , second = node-4 
    third = second.next = node-4.next = node-5 
    second.next = first => node-4.next = node-3 
    first = node-4 
    second = node-5 
    // now first = node-4 is a head, points to node-3 from this loop  
    // and node-3 points to node-2 from previous loop
    // and node-2 points to node-1 from previous's previous loop

// this is how linked list will be reversed 
*/

//! Simple Logic
/*
grab 1st node and 2nd node 
save 2ndNode.next as a 3rdNode because we change it in next line
2ndNode.next = 1st node
increase 1stnode = secondNode , so nextTime, 1stNode will be next node
increase 2nd node to 3rd, that's y we saved 3rd -- next time, 2ndNode will be next node 
*/
