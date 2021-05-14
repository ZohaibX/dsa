class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }
  addEdge(node1, node2) {
    //uniderected Graph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
}

var myGraph = new Graph();

myGraph.addVertex(42);
myGraph.addVertex('100');

myGraph.addEdge(42, '100');
myGraph.addEdge(42, '100');

// myGraph.addVertex('1');
// myGraph.addVertex('2');
// myGraph.addVertex('3');
// myGraph.addVertex('4');
// myGraph.addVertex('5');
// myGraph.addVertex('6');
// myGraph.addEdge('3', '1');
// myGraph.addEdge('3', '4');
// myGraph.addEdge('4', '2');
// myGraph.addEdge('4', '5');
// myGraph.addEdge('1', '2');
// myGraph.addEdge('1', '0');
// myGraph.addEdge('0', '2');
// myGraph.addEdge('6', '5');

console.log(myGraph);

// myGraph.showConnections();

/*
//!                                     LOGIC

while adding a vertex -- array's index will be the node
      we need to have atleast two vertices for connection

while adding an edge, we will provide two nodes/vertices, and will connect both
      as we will push node1 to node2 array 
      and node2 to node1 array

*/
