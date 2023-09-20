// Hash Tables
// Hash functions
// A hash function is a function where you put in a string and you get back a number.
// Ex: "Hello" -> hash function -> 2
// The hash function tells you exactly where the price is stored, so you don’t have to search at all!
// Put a hash function and an array together, and you get a data structure called a hash table.
// in javascript a hash table is an object or a map

// Ex:
const hashTable = new Map();

hashTable.set("apple", 0.67);
hashTable.set("avocado", 2.2);
hashTable.set("milk", 3.2);
hashTable.set("rice", 1.79);

console.log(hashTable);

// Ex: a function to add someone to vote list if he has not voted
const voteList = new Map();
voteList.set("Ahmad", "A");
voteList.set("Samer", "A");
voteList.set("Karam", "C");
voteList.set("Omar", "B");

function vote(name, vote) {
  if (voteList.get(name)) {
    console.log(`${name} already voted, kick him/her`);
  } else {
    console.log(`${name} can vote, add him/her to votelist`);
    voteList.set(name, vote);
  }
}

// Recap
// To recap, hashes are good for
// • Modeling relationships from one thing to another thing
// • Filtering out duplicates
// • Caching/memorizing data instead of making your server do work

// Collisions
// a collision is two keys that have been assigned the same slot.
// Collisions are bad, and you need to work around them. There are many different ways to deal
// with collisions. The simplest one is this: if multiple keys map to the same slot, start
//  a linked list at that slot.
// Hash functions are important. A good hash function will give you very few collisions.
// In the average case, hash tables take O(1) for everything. O(1) is called constant time.
// Hash tables are as fast as arrays at searching(getting a value at an index).
// And they’re as fast as linked lists at inserts and deletes.It’s the best of both worlds!
// But in the worst case, hash tables are slow at all of those.So it’s important that you don’t
// hit worst-case performance with hash tables.And to do that, you need to avoid collisions.
// To avoid collisions, you need:
// • A low load factor
// • A good hash function

// Recap
// You’ll almost never have to implement a hash table yourself. The
// programming language you use should provide an implementation for
// you. You can use Python’s hash tables and assume that you’ll get the
// average case performance: constant time.
// Hash tables are a powerful data structure because they’re so fast and
// they let you model data in a different way. You might soon find that
// you’re using them all the time:
// • You can make a hash table by combining a hash function
// with an array.
// • Collisions are bad. You need a hash function that
// minimizes collisions.
// • Hash tables have really fast search, insert, and delete.
// • Hash tables are good for modeling relationships from one
// item to another item.
// • Once your load factor is greater than .07, it’s time to resize
// your hash table.
// • Hash tables are used for caching data (for example, with
// a web server).
// • Hash tables are great for catching duplicates.
