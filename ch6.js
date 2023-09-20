// Breadth-first search
// Breadth-first search allows you to find the shortest distance between two things.
// To figure out how to get from place A to place B, there are two steps:
// 1. Model the problem as a graph.
// 2. Solve the problem using breadth-first search.

// Graphs are a way to model how different things are connected to one another.
// Each graph is made up of nodes and edges.
// return to the book for a graph example

// Breadth-first search It can help answer two types of questions:
// • Question type 1: Is there a path from node A to node B?
// • Question type 2: What is the shortest path from node A to node B?

// Queue
// Queues are similar to stacks. You can’t access random elements in the queue.
// Instead, there are two only operations, enqueue and dequeue.
// The queue is called a FIFO data structure: First In, First Out. In contrast,
// a stack is a LIFO data structure: Last In, First Out.

// First, you need to implement the graph in code. A graph consists of several nodes.
// And each node is connected to neighboring nodes.
// How do you express a relationship like 'you -> bob'? Luckily, you know a data structure
// that lets you express relationships: a hash table!
// return to book for directed and undirected graphs

// implementing a graph in javascript:
const graph = new Map();

const firstDegreeConnections = [
  { name: "alice", isMangoSeller: false },
  { name: "bob", isMangoSeller: false },
  { name: "claire", isMangoSeller: false },
];

graph.set("you", firstDegreeConnections);

graph.set("bob", [
  { name: "anuj", isMangoSeller: false },
  { name: "peggy", isMangoSeller: false },
]);
graph.set("alice", [{ name: "peggy", isMangoSeller: false }]);
graph.set("claire", [
  { name: "thom", isMangoSeller: false },
  { name: "jonny", isMangoSeller: false },
]);
graph.set("anuj", []);
graph.set("peggy", []);
graph.set("thom", [{ name: "ahmad", isMangoSeller: true }]);
graph.set("jonny", []);

// implement breadth-first search in a function to get the nearest mango seller in my connections

const getMangoSeller = (name) => {
  let queue = [...graph.get(name)];
  const searchedPeaople = [];
  while (queue.length > 0) {
    const currentPerson = queue.pop();
    // checks if we checked a person before
    const alreadyInSearchedList = searchedPeaople.find(
      (e) => e.name === currentPerson.name
    );
    if (!alreadyInSearchedList) {
      if (currentPerson.isMangoSeller) {
        return `${currentPerson.name} is the nearest mango seller`;
      } else {
        queue = [...graph.get(currentPerson.name), ...queue];
      }
      searchedPeaople.push(currentPerson);
    }
  }
  return "no mango seller in your connection";
};

console.log(getMangoSeller("you"));

// Breadth-first search takes O(number of people + number of edges)
// and it’s more commonly written as O(V+E) (V for number of vertices, E for number of edges).
// a tree is always a graph, but a graph may or may not be a tree.

// Recap
// • Breadth-first search tells you if there’s a path from A to B.
// • If there’s a path, breadth-first search will find the shortest path.
// • If you have a problem like “find the shortest X,” try modeling your
// problem as a graph, and use breadth-first search to solve.
// • A directed graph has arrows, and the relationship follows the
// direction of the arrow (rama -> adit means “rama owes adit money”).
// • Undirected graphs don’t have arrows, and the relationship goes both
// ways (ross - rachel means “ross dated rachel and rachel dated ross”).
// • Queues are FIFO (First In, First Out).
// • Stacks are LIFO (Last In, First Out).
// • You need to check people in the order they were added to the search
// list, so the search list needs to be a queue. Otherwise, you won’t get
// the shortest path.
// • Once you check someone, make sure you don’t check them again.
// Otherwise, you might end up in an infinite loop.
