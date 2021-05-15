// Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.

// We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

 

// Example 1:

// Input: nums = [4,2,3]
// Output: true
// Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
// Example 2:

// Input: nums = [4,2,1]
// Output: false
// Explanation: You can't get a non-decreasing array by modify at most one element.
 

// Constraints:

// n == nums.length
// 1 <= n <= 104
// -105 <= nums[i] <= 105

// checkPossibility :: [Number] -> Boolean
const checkPossibility = (nums) => {  
    let max = [];
    let leftChange = 0;
    for(let i = 0; i < nums.length; i++) {
        const greaterThan = max.filter(x => x > nums[i]);
        
        if(greaterThan.length >= 1) {
            leftChange++;
        }
        
        max.push(nums[i]);
        max.sort((a, b) => b - a);
        max.length = 2;
    }
    
    let min = [];
    let rightChange = 0;
    for(let i = nums.length - 1; i >= 0; i--) {
        const smallerThan = min.filter(x => x < nums[i]);
        
        if(smallerThan.length >= 1) {
            rightChange++;
        }
        
        min.push(nums[i]);
        min.sort((a, b) => a - b);
        min.length = 2;
    }

    return leftChange <= 1 || rightChange <= 1;
};