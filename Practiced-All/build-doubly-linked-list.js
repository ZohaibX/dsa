/// what we need to do ?
// build a doubly linked list

/// what actions doubly linked list will perform ?
// append , prepend , printAll , insert, remove

/// what we have in a doubly linked list
// head , tail , value , next , previous

class DoublyLinkedList {
  constructor(firstValue) {
    (this.head = {
      value: firstValue,
      previous: null,
      next: null,
    }),
      (this.tail = this.head);
    this.length = 1;
  }

  // at last
  append(value) {
    const newNode = { value, previous: this.tail, next: null };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  // at start
  prepend(value) {
    const newNode = { value, previous: null, next: this.head };
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;

    return this;
  }

  // print all
  print() {
    let array = [];
    let currentNode = this.head;

    // lets use for loop here, we've used while loop in singly
    for (let i = 0; i < this.length && currentNode; i++) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  // insert anywhere
  insert(index, value) {
    if (index >= this.length) return this.append(value);
    if (index === 0) return this.prepend(value);

    const newNode = { value, previous: null, next: null };

    const grabbedLeader = this.grabLeader(index - 1); // we have to start setting by index-1
    const grabbedLeaderNext = grabbedLeader.next; // holding grabbed leader's next - because we have to place a new node in his index

    grabbedLeader.next = newNode;
    newNode.next = grabbedLeaderNext;
    newNode.previous = grabbedLeader;
    grabbedLeaderNext.previous = newNode;

    this.length++;
    return this.print();
  }

  // remove
  remove(index) {
    const grabbedLeader = this.grabLeader(index - 1); // we have to start setting by index - 1
    const grabbedLeaderNextNext = grabbedLeader.next.next;
    grabbedLeader.next = grabbedLeaderNextNext; // we are re-assigning (index) with index's next element
    grabbedLeaderNextNext.previous = grabbedLeader;

    return this.print();
  }

  grabLeader(index) {
    /// let's do a task
    // in singly linked list - we went from head to index
    // here we will go from tail to index

    let currentNode = this.tail; // this is for i= this.length-1

    for (let i = this.length - 2; i >= index; i--) {
      // this.length - 2 because
      // * length starts from 0 and this.length from 1 , so we have to do this.length-1
      // * as i=this.length-1 is already occupied by currentNode, so we will do - this.length-2
      currentNode = currentNode.previous;
    }
    return currentNode;
  }
}

const myLinkedList = new DoublyLinkedList(5);
console.log('\nappending and prepending elements\n');
myLinkedList.prepend(0);
myLinkedList.append(10);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.insert(0, 1);
myLinkedList.insert(4, 2);

console.log(myLinkedList.print());

console.log('\ninserting random elements: on 3 and 5 \n');
myLinkedList.insert(3, 122);
myLinkedList.insert(5, 122);
console.log(myLinkedList.print());

console.log('\nremoving random elements - 5: \n');
myLinkedList.remove(5);
console.log(myLinkedList.print());
