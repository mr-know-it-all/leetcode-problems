// You have a queue of integers, you need to retrieve the first unique integer in the queue.
//
// Implement the FirstUnique class:
//
// FirstUnique(int[] nums) Initializes the object with the numbers in the queue.
// int showFirstUnique() returns the value of the first unique integer of the queue, and returns -1 if there is no such integer.
// void add(int value) insert value to the queue.

// FirstUnique :: [Numbers] -> Object
const FirstUnique = function(nums) {
    this.unique = new Map();
    this.added = new Map();
    for(let i = 0; i < nums.length; i++) this.add(nums[i]);
};

// showFirstUnique :: () -> Number
FirstUnique.prototype.showFirstUnique = function() {
    return this.unique.keys().next().value || -1;
};

// add :: Number -> ()
FirstUnique.prototype.add = function(val) {
    if(this.unique.has(val)) {
        this.unique.delete(val);
    } else if(!this.added.has(val)) {
        this.unique.set(val, '');
        this.added.set(val, '');
    }
};
