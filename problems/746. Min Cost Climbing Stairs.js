// https://leetcode.com/problems/min-cost-climbing-stairs/

// On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

// Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

// minCostClimbingStairs :: [Number] -> Number
const minCostClimbingStairs = cost => {
    const dp = Array.from({ length: cost.length });

    dp[0] = cost[0];
    dp[1] = cost[1];

    for(let i = 2; i <= cost.length; i++) {
        // choose the cheapest step
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + (cost[i] || 0);
    }

    return dp[dp.length - 1];
};
