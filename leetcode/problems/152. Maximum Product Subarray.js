// https://leetcode.com/problems/maximum-product-subarray/

// Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.
//
// Example 1:
//
// Input: [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:
//
// Input: [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// maxProduct :: [Number] -> Number
const maxProduct = function(nums) {
    let max = nums[0];
    let min = nums[0];
    let result = nums[0];
    [, ...nums] = nums;

    for(let num of nums) {
        const possibleValues = [num, num * max, num * min];

        const currMax = Math.max(...possibleValues);
        const currMin = Math.min(...possibleValues);

        max = currMax;
        min = currMin;

        result = Math.max(max, result);
    }

    return result;
};
