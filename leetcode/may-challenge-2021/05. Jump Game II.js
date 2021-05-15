// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// You can assume that you can always reach the last index.

 

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: 2
// Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [2,3,0,1,4]
// Output: 2
 

// Constraints:

// 1 <= nums.length <= 1000
// 0 <= nums[i] <= 105

// SOLUTION 1:

// jump :: [Number] -> Number
const jump = function(nums) {
    const n = nums.length;
    if(n === 1) return 0;

    const dp = {};
    
    const compute = (index) => {
        if(dp[index]) return dp[index];
        if(index === n - 1) return 0;
        
        let min = Infinity;
        
        const steps = nums[index];
        
        for(let i = 1; i <= steps; i++) {
            min = Math.min(min, 1 + compute(index + i));
        }
        
        return dp[index] = min;
    }
    
    return compute(0);
};

// SOLUTION 2:

// jump :: [Number] -> Number
const jump = function(nums) {
    const n = nums.length;
    if(n === 1) return 0;
    
    let end = 0;
    let farthest = 0;
    let jumps = 0;
    
    for(let i = 0; i < n - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        
        if(i === end) {
            jumps++;
            end = farthest;
        }
    }
        
    return jumps;
};

// SOLUTION 3:

// jump :: [Number] -> Number
const jump = function(nums) {
    const n = nums.length;
    if(n === 1) return 0;
    
    let jumps = 1;
    let left = 0;
    let right = nums[0];
    
    while(right < n - 1) {
        jumps++;
        
        let max = 0;
        for(let i = left; i <= right; i++) {
            max = Math.max(max, i + nums[i]);
        }
        
        left = right;
        right = max;
    }
    
    return jumps;
};