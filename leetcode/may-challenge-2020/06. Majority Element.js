// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
//
// You may assume that the array is non-empty and the majority element always exist in the array.

// majorityElement :: [Number] -> Number
const majorityElement = nums => {
    const n = nums.length;
    const mid = n / 2;
    const cache = new Map();

    for(let i = 0; i < n; i++) {
        cache.set(nums[i], (cache.get(nums[i]) || 0) + 1);
        if(cache.get(nums[i]) > mid) return nums[i];
    }
};
