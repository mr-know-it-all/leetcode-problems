// You are climbing a stair case. It takes n steps to reach to the top.
//
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
//
// Example 1:
//
// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:
//
// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
//
//
// Constraints:
//
// 1 <= n <= 45

// SOLUTION 1:

// climbStairs :: Number -> Number
const climbStairs = n => {
    let [a, b] = [1, 1];

    for(let i = 2; i < n + 1; i++) {
        [a, b] = [b, a + b];
    }

    return b;
};

// SOLUTION 2:

// climbStairs :: Number -> Number
const climbStairs = n => {
    const dp = {};

    return (function climb(s) {
        return (
            dp[s]
            ? dp[s]
            : s >= n
            ? Number(s === n)
            : dp[s] = climb(s + 1) + climb(s + 2)
        );
    })(0);
};
