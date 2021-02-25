// Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.

// Return the shortest such subarray and output its length.

 

// Example 1:

// Input: nums = [2,6,4,8,10,9,15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 0
// Example 3:

// Input: nums = [1]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 104
// -105 <= nums[i] <= 105
 

// Follow up: Can you solve it in O(n) time complexity?

// SOLUTION 1:

// findUnsortedSubarray :: [Number] -> Number
const findUnsortedSubarray = (nums) => {
    let n = nums.length;
    
    let right = n - 1;
    for(let i = right; i >= 0; i--) {
        if(nums[i] === Math.max(...nums.slice(0, i + 1))) {
            right--;
        } else {
            break;
        }
    }
    
    let left = 0;
    for(let i = left; i < n; i++) {
        if(nums[i] === Math.min(...nums.slice(i))) {
            left++;
        } else {
            break;
        }
    }
    
    return Math.max(0, right - left + 1);
};

// SOLUTION 2:
// O(n + n + n + n) ... O(n)

// findUnsortedSubarray :: [Number] -> Number
const findUnsortedSubarray = (nums) => {
    let n = nums.length;
    
    let min = Infinity;
    for(let i = n - 1; i >= 0; i--) {
        min = Math.min(min, nums[i]);
        nums[i] = [min, nums[i]];
    }
    let max = -Infinity;
    for(let i = 0; i < n; i++) {
        max = Math.max(max, nums[i][1]);
        nums[i] = [...nums[i], max];
    }

    let right = n - 1;
    for(let i = right; i >= 0; i--) {
        if(nums[i][1] === nums[i][2]) {
            right--;
        } else {
            break;
        }
    }
    
    let left = 0;
    for(let i = left; i < n; i++) {
        if(nums[i][1] === nums[i][0]) {
            left++;
        } else {
            break;
        }
    }
    
    return Math.max(0, right - left + 1);
};