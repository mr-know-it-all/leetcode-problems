// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0
// Example 4:

// Input: coins = [1], amount = 1
// Output: 1
// Example 5:

// Input: coins = [1], amount = 2
// Output: 2
 

// Constraints:

// 1 <= coins.length <= 12
// 1 <= coins[i] <= 231 - 1
// 0 <= amount <= 104

// SOLUTION 1:
// DP recursion

// coinChange :: ([Number], Number) -> Number
const coinChange = (coins, amount) => {
    if(amount === 0) return 0;
    const dp = new Array(amount + 1).fill(0);
    
    const helper = (amount) => {
      if(amount === 0) return 0;
      else if(dp[amount]) return dp[amount];
  
      let min = -1;
      
      for(let coin of coins) {
        if(amount - coin >= 0) {
          let val = helper(amount - coin);
          if(val === -1) continue;
           
          if(min === -1) min = val + 1;
          else min = Math.min(min, val + 1);
        }
      }
      
      return dp[amount] = min;
    };
      
    
    helper(amount);
    return dp[amount];
  };

// coinChange :: ([Number], Number) -> Number
const coinChange = (coins, amount) => {
    if(amount === 0) return 0;
   
    let dp = new Array(coins.length + 1).fill(new Array(amount + 1));
    // coins dimension: 0 no of coins with 0 amount
    for(let i = 0; i < dp.length; i++) dp[i][0] = 0;
    // amount dimensions: Infinity (-1) with 0 coins and amount >= 1
    for(let i = 1; i < dp[0].length; i++) dp[0][i] = Infinity;
    
    for(let i = 1; i < dp.length; i++) {
      for(let j = 1; j < dp[0].length; j++) {
        // if coin at i - 1 is smaller than amount j
        // can include or exclude, take the min of the two
        // going to the row above at same amount [exclude]
        // 1 + going to the same coin row i back amount j - value of coin [include]
        if(j >= coins[i - 1]) dp[i][j] = Math.min(dp[i - 1][j], 1 + dp[i][j - coins[i - 1]]);
        // can't use the coin at i - 1 for the j amount, take previous value
        else dp[i][j] = dp[i - 1][j];
      }
    }
    
    const res = dp[coins.length][amount];
  
    return res === Infinity ? -1 : res;
  };