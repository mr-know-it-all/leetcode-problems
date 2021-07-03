// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
// 0 <= k <= nums.length

// SOLUTION 1:
// slow, naive solution
// TODO: write faster algorithm

function _longestOnes(nums: number[], k: number): number {
    if(k === nums.length) return k;
    
    for(let size = nums.length; size >= 0; size--) {
        let zeros = 0;
        
        for(let i = 0; i + size <= nums.length; i++) {               
            if(i === 0) {
                for(let j = i; j < i + size; j++) {
                    if(nums[j] === 0) zeros++;
                }
            } else {
                if(nums[i - 1] === 0) zeros--;
                if(nums[i + size - 1] === 0) zeros++;
            }
            
            if(zeros <= k) return size;
        }
    }
    
    return 0;
};

// SOLUTION 2:

function longestOnes(nums: number[], k: number): number {
    let i = 0;
    let j = 0;
    
    while(j < nums.length) {
        if(nums[j] === 0) k--;
        if(k < 0) {
            if(nums[i] === 0) k++;
            i++;
        }
        j++;
    }
    
    return j - i;
};