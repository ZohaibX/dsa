//! Arrays                                    vs                     Hash Tables

// searching is O(n) because we have to                              searching is O(1)
// go on a loop

// lookup is O(1)                                                    lookup is O(1)

// push is O(1) -- at the end of array

// inserting an element is O(n)                                      inserting is 0(1) because no need
// because we have to shift the indexes                              to shift keys here

// deleting is same like inserting                                   deleting is same like inserting

/// Although Hash tables are faster thats y they are used in databases too

//! one con of hash tables is -- data is not in order, it fits randomly on memory
//! sometimes, it could allocate multiple object properties with same address
//! so it could become O(n) for searching

//! so object[key] is slower than array[index]
