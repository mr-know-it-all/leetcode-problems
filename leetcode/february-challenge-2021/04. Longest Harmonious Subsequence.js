// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.

// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.

// A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

 

// Example 1:

// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 2
// Example 3:

// Input: nums = [1,1,1,1]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 2 * 104
// -109 <= nums[i] <= 109

// SOLUTION 1;
// O(n^2) naive solution

// findLHS :: [Number] -> Number
const findLHS = (nums) => {
    const n = nums.length;
    let max = 0;
    
    for(let i = 0; i < n; i++) {
        let smaller = 0;
        let greater = 0;
        let equal = 1;
        
        for(let j = 0; j < i; j++) {
            if(nums[j] > nums[i]) {
                if(nums[j] - nums[i] === 1) greater++;
            } else if(nums[j] < nums[i]) {
                if(nums[i] - nums[j] === 1) smaller++;
            } else {
                equal++;
            }
        }
        const count = smaller === 0 && greater === 0 ? 0 : Math.max(smaller, greater) + equal;
        max = Math.max(count, max);
    }

    return max;
};

// SOLUTION 2:
// intuition:
// there will always be at most two different numbers
// plus their duplicates

// findLHS :: [Number] -> Number
const findLHS = (nums) => {
    const n = nums.length;
    
    const count = new Map();
    for(let num of nums) {
        count.set(num, (count.get(num) || 0) + 1);
    }
    
    let max = 0;
    for(let num of nums) {
        if(count.has(num + 1)) {
            max = Math.max(max, count.get(num + 1) + count.get(num));
        }
    }

    return max;
};