//! TOPICS
//          Binary tree, BST with balanced trees, Heap and Trie

/*
Roots, parents , child , siblings 
levels = height 

       1
    2    3
  3        5
5            6

Level is 4 = height 


//!                               Binary Tree

Definition: Tree with only 0 or 2 childs on every node , not more than 2

              Full Binary Tree          Perfect Binary Tree
                    1                           1
                  /  \                         / \
                2     3                       2   3
                     / \                     / \ / \
                    4   5                   3  4 5  6

/// We will try to make a binary tree - a perfect binary tree

///- Calculation - for perfect binary tree

level 0: 2^0 = 1 node
level 1: 2^1 = 2 nodes
level 2: 2^2 = 4 nodes

no of nodes = 2^h - 1 =>> h = height = 3
no of nodes = 2^3 - 1 = 8-1 = 7 nodes total

log 100 = 2 =>> 10^2 = 100

/// Important Note
    This is O(log n). this is faster than O(n) and almost equal to O(1)

/// How are we gonna use - this 
    for example, finding a number in phonebook, we don't see all the contacts to find a number 
    we only go to specific starting letter and start finding in that names

///- Lookup() - o(log N)
///- insert() - o(log N)
///- delete() - o(log N)


//!                                    BST 

/// RULE 1: right children will be larger than node and left will be smaller
/// RULE 2: node can have upto 2 children 

                                        101
                                      /    \
                                    33      105
                                  /  \      / \
                                9     37  104   144

///- Loopup()
              if we have to find 104
              it will see 101 is greater or smaller than 104 => 104 > 101 => it will go right of 101
              it will see 105 is greater or smaller than 104 => 104 < 105 => will go left of 105
              and we get 104 there

///- Insert()
              insert 54
              it will go to left of 101
              right of 33 
              then it will see 37 there < 54
              it will go on the right of 37 
              there is nothing after 37 - so 54 will be placed on the right of 37

///- Delete()
              delete 33 
              it will go on the left of 101
              it will find 33 , it will remove 33 
              now 101 has to connect with one of 33's child
              it will connect with the right one -- which one is greater ==> 101 -> 37
              and that right one will connect to it's sibling ==> 101 -> 37 -> 9

              Example
                                  101
                                /
                              37
                            /
                          9
                          
/// Unbalanced BST 
                                      50
                                        \
                                         100
                                        /   \
                                      99     101
                                                \
                                                 102 and so on
This type of BST becomes a kind of linked list 
///- and all of it's operations become O(n) as it's worst case 

/// BST shows good performance until it comes to it's edge case 

///- advantage to use it is -- all operations are better than O(n) , ordered nodes, flexible in storage
///- disadvantage is that -- none of its operations is O(1)


//!                                   Balanced Trees

// to always have a balanced tree in production side 
// we use 2 trees - AVL tree and Red Black tree 
// libraries are available to use them, don't need to build one 

///- Concept
go to visualgo - https://visualgo.net/
and i can use both AVL and rednblack trees and get how they balance the tree, that could become unbalanced

//!                                      Heap

Heaps are actually binary heaps -- can have upto 2 children
no concept of BST as left child will be smaller than right 
parent will be larger than all it's children 

                                        101
                                      /    \
                                    72      33
                                  /   \     /  \
                                2      45  5    1

///- lookup() -- O(n)
///- insert() -- O(log N)
///- delete() -- O(log N)

/// Why this is good and used 
//  it could be used for comparative problems - like give me all the numbers >= 33
//  this task would take O(log N) in heap while O(n) in BST

///- worst case for inserting is O(log N) and best is O(1)
/// CONCEPT -- i can see its working in visualgo

/// One Little Gotcha - we should know
    Memory Heap !== this data structure heap
    memory heap is something related to js runtime env and not related to this heap


///- Memory
Binary Heaps are memory effecient 
because this all is left to right insertion 
no concept of unbalanced tree 

///- priority queue
     binary heaps work on priority queue
     we will insert nodes according to their priority 

     for example, in an airplane , 2 passenger lines up to go inside a plane
     and captain appears after passengers, he will go inside plane before both passengers

      Before =>                Passenger1   Passenger2

      After =>                          Captain
                                      /        \
                                  Passenger1    Passenger2 
      
      as the same behaviour, if air hostess appears, she will too go before passengers but after captain
      so we will place Nurse btw Captain and Passenger1 
      
/// Advantages -> better than O(n) , fast insert, flexible size , works on priority queue
/// Disadvantages -> Lookup is O(n)
                                but it depends we are looking for max or min
                                max is the root node, we will get the for O(1)

//! BST and Binary Heap are two different trees

//!                                           Trie

this is used for searching -- for suggestions 
i can see the picture of it in the same folder 
if i enter 'A' , it could give me suggestions for its children

like dictionary

main root is empty in this 
*/
