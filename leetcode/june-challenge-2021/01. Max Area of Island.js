// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

 

// Example 1:


// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island must be connected 4-directionally.
// Example 2:

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 50
// grid[i][j] is either 0 or 1.

// maxAreaOfIsland :: [[Number]] -> Number
const maxAreaOfIsland = (grid) => {
    const visited = {};
    const dp = {};
    const compute = (row, col) => {   
        let count = 0;
        
        if(dp[row + ':' + col]) return dp[row + ':' + col];
        visited[row + ':' + col] = true;
        
        if(grid[row + 1] && grid[row + 1][col] && !visited[(row + 1) + ':' + col]) {
           count += compute(row + 1, col);
        }
        if(grid[row - 1] && grid[row - 1][col] && !visited[(row - 1) + ':' + col]) {
            count += compute(row - 1, col);
        }
        if(grid[row][col + 1] && !visited[row + ':' +  (col + 1)]) {
            count += compute(row, col + 1);
        }
        if(grid[row][col - 1] && !visited[row + ':' + (col - 1)]) {
            count += compute(row, col - 1);
        }
        
        return dp[row + ':' + col] = count + 1;
    }
    
    let max = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i] && grid[i][j] && !visited[i + ':' + j]) {
                max = Math.max(max, compute(i, j));
            }
        }
    }
    
    return max;
};