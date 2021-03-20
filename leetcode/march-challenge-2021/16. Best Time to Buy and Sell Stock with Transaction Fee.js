// You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.

// Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

// Example 1:

// Input: prices = [1,3,2,8,4,9], fee = 2
// Output: 8
// Explanation: The maximum profit can be achieved by:
// - Buying at prices[0] = 1
// - Selling at prices[3] = 8
// - Buying at prices[4] = 4
// - Selling at prices[5] = 9
// The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.
// Example 2:

// Input: prices = [1,3,7,5,10,3], fee = 3
// Output: 6
 

// Constraints:

// 1 < prices.length <= 5 * 104
// 0 < prices[i], fee < 5 * 104

// SOLUTION 1:

// maxProfit :: ([Number], Number) -> Number
const maxProfit = (prices, fee) => {
    if(prices.length === 0) return 0;
    
    const n = prices.length;
    const dp = {};
    const compute = (i, canSell) => {
      // check max profit at price i with or without stock
      if(dp[i + ':' + canSell]) return dp[i + ':' + canSell];
      if(i === n) return 0;
      
      if(canSell) { // we have stock to sell
        return dp[i + ':' + canSell] = Math.max(
          (compute(i + 1, false) + (prices[i] - fee)), // sell and deduce fee
          compute(i + 1, true) // keep stock
        );
      } else { // we don't have any stock
        return dp[i + ':' + canSell] = Math.max(
          (compute(i + 1, true) - prices[i]), // buy and deduce price
          compute(i + 1, false) // don't buy
        );
      }
    };
    
    return compute(0, false);
};

// SOLUTION 2:

// maxProfit :: ([Number], Number) -> Number
const maxProfit = (prices, fee) => {
  const n = prices.length;
  if(n === 0) return 0;
  
  let noStock = 0;
  let yesStock = -prices[0];
  
  for(let i = 1; i < n; i++) {
    // do nothing or sale stock at i-th price
    noStock = Math.max(noStock, yesStock + (prices[i] - fee));
    // do nothing or buy stock at i-th price
    yesStock = Math.max(yesStock, noStock - prices[i]);
  }
  
  return noStock;
};