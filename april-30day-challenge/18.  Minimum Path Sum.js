// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
//
// Note: You can only move either down or right at any point in time.

// minPathSum :: [[Number]] -> Number
const minPathSum = grid => {
    const n = grid.length;
    const m = grid[0].length;

    for(let i=1; i<n; i++) grid[i][0] += grid[i-1][0];
    for(let j=1; j<m; j++) grid[0][j] += grid[0][j-1];

    for(let i = 1; i < n; i++) {
        for(let j = 1; j < m; j++) {
            const up = grid[i - 1][j];
            const left = grid[i][j - 1];
            grid[i][j] += Math.min(up, left);
        }
    }

    return grid[n-1][m-1];
};
