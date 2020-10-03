// Given an unsorted integer array, find the smallest missing positive integer.

// Example 1:

// Input: [1,2,0]
// Output: 3
// Example 2:

// Input: [3,4,-1,1]
// Output: 2
// Example 3:

// Input: [7,8,9,11,12]
// Output: 1
// Follow up:

// Your algorithm should run in O(n) time and uses constant extra space.

// firstMissingPositive :: [Number] -> Number
const firstMissingPositive = nums => {
    let xs = []
    
    for(let num of nums) {
        if(num <= 0) continue;
        
        xs[num] = true;
    }
    
    for(let i = 1; i < xs.length; i++) {
        if(!xs[i]) return i;
    }
    return xs.length || 1;
};