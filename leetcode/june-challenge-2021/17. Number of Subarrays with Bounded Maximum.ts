// We are given an array nums of positive integers, and two positive integers left and right (left <= right).

// Return the number of (contiguous, non-empty) subarrays such that the value of the maximum array element in that subarray is at least left and at most right.

// Example:
// Input: 
// nums = [2, 1, 4, 3]
// left = 2
// right = 3
// Output: 3
// Explanation: There are three subarrays that meet the requirements: [2], [2, 1], [3].
// Note:

// left, right, and nums[i] will be an integer in the range [0, 109].
// The length of nums will be in the range of [1, 50000].

// SOLUTION 1:

function _numSubarrayBoundedMax(nums: number[], left: number, right: number): number {
    let count = 0;
    let l = -1;
    let r = -1;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > right) l = i;
        if(nums[i] >= left) r = i;
        
        count += r - l;
    }
    
    return count;
};

// SOLUTION 2:

function numSubarrayBoundedMax(nums: number[], left: number, right: number): number {
    let count = 0;
    let prevBiggerThanR = -1;
    let countPrev = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > right) {
            prevBiggerThanR = i;
            countPrev = 0;
        } else if(nums[i] < left) {
            count += countPrev;
        } else {
            countPrev = i - prevBiggerThanR;
            count += countPrev;
        }
    }
    
    return count;
};