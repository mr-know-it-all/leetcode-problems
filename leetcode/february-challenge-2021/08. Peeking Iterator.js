// Given an Iterator class interface with methods: next() and hasNext(), design and implement a PeekingIterator that support the peek() operation -- it essentially peek() at the element that will be returned by the next call to next().

// Example:

// Assume that the iterator is initialized to the beginning of the list: [1,2,3].

// Call next() gets you 1, the first element in the list.
// Now you call peek() and it returns 2, the next element. Calling next() after that still return 2. 
// You call next() the final time and it returns 3, the last element. 
// Calling hasNext() after that should return false.
// Follow up: How would you extend your design to be generic and work with all types, not just integer?

/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

// SOLUTION 1:

// PeekingIterator :: Iterator -> ()
const PeekingIterator = function(iterator) {
    this.data = [];
    
    while(iterator.hasNext()) this.data.push(iterator.next());
};

// peek :: () -> Number
PeekingIterator.prototype.peek = function() {
    return this.data[0];
};

// next :: () -> Number
PeekingIterator.prototype.next = function() {
    return this.data.shift();
};

// hasNext :: () -> Boolean
PeekingIterator.prototype.hasNext = function() {
    return this.data.length > 0;
};

// SOLUTION 2:

// PeekingIterator :: Iterator -> ()
const PeekingIterator = function(iterator) {
    this.buffer = iterator.next();
    this.iterator = iterator;
};

// peek :: () -> Number
PeekingIterator.prototype.peek = function() {
    return this.buffer;
};

// next :: () -> Number
PeekingIterator.prototype.next = function() {
    const value = this.buffer;
    this.buffer = this.iterator.hasNext() ? this.iterator.next() : null;
    
    return value;
};

// hasNext :: () -> Boolean
PeekingIterator.prototype.hasNext = function() {
    return this.buffer !== null;
};