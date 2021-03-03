// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

 

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]
 

// Constraints:

// 2 <= nums.length <= 104
// 1 <= nums[i] <= 104

// SOLUTION 1:
// naive slow solution

// findErrorNums :: [Number] -> Number
const findErrorNums = (nums) => {
    let duplicate = null;
    let missing = null;
    for(let i = 0; i < nums.length; i++) {
        if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) duplicate = nums[i];
        if(nums.indexOf(i + 1) === -1) missing = i + 1;
        
        if(duplicate && missing) break;
    }

    return [duplicate, missing || nums.length + 1];
};

// SOLUTION 2:
// O(n log n)

// findErrorNums :: [Number] -> Number
const findErrorNums = (nums) => {
    let duplicate = null;
    let missing = null;
    
    nums.sort((a, b) => a - b);
    
    for(let i = 0; i < nums.length; i++) {
        if(!missing && nums[i] !== i + 1 && nums[i + 1] !== i + 1) missing = i + 1;
        if(!duplicate && nums[i] === nums[i + 1]) duplicate = nums[i];
        
        if(duplicate && missing) break;
    }

    return [duplicate, missing || nums.length + 1];
};