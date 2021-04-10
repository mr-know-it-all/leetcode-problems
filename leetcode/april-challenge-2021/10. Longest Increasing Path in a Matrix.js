// Given an m x n integers matrix, return the length of the longest increasing path in matrix.

// From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

 

// Example 1:


// Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
// Output: 4
// Explanation: The longest increasing path is [1, 2, 6, 9].
// Example 2:


// Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
// Output: 4
// Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
// Example 3:

// Input: matrix = [[1]]
// Output: 1
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 200
// 0 <= matrix[i][j] <= 231 - 1

// longestIncreasingPath :: [[Number]] -> Number
const longestIncreasingPath = (matrix) => {
    const dp = {};
    
    function dfs(i, j, visited) {
      if(dp[i + '-' + j]) return dp[i + '-' + j];
      
      const dirs = [
        [i - 1, j],
        [i + 1, j],
        [i, j + 1],
        [i, j - 1]
      ];
      
      let max = 1;
      for(let [ii, jj] of dirs) {
        if(matrix[ii] && matrix[ii][jj] && matrix[ii][jj] > matrix[i][j]) {
          max = Math.max(max, dfs(ii, jj) + 1);
        }
      }
      
      return dp[i + '-' + j] = max;
    }
    
    let res = 0;
    for(let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[0].length; j++) {
        res = Math.max(res, dfs(i, j));
      }
    }
    
    return res;
  };
