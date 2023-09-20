// The Greedy Strategy

// A greedy algorithm is simple: at each step, pick the optimal move.

// Obviously, greedy algorithms don’t always work. But they’re simple to write.

// in the knapsack problem the greedy strategy doesn’t give you the optimal solution here.
// But it gets you pretty close.

// sometimes, perfect is the enemy of good. Sometimes all you need is an algorithm that
// solves the problem pretty well. And that’s where greedy algorithms shine, because
// they’re simple to write and usually get pretty close.

// The set-covering problem
// Suppose you’re starting a radio show. You want to reach listeners in all 50 states.
// You have to decide what stations to play on to reach all those listeners.
// It costs money to be on each station, so you’re trying to minimize the number
// of stations you play on.
// You have a list of stations. Each station covers a region, and there’s overlap.
// How do you figure out the smallest set of stations you can play on to cover all 50 states?

// Approximation Algorithms
// Greedy algorithms to the rescue! Here’s a greedy algorithm that comes pretty close:
// 1. Pick the station that covers the most states that haven’t been covered
// yet. It’s OK if the station covers some states that have been covered already.
// 2. Repeat until all the states are covered.
// This is called an approximation algorithm. When calculating the exact solution will
// take too much time, an approximation algorithm will work.
// Approximation algorithms are judged by:
// • How fast they are
// • How close they are to the optimal solution
// Greedy algorithms are a good choice to solve "The set-covering problem" because not
// only are they simple to come up with, but that simplicity means they usually run fast, too.
// In this case, the greedy algorithm runs in O(n^2) time, where n is the number of radio
// stations.

// the code for the set-covering problem

// First, make a list of the states you want to cover:
const statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

// You also need the list of stations that you’re choosing from.
const stations = {};
stations["kone"] = new Set(["id", "nv", "ut"]);
stations["ktwo"] = new Set(["wa", "id", "mt"]);
stations["kthree"] = new Set(["or", "nv", "ca"]);
stations["kfour"] = new Set(["nv", "ut"]);
stations["kfive"] = new Set(["ca", "az"]);

// Finally, you need something to hold the final set of stations you’ll use:
const finalStations = new Set();

// You need to go through every station and pick the one that covers the most uncovered states.
function chooseStation() {
  let bestStation = null;
  let statesCovered = [];
  for (let [key, value] of Object.entries(stations)) {
    if (!finalStations.has(key)) {
      // covered is the set of uncovered states that this station covers
      const covered = [...value].filter((state) => {
        const isCoveredBefore = statesCovered.find((ele) => ele === state);
        if (!isCoveredBefore && statesNeeded.has(state)) {
          return state;
        }
      });
      if (covered.length > statesCovered.length) {
        bestStation = key;
        statesCovered = covered;
      }
    }
  }
  finalStations.add(bestStation);
  statesCovered.forEach((e) => {
    statesNeeded.delete(e);
  });
}

while (statesNeeded.size > 0) {
  chooseStation();
}
console.log(finalStations);

// NP-complete problems

// Traveling salesperson problem
// In this problem, a salesperson has to visit five different cities.
// And he’s trying to figure out the shortest route that will take him to all
// five cities. To find the shortest route, you first have to calculate every
// possible route.
// in this problem the start location is unknown.
// Two cities = two possible routes.
// Three cities = six possible routes.
// Four cities = 24 possible routes
// 5 cities = 120 possible routes
// This is called the factorial function (remember reading about this in
// chapter 3?). So 5! = 120. Suppose you have 10 cities. How many possible
// routes are there? 10! = 3,628,800.

// The traveling-salesperson problem and the set-covering problem both
// have something in common: you calculate every possible solution and
// pick the smallest/shortest one. Both of these problems are NP-complete.

// What’s a good approximation algorithm for the traveling salesperson?
// Something simple that finds a short path. See if you can come up with an
// answer before reading on.
// Here’s how I would do it: arbitrarily pick a start city. Then, each time the
// salesperson has to pick the next city to visit, they pick the closest unvisited city.

// Here’s the short explanation of NP-completeness: some problems are
// famously hard to solve. The traveling salesperson and the set-covering
// problem are two examples. A lot of smart people think that it’s not
// possible to write an algorithm that will solve these problems quickly.

// How do you tell if a problem is NP-complete?
// The short answer: there’s no easy way to tell if the problem you’re working
// on is NP-complete. Here are some giveaways:
// • Your algorithm runs quickly with a handful of items but really slows
// down with more items.
// • “All combinations of X” usually point to an NP-complete problem.
// • Do you have to calculate “every possible version” of X because you
// can’t break it down into smaller sub-problems? Might be
// NP-complete.
// • If your problem involves a sequence (such as a sequence of cities, like
// traveling salesperson), and it’s hard to solve, it might be NP-complete.
// • If your problem involves a set (like a set of radio stations) and it’s hard
// to solve, it might be NP-complete.
// • Can you restate your problem as the set-covering problem or the
// traveling-salesperson problem? Then your problem is definitely
// NP-complete.

// Recap
// • Greedy algorithms optimize locally, hoping to end up with a global optimum.
// • NP-complete problems have no known fast solution.
// • If you have an NP-complete problem, your best bet is to use an approximation algorithm.
// • Greedy algorithms are easy to write and fast to run, so they make good
// approximation algorithms.
