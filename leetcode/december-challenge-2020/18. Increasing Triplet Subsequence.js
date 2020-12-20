// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
// Example 3:

// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?

// SOLUTION 1:

// increasingTriplet :: [Number] -> Boolean
const increasingTriplet = nums => {
    let [a, b] = [null, null];

    for(let i = 1; i < nums.length; i++) {
        const [prev, curr, next] = [nums[i - 1], nums[i], nums[i + 1]];
        
        if(a !== null && b !== null && b < curr) return true;
       
        if(prev < curr) {
            if(a === null || prev < a) {
                a = prev;
                b = curr;
            } else if(a < prev && prev < b) {
                b = prev;
            }
        }
    }
    
    return false;
};

// SOLUTION 2:

// increasingTriplet :: [Number] -> Boolean
const increasingTriplet = nums => {
    let [a, b] = [Infinity, Infinity];

    for(let num of nums) {
        if(num <= a) a = num;
        else if(num <= b) b = num;
        else return true;
    }
    
    return false;
};