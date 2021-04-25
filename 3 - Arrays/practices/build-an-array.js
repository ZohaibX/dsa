//! Build an array

/// Although arrays are built in every language
/// but this is good if we know how to build a data structure

/// What do we need to do ?
// build a data structure -- array

/// array contains what ?
// indexes and their data

/// what methods we need to perform in that array
// get , add  , pop , delete

class MyArray {
  constructor() {
    this.index = 0; // it will be index of 1st element
    this.data = {};
  }

  // get by index
  get(index) {
    return this.data[index];
  }

  // add 1 item to the last
  push(item) {
    this.data[this.index] = item;
    this.index++;
    return this.data[this.index];
  }

  // remove 1 item from the last
  pop() {
    const item = this.data[this.index - 1]; // index was +1 when last item was pushed, so to grab last item , index has to be -1
    delete this.data[this.index - 1]; // we can't do -- delete item -- here, bcz we wanna delete property of actual object
    this.index--; // last item is deleted, so its index is removed
    return item;
  }

  // logic of deleting is in array.js
  delete(index) {
    const item = this.data[index];
    this.shiftIndexes(index);
  }

  shiftIndexes(index) {
    for (let i = index; i < this.index - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.index - 1];
    this.index--;
  }
  /// Logic - For Loop - Shift Indexes
  // ForExample --> this.data = {0:a , 1:b , 2:c , 3:d}
  //            --> when index 3 was pushed in this.data , this.index did ++ and became 4
  // in for loop -- if index=1 is provided in the argument
  // i=index => i=1 and i<this.index-1 => i<4-1 => i<3
  // when i = 1, this.data[1] = b , this.data[2] = c  =>  b = c
  // when i = 2, this.data[2] = c , this.data[3] = d  =>  c = d
  // so now this.data becomes {0:a , 1:c , 2:d , 3: undefined}
}

const array = new MyArray();

array.push('hello boss');
array.push('Yo');
array.push('whats up');

// array.pop('fuck');

array.delete(1);

console.log(array);
