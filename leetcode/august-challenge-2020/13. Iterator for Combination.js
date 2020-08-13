// Design an Iterator class, which has:

// A constructor that takes a string characters of sorted distinct lowercase English letters and a number combinationLength as arguments.
// A function next() that returns the next combination of length combinationLength in lexicographical order.
// A function hasNext() that returns True if and only if there exists a next combination.


// Example:

// CombinationIterator iterator = new CombinationIterator("abc", 2); // creates the iterator.

// iterator.next(); // returns "ab"
// iterator.hasNext(); // returns true
// iterator.next(); // returns "ac"
// iterator.hasNext(); // returns true
// iterator.next(); // returns "bc"
// iterator.hasNext(); // returns false


// Constraints:

// 1 <= combinationLength <= characters.length <= 15
// There will be at most 10^4 function calls per test.


// CombinationIterator :: String -> Number
const CombinationIterator = function(characters, combinationLength) {
    this.permutations = [];
    this.index = 0;

    (function permute(n, xs, permutation, permutations) {
        xs.forEach((x, i) => {
            if(n > 1) permute(n - 1, xs.slice(i + 1), [...permutation, x], permutations);
            else permutations.push([...permutation, x].join(''));
        });
    })(combinationLength, [...characters], [], this.permutations);
};

// next :: () -> String
CombinationIterator.prototype.next = function() {
    return this.permutations[this.index++];
};

// hasNext :: () -> Boolean
CombinationIterator.prototype.hasNext = function() {
    return this.permutations[this.index] !== undefined;
};
