//! Only difference btw stack and queue is
// Stack is LIFO and queue is FIFO

//  the way we push the data in both could be any way
//  in linked list, we could push data in head or in tail,
/// because linked list is scattered in the memory
//  head could not be actually at the top of tail

// so if we push 1,2,3 in BOTH (stacks and queue) in LINKED LIST
// it could be arranged in linked list as 3,2,1
// only the thing that matters is,
// we pushed 1,2,3

/// so in stacks, we will have to remove last data element (3) first,
/// even if it is arranged as 3,2,1 in linked list

/// and in queues, we will have to remove 1st data element (1) first,
/// even in the linked list, first data element is 3
/// 1 was pushed before 2 and 3, so 1 will be removed 1st

//! One Note
//  stacks could be implemented with linked list and arrays
// we have to work with last data element we push, so this is possible in BOTH

// queues could be implemented with linked list but shouldn't be with array
// working with 1st data element of array will take O(n)
