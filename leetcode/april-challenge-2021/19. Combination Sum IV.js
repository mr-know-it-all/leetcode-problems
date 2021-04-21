// Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

// The answer is guaranteed to fit in a 32-bit integer.

 

// Example 1:

// Input: nums = [1,2,3], target = 4
// Output: 7
// Explanation:
// The possible combination ways are:
// (1, 1, 1, 1)
// (1, 1, 2)
// (1, 2, 1)
// (1, 3)
// (2, 1, 1)
// (2, 2)
// (3, 1)
// Note that different sequences are counted as different combinations.
// Example 2:

// Input: nums = [9], target = 3
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 200
// 1 <= nums[i] <= 1000
// All the elements of nums are unique.
// 1 <= target <= 1000
 

// Follow up: What if negative numbers are allowed in the given array? How does it change the problem? What limitation we need to add to the question to allow negative numbers?

// SOLUTION 1:
// TLE

// combinationSum4 :: ([Number], Number) -> Number
const combinationSum4 = (nums, target) => {
    let dp = {};
    
    const dfs = (t) => {
      if(dp[t]) return dp[t];
      if(t < 0) return 0;
      if(t === 0) return 1;
      
      let count = 0;
      for(let num of nums) if(t - num >= 0) count += dfs(t - num);
      
      return dp[t] = count;
    }
    
    return dfs(target);
};

// SOLUTION 2:

// combinationSum4 :: ([Number], Number) -> Number
const combinationSum4 = (nums, target) => {
    let dp = new Array(target + 1).fill(-1);
    dp[0] = 1;
    
    const dfs = (t) => {
      if(dp[t] !== -1) return dp[t];
      
      let count = 0;
      for(let num of nums) if(t - num >= 0) count += dfs(t - num);
      
      return dp[t] = count;
    }
    
    return dfs(target);
  };

  // SOLUTION 3:

  // combinationSum4 :: ([Number], Number) -> Number
const combinationSum4 = (nums, target) => {
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    
    for(let i = 1; i < target + 1; i++) {
      for(let j = 0; j < nums.length; j++) {
        if(i - nums[j] >= 0) dp[i] += dp[i - nums[j]];
      }
    }
    
    return dp[target];
  };