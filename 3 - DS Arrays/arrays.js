const arr = ['a', 'b', 'c', 'd', 'e'];

//! Main Point
// lookups , push and pop in array are O(1)
// deleting and unshifting is O(n)

/// Lookups
const lookUp = arr[2]; // O(1) Time

/// Push -- insert
const push = arr.push({ a: [1, 2, 3] }); //! O(1) Time
// push element to the last - simple

/// Pop -- will remove the last item
const pop = arr.pop(); //! O(1) Time
// remove element from the last

/// Unshift -- will add element at very 1st
const unshift = arr.unshift('x'); //! O(n) Time
// this function is not just adding item at the very start of the array
// but it will also set the index of every element of array
// this depends on how long the array is . so O(n)

/// Splice -- will add element anywhere in the array
const splice = arr.splice(2, 0, { a: 'b' }); //! O(n/2) -> O(n) Time
// at index 2, deleting 0 item next and adding {a:'b'} at index 2
// this function will have to set the indexes of all items -- next to index 2
// so for this array, function will have to set the indexes of 2nd half of the items
// that makes O(n/2) -> O(n)
