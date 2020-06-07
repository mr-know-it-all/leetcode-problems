// Given an array w of positive integers, where w[i] describes the weight of index i, write a function pickIndex which randomly picks an index in proportion to its weight.

// SOLUTION 1:
// (out of memory)

// Solution :: [Number] -> Object
const Solution = function(w) {
    this.nums = [];

    for(let i = 0; i < w.length; i++)
        for (let j = 0; j < w[i]; j++)
            this.nums.push(i);
};

// pickIndex :: () -> Number
Solution.prototype.pickIndex = function() {
    let n = Math.floor(Math.random() * this.nums.length);

    return this.nums[n];
}

//SOLUTION 2:

// Solution :: [Number] -> Object
const Solution = function(w) {
    this.list = [];
    let accumSum = 0;

    for(let i = 0; i < w.length; i++){
        accumSum += w[i];
        this.list[i] = accumSum;
    }
};

// pickIndex :: () -> Number
Solution.prototype.pickIndex = function() {
    const target = this.list[this.list.length - 1] * Math.random();

    for(let i = 0; i < this.list.length; i++){
        if(target < this.list[i]) return i;
    }
    return -1;
};
