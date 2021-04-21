/// What is linked list ?
// linked list is structured like

// 1stItem
// itsAddress -->  2ndItem
//                 itsAddress -->  3rdItem
//                                 itsAddress --> 4rthItem
//                                                itsAddress --> null

/// 1st item is head and 4rth item is tail as it points to null
/// --> are the pointers that points to next nodes
/// these nodes are scattered in memory list hash tables do

// prepend (inserting on start) is O(1)
// appending (inserting on end) is O(1)
// lookUp is O(n) // as they are scattered randomly on memory
// same behavior for inserting in middle and deleting a node as in lookUp
// whenever finding a node, loop has to start from head and then loop through random addresses until it gets required node
