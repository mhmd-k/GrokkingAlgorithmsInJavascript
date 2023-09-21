// Dynamic Programming

// Dynamic programming starts by solving subproblems and builds up to
// solving the big problem.

// The knapsack problem optimal solution:
// For the knapsack problem, you’ll start by solving the problem for
// smaller knapsacks (or “sub-knapsacks”) and then work up to solving
// the original problem.
// Every dynamic-programming algorithm starts with a grid.
// Each cell’s value gets calculated with the same formula. Here it is:

//                      |---> the previos max (value at cell[i-1][j])
// cell[i][j] = max of <|
//                      |---> value of current item + value of the remaining space

// Dynamic programming only works when each subproblem is discrete—when it
// doesn’t depend on other subproblems.

// You’ve seen one dynamic programming problem (the knapsack problem) so far. What are
// the takeaways?
// • Dynamic programming is useful when you’re trying to optimize
// something given a constraint. In the knapsack problem, you had to
// maximize the value of the goods you stole, constrained by the size of
// the knapsack.
// • You can use dynamic programming when the problem can be broken
// into discrete subproblems, and they don’t depend on each other.

// Some general tips:
// • Every dynamic-programming solution involves a grid.
// • The values in the cells are usually what you’re trying to optimize.
// For the knapsack problem, the values were the value of the goods.
// • Each cell is a subproblem, so think about how you can divide
// your problem into subproblems. That will help you figure out what
// the axes are.

// Dynamic Programming Usecases:
// • Biologists use the longest common subsequence to find similarities
// in DNA strands. They can use this to tell how similar two animals or
// two diseases are. The longest common subsequence is being used to
// find a cure for multiple sclerosis.
// • Have you ever used diff (like git diff)? Diff tells you the differences
// between two files, and it uses dynamic programming to do so.
// • We talked about string similarity. Levenshtein distance measures
// how similar two strings are, and it uses dynamic programming.
// Levenshtein distance is used for everything from spell-check to
// figuring out whether a user is uploading copyrighted data.
// • Have you ever used an app that does word wrap, like Microsoft Word?
// How does it figure out where to wrap so that the line length stays
// consistent? Dynamic programming!

// Recap
// • Dynamic programming is useful when you’re trying to optimize
// something given a constraint.
// • You can use dynamic programming when the problem can be
// broken into discrete subproblems.
// • Every dynamic-programming solution involves a grid.
// • The values in the cells are usually what you’re trying to optimize.
// • Each cell is a subproblem, so think about how you can divide your
// problem into subproblems.
// • There’s no single formula for calculating a dynamic-programming
// solution.
