// Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?


// SOLUTION 1:

// singleNumber :: [Number] -> Number
const singleNumber = nums => {
    let cache = {};

    for(num of nums) {
        if(cache[num] && cache[num] === 2) delete cache[num];
        else if(cache[num]) cache[num]++;
        else cache[num] = 1;
    }

    return Number(Object.keys(cache)[0]);
};
