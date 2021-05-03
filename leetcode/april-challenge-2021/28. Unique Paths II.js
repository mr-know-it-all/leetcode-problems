// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and space is marked as 1 and 0 respectively in the grid.

 

// Example 1:


// Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
// Output: 2
// Explanation: There is one obstacle in the middle of the 3x3 grid above.
// There are two ways to reach the bottom-right corner:
// 1. Right -> Right -> Down -> Down
// 2. Down -> Down -> Right -> Right
// Example 2:


// Input: obstacleGrid = [[0,1],[0,0]]
// Output: 1
 

// Constraints:

// m == obstacleGrid.length
// n == obstacleGrid[i].length
// 1 <= m, n <= 100
// obstacleGrid[i][j] is 0 or 1.

// SOLUTION 1:

// uniquePathsWithObstacles :: [[Number]] => Number
const uniquePathsWithObstacles = (grid) => {
    const m = grid.length;
    const n = grid[0].length;
    const dp = new Array(m).fill().map(() => new Array(n).fill(0));
    
    return (function dfs(i, j) {
      if(grid[i][j] === 1) return 0;
      if(dp[i][j]) return dp[i][j];
      
      let count = 0;
    
      if(i === m - 1 && j === n - 1) {
        return 1;
      } else {
        if(i + 1 < m && grid[i + 1][j] !== 1) {
          count += dfs(i + 1, j);
        } 
        if(j + 1 < n && grid[i][j + 1] !== 1) {
          count += dfs(i, j + 1);
        }
        
        return dp[i][j] = count;
      }
    })(0, 0);
};

// SOLUTION 2:

// uniquePathsWithObstacles :: [[Number]] => Number
const uniquePathsWithObstacles = (grid) => {
    const m = grid.length;
    const n = grid[0].length;
    const dp = new Array(m).fill().map(() => new Array(n).fill(0));
    
    if(grid[0][0] === 1) return 0;
    if(grid[m - 1][n - 1] === 1) return 0;
    dp[0][0] = 1;
    
    for(let i = 1; i < n; i++) {
      if(grid[0][i - 1] === 0) dp[0][i] = dp[0][i - 1];
    }
    
    for(let i = 1; i < m; i++) {
      if(grid[i - 1][0] === 0) dp[i][0] = dp[i - 1][0];
    }
    
    for(let i = 1; i < m; i++) {
      for(let j = 1; j < n; j++) {
        if(grid[i][j] === 1) {
          dp[i][j] = 0;
        } else {
          let count = 0;
          
          if(grid[i - 1][j] === 0) count += dp[i - 1][j];
          if(grid[i][j - 1] === 0) count += dp[i][j - 1];
          
          dp[i][j] += count;
        }
        
      }
    }
    
    return dp[m - 1][n - 1];
};