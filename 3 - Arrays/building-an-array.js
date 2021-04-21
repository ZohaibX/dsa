// Build a data structure array

class MyArray {
  constructor() {
    this.index = 0; // declaring an initial index
    this.data = {}; // data will be in the form of object
    // like { index0:data , index1:data , index2:data}
  }

  get(index) {
    return this.data[index];
  }

  // logic of push is in array.js
  push(item) {
    this.data[this.index] = item; // this index is allocated to an item
    this.index++;
    return this.data;
  }

  // logic of pop is in array.js
  pop() {
    const lastItem = this.data[this.index - 1]; // index was ++ while pushing the item, so to grab the item, we need to go back from ++
    delete this.data[this.index - 1];
    this.index--; // last item is removed -- so removed its index too
    return lastItem;
  }

  // logic of deleting is in array.js
  deleteByIndex(index) {
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

const arr = new MyArray();

arr.push('a');
arr.push(1);
arr.push({ a: 'hello' });
arr.push(null);
arr.push(undefined);

arr.pop();
arr.deleteByIndex(3);

console.log(arr); // MyArray {index , data}
