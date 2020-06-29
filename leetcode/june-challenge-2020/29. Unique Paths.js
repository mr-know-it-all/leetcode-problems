// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

// uniquePaths :: (Number, Number) -> Number
const uniquePaths = function(m, n) {
    const dp = Array.from({ length: m}, () => Array.from({ length: n }));

    for(let i = 0; i < n; i++) dp[0][i] = 1;
    for(let i = 0; i < m; i++) dp[i][0] = 1;

    for(let i = 1; i < m; i++)
        for(let j = 1; j < n; j++)
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];

    return dp[m - 1][n - 1];
};
