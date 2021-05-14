/// 1- If you know a solution is not far from the root of the tree:
// if the solution is not far from roots -- then i would use BFS because this search level by level in a tree

/// 2- If the tree is very deep and solutions are rare: 
// solution is rare, so i will go with bfs -- dfs will take too much time 

/// 3- If the tree is very wide:
// i would like to go with BFS -- it will go level by level 
// and tree is wide- if we care about memory, dfs is better

/// 4- If solutions are frequent but located deep in the tree:
// for deep, i think DFS is fine

/// 5- Determining whether a path exists between two nodes:
// i'll go with dfs because bfs go level by level, left sibling to right sibling -- where paths don't even exist

/// 6- Finding the shortest path:
// shortest path could be found by determining level -- may b bfs is good