// Singly-list is normal linked list

// this is how sll will look like
const sll = {
  head: {
    value: 'node-1',
    next: {
      value: 'node-2',
      next: {
        value: 'node-3',
        next: null,
      },
    },
  },
};

// doubly linked list is not that different than singly-linked-list
// it is all about handling an extra pointer, which is previous

// this is how dll will look like
let dll = {
  head: {
    value: 'node-1',
    previous: null,
    next: {
      value: 'node-2',
      previous: {
        value: 'node-1',
        previous: null,
        next: [Object],
      },
      next: {
        value: 'node-3',
        previous: {
          value: 'node-2',
          previous: [Object],
          next: [Object],
        },
        next: null,
      },
    },
  },
};

//! Difference btw both

// dll takes too much memory because of the extra property
// in dll, we can go from head to tail and tail to head,

// in sll, we can only go from head to tail
// and it is smaller in memory , so takes less operations
