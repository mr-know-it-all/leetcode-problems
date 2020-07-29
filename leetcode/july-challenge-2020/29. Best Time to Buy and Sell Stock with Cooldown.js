// Say you have an array for which the ith element is the price of a given stock on day i.
//
// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:
//
// You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
// After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
// Example:
//
// Input: [1,2,3,0,2]
// Output: 3
// Explanation: transactions = [buy, sell, cooldown, buy, sell]

// SOLUTION 1:

// maxProfit :: [Number] -> Number
const maxProfit = prices => {
    let buy = -Infinity, sell = 0;
    let prevBuy = buy, prevSell = sell;

    for(price of prices) {
        prevBuy = buy;
        buy = Math.max(prevSell - price, prevBuy);
        prevSell = sell;
        sell = Math.max(prevBuy + price, prevSell)
    }

    return sell;
};

// SOLUTION 2:

// maxProfit :: [Number] -> Number
const maxProfit = prices => {
    const dp = {};
    const L = prices.length;

    return (function find(i = 0, state = 'no-action') {
        if(i >= L) return 0;

        const KEY = i + state;

        if(dp[KEY]) return dp[KEY];

        switch(state) {
            case 'no-action': {
                dp[KEY] = Math.max(
                    find(i + 1, 'no-action'),
                    find(i + 1, 'keep')
                );
                break;
            }
            case 'keep': {
                const price = prices[i] - prices[i - 1];
                dp[KEY] = price + Math.max(
                    find(i + 1, 'sell'),
                    find(i + 1, 'keep')
                );
                break;
            }
            case 'sell': {
                dp[KEY] = find(i + 1, 'no-action');
                break;
            }
        }

        return dp[KEY];
    })();
};
