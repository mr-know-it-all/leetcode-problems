// Given n balloons, indexed from 0 to n-1. Each balloon is painted with a number on it represented by array nums. You are asked to burst all the balloons. If the you burst balloon i you will get nums[left] * nums[i] * nums[right] coins. Here left and right are adjacent indices of i. After the burst, the left and right then becomes adjacent.

// Find the maximum coins you can collect by bursting the balloons wisely.

// Note:

// You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can not burst them.
// 0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
// Example:

// Input: [3,1,5,8]
// Output: 167 
// Explanation: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
//              coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167

// maxCoins :: [Number] -> Number
const maxCoins = nums => {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    
    const vals = [1, ...nums, 1];
    const n = nums.length;
    const dp = Array.from({ length: n + 2 }, () => Array.from({ length: n + 2 },  () => 0))
    
    for(let len = 1; len <= n; len++) {
        for(let i = 1; i + len <= n + 1; i++) {
            const j = i + len - 1;
            for (let k = i; k <= j; k++) {
                // max value from index i to j
                dp[i][j] = Math.max(
                    dp[i][j],
                    dp[i][k - 1] + vals[i - 1] * vals[k] * vals[j + 1] + dp[k + 1][j]
                );
          }
        }
    }
    
    return dp[1][n];
};