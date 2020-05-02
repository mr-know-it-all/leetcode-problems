// https://leetcode.com/problems/first-missing-positive/

// Given an unsorted integer array, find the smallest missing positive integer.

// firstMissingPositive :: {number} -> Number
const firstMissingPositive = nums => {
    if(nums.length === 0) return 1;

    let cache = [];
    let result = null;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) cache[nums[i]] = 1;
    }

    for(let i = 1; i < cache.length; i++) {
        if(!(i in cache)) {
            result = i;
            break;
        }
    }
    
    if(result !== null) return result;
    return cache.length > 0 ? cache.length : 1;
};
