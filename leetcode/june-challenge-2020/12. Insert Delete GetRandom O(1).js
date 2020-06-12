// Design a data structure that supports all following operations in average O(1) time.

// insert(val): Inserts an item val to the set if not already present.
// remove(val): Removes an item val from the set if present.
// getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.

// SOLUTION 1:
// TODO: find faster/better solution

// RandomizedSet :: () -> Object
const RandomizedSet = function() {
    this.set = new Set();
};

// insert :: Number -> Boolean
RandomizedSet.prototype.insert = function(val) {
    const hadValue = this.set.has(val);
    this.set.add(val);
    return !hadValue;
};

// remove :: Number -> Boolean
RandomizedSet.prototype.remove = function(val) {
    return this.set.delete(val);
};

// getRandom :: () -> Number
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.set.size);
    return [...this.set][randomIndex];
};
