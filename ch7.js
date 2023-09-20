// Breadth-first search will find you the path with the fewest segments.
// What if you want the fastest path instead. You can do that with
// a different algorithm called Dijkstra’s algorithm.

// Dijkstra’s algorithm
// There are four steps to Dijkstra’s algorithm:
// 1. Find the “cheapest” node. This is the node you can get to in the least amount of time.
// 2. Update the costs of the neighbors of this node.
// 3. Repeat until you’ve done this for every node in the graph.
// 4. Calculate the final path.

// A graph with weights is called a weighted graph. A graph without
// weights is called an unweighted graph.

// Dijkstra’s algorithm only works with directed acyclic graphs, called DAGs for short.
// You can’t use Dijkstra’s algorithm if you have negative-weight edges.
// If you want to find the shortest path in a graph that has negative-weight
// edges, there’s an algorithm for that! It’s called the Bellman-Ford algorithm.

// to code Dijkstra’s algorithm we are going to need three hash tables
const graph = new Map();
const costs = new Map();
const parents = new Map();

// the graph in this example is presented in page 131

graph.set("start", [
  { node: "A", cost: 6 },
  { node: "B", cost: 2 },
]);
graph.set("A", [{ node: "finish", cost: 1 }]);
graph.set("B", [
  { node: "A", cost: 3 },
  { node: "finish", cost: 5 },
]);
graph.set("finish", []);

costs.set("A", 6);
costs.set("B", 2);
costs.set("finish", Infinity);

parents.set("A", "start");
parents.set("B", "start");
parents.set("finish", null);

// Finally, you need an array to keep track of all the nodes you’ve already
// processed, because you don’t need to process a node more than once
const processed = [];

const findLowestCostNode = (costs) => {
  let lowestCost = Infinity;
  let lowestCostNode = null;
  for (const [node, nodeCost] of costs) {
    const nodeAlreadyProccessed = processed.find((e) => e === node);
    if (nodeCost < lowestCost && !nodeAlreadyProccessed) {
      lowestCost = nodeCost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
};

const dijkstraAlgorithm = (node) => {
  // If you’ve processed all the nodes, this while loop is done.
  while (node) {
    const cost = costs.get(node);
    const nighbours = graph.get(node);
    // Go through all the neighbors of this node
    for (let i of nighbours) {
      // If it’s cheaper to get to this neighbor by going through this
      // node update the cost and the parentNode for this node.
      const newCost = i.cost + cost;
      if (newCost < costs.get(i.node)) {
        costs.set(i.node, newCost);
        parents.set(i.node, node);
      }
    }
    // Mark the node as processed.
    processed.push(node);
    // Find the next node to process, and loop.
    node = findLowestCostNode(costs);
  }
};

dijkstraAlgorithm(findLowestCostNode(costs));
console.log(costs);
console.log(parents);

// Recap
// • Breadth-first search is used to calculate the shortest path for
// an unweighted graph.
// • Dijkstra’s algorithm is used to calculate the shortest path for
// a weighted graph.
// • Dijkstra’s algorithm works when all the weights are positive.
// • If you have negative weights, use the Bellman-Ford algorithm.
