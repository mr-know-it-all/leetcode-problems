// You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.

// SOLUTON 1:
// (TLE but intuitive)

// change :: (Number, [[Number]]) -> Number
const change = (amount, coins) => {
    if(amount === 0) return 1;
    if(amount < 0 || coins.length === 0) return 0;

    let copy = coins.slice(0);

    return (
      // we use a coin
      change(amount - copy.pop(), coins) +
      // we discard it
      change(amount, copy)
    );
};

// SOLUTION 2:

// change :: (Number, [[Number]]) -> Number
const change = (amount, coins) => {
    let dp = Array.from({ length: amount + 1 }, () => 0);
    dp[0] = 1;

    for(let coin of coins)
        for(let i = coin; i < dp.length; i++)
            dp[i] += dp[i - coin];

    return dp[dp.length - 1];
};
