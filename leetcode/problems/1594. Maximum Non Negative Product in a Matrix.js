// You are given a rows x cols matrix grid. Initially, you are located at the top-left corner (0, 0), and in each step, you can only move right or down in the matrix.

// Among all possible paths starting from the top-left corner (0, 0) and ending in the bottom-right corner (rows - 1, cols - 1), find the path with the maximum non-negative product. The product of a path is the product of all integers in the grid cells visited along the path.

// Return the maximum non-negative product modulo 109 + 7. If the maximum product is negative return -1.

// Notice that the modulo is performed after getting the maximum product.

 

// Example 1:

// Input: grid = [[-1,-2,-3],
//                [-2,-3,-3],
//                [-3,-3,-2]]
// Output: -1
// Explanation: It's not possible to get non-negative product in the path from (0, 0) to (2, 2), so return -1.
// Example 2:

// Input: grid = [[1,-2,1],
//                [1,-2,1],
//                [3,-4,1]]
// Output: 8
// Explanation: Maximum non-negative product is in bold (1 * 1 * -2 * -4 * 1 = 8).
// Example 3:

// Input: grid = [[1, 3],
//                [0,-4]]
// Output: 0
// Explanation: Maximum non-negative product is in bold (1 * 0 * -4 = 0).
// Example 4:

// Input: grid = [[ 1, 4,4,0],
//                [-2, 0,0,1],
//                [ 1,-1,1,1]]
// Output: 2
// Explanation: Maximum non-negative product is in bold (1 * -2 * 1 * -1 * 1 * 1 = 2).
 

// Constraints:

// 1 <= rows, cols <= 15
// -4 <= grid[i][j] <= 4

// maxProductPath :: [[Number]] -> Number
const maxProductPath = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    const min = [...grid.map(row => [...row])];
    const max = [...grid.map(row => [...row])];
    
    for(let i = 1; i < m; i++) {
      min[i][0] *= min[i - 1][0];
      max[i][0] *= max[i - 1][0];
    }
  
    for(let j = 1; j < n; j++) {
      min[0][j] *= min[0][j - 1];
      max[0][j] *= max[0][j - 1];
    }
    // TODO: refactor above code
    
    for(let i = 1; i < m; i++) {
      for(let j = 1; j < n; j++) {
        if(grid[i][j] < 0) {
          max[i][j] *= Math.min(min[i - 1][j], min[i][j - 1]);
          min[i][j] *= Math.max(max[i - 1][j], max[i][j - 1]);
        } else {
          max[i][j] *= Math.max(max[i - 1][j], max[i][j - 1]);
          min[i][j] *= Math.min(min[i - 1][j], min[i][j - 1]);
        }
      }
    }
    
    const result = max[m - 1][n - 1] % (1e9 + 7);
    if(result === -0) return 0;
    return result > 0 ? result : - 1;
  };