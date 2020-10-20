// You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

// Design an algorithm to find the maximum profit. You may complete at most k transactions.

// Notice that you may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

// Example 1:

// Input: k = 2, prices = [2,4,1]
// Output: 2
// Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
// Example 2:

// Input: k = 2, prices = [3,2,6,5,0,3]
// Output: 7
// Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
 

// Constraints:

// 0 <= k <= 109
// 0 <= prices.length <= 104
// 0 <= prices[i] <= 1000

// SOLUTION 1:
// inspired by other solutions

// masProfit :: (Number, [Number]) -> Number   
const maxProfit = (k, prices) => {
    if(prices.length < 2) return 0;
    if(k >= Math.floor(prices.length / 2)) {
        let max = 0;
        let min = prices[0];                                                                
        for(let i = 1; i < prices.length; i++) {
            if(prices[i] - min > 0) {
                max = max + prices[i] - min;
            }
            min = prices[i];
        }
        return max;
    } else {
        let dp = new Array(prices.length).fill(0);
        let size = prices.length;
        for(let t = 1; t <= k; t++){
            let min = prices[0];
            let max = 0;
            for(let i = 0; i < size; i++){
                min = Math.min(min, prices[i] - dp[i]);
                max = Math.max(max, prices[i] - min);
                dp[i] = max
            }
        }
        return dp.pop();  
    }
};