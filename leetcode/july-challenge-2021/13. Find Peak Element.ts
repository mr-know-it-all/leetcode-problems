// A peak element is an element that is strictly greater than its neighbors.

// Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞.

// You must write an algorithm that runs in O(log n) time.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:

// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
 

// Constraints:

// 1 <= nums.length <= 1000
// -231 <= nums[i] <= 231 - 1
// nums[i] != nums[i + 1] for all valid i.

// SOLUTION 1:
// O(n)

function _findPeakElement(nums: number[]): number {
    const n = nums.length;
    
    nums.unshift(-Infinity);
    nums.push(-Infinity);
    
    for(let i = 0; i <= n; i++) {
        if(nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i - 1;
        }
    }
};

// SOLUTION 2:
// O(log n)

function findPeakElement(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;
    
    while(left < right) {
        const mid = Math.floor((left + right) / 2);
        
        if(nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
};
