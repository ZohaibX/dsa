//! Main Points

// inserting lookups delete and search are O(1) in hash tables
// lookups could be occasionally O(n)

let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function () {
    console.log('ahhhhhh!');
  },
};

user.age;
user.spell = 'abra kadabra';
user.scream();

// js built in hash tables, advanced than normal objects
/// Map --> can store keys and values, keys could be of any type as keys are converted to strings in normal objects , gives ordered data
/// Set --> only keys are stored and no duplicate keys
