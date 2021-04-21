//! Introducing Classes
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//! creating a linked list
class LinkedList {
  constructor(value) {
    // constructor is all about setting 1st values
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head; // we have only head for now , so that is a tail too
    this.length = 1;
  }

  // set this value at the end of linked list
  append(value) {
    /// what we need to do ?
    //  we need to set this value at the end -- tail is the end though
    const newNode = new Node(value);
    // this becomes const newNode = { value, next: null };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // set the value at the start of the linked list
  prepend(value) {
    /// what we need to do?
    //  add value to the start -- head is the start though
    this.head = { value, next: this.head };
    this.length++;
    return this;
  }

  // wanna print all the values as [ value1 , value2 ... ]
  printList() {
    let item = this.head; // grabbing 1st item
    const array = [];

    while (item) {
      array.push(item.value);
      item = item.next;
    }

    console.log(array);
    return array;
  }

  // insert value at some given index
  insert(index, value) {
    /// what we need to do ?
    //  insert at any index -- this will require looping

    // length starts from 1 and index start from 0 -- so used >=
    if (index >= this.length) return this.append(value);

    const newNode = { value, next: null };

    const leader = this.traverseToIndex(index - 1); // grabbing the leader node

    const leaderNext = leader.next; // holding leader's next node, because we have to move it after the newNode we will insert
    leader.next = newNode; // placing newNode to leader.next
    newNode.next = leaderNext; // placing the holding leader's next node after the new node
    this.length++;
    return this;
  }

  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;

    // this while loop will run until currentNode is equal to the specific node at index
    // currentNode will be equal to leader node
    while (counter !== index) {
      if (!currentNode.next) break;
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    let leader = this.traverseToIndex(index - 1); // grabbing the leader node
    let unwantedNode = leader.next; // we have to remove the leader's next node
    leader.next = unwantedNode.next; // so we will set unwanted node's next item at unwanted node's place
    this.length--;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);

myLinkedList.insert(65, 52);
// myLinkedList.insert(0, 52);
myLinkedList.insert(2, 72);

myLinkedList.printList();
myLinkedList.remove(3);
myLinkedList.printList();

//! Logic of inserting
// linkedList = [1,2,3,4,5,6,7,8] => 2 --> 3 --> 4
// we want to insert(2,35) => that should make [1,2,35,3,4,5,6,7,8]
// changes are happening with 2 , 35 , and 3
// 2 should point to 35  and 35 to 3
/// so 2 is a 1st item we need to change -- Leader
