// Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 ≤ i ≤ j < n.
//
// Follow up: Could you do this in O(n) runtime?
//
//
//
// Example 1:
//
// Input: nums = [3,10,5,25,2,8]
// Output: 28
// Explanation: The maximum result is 5 XOR 25 = 28.
// Example 2:
//
// Input: nums = [0]
// Output: 0
// Example 3:
//
// Input: nums = [2,4]
// Output: 6
// Example 4:
//
// Input: nums = [8,10,2]
// Output: 10
// Example 5:
//
// Input: nums = [14,70,53,83,49,91,36,80,92,51,66,70]
// Output: 127
//
//
// Constraints:
//
// 1 <= nums.length <= 2 * 104
// 0 <= nums[i] <= 231 - 1

// SOLUTION 1:
// O(n^2)
// TODO: implement smarter solution using trie

// findMaximumXOR :: [Number] -> Number
const findMaximumXOR = nums => {
    if(nums.length <= 1) return 0;

    let max = -Infinity;

    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(j !== i) max = Math.max(max, nums[i] ^ nums[j]);
        }
    }

    return max;
};
