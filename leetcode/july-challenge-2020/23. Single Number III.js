// n an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.
//
// Example:
//
// Input:  [1,2,1,3,2,5]
// Output: [3,5]
// Note:
//
// The order of the result is not important. So in the above example, [5, 3] is also correct.
// Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?

// SOLUTION 1:
// TODO: write algorithm in constant space

// singleNumber :: [Number] -> [Number, Number]
const singleNumber = nums => {
    const hash = {};
    const used = {};
    for(let num of nums) {
        if(!hash[num] && !used[num]) hash[num] = 1;
        else if(hash[num]) delete hash[num];
        used[num] = 1;
    }

    return Object.keys(hash);
};
