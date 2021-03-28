// Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

// Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.

// Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

// Note:

// The order of returned grid coordinates does not matter.
// Both m and n are less than 150.
 

// Example:

// Given the following 5x5 matrix:

//   Pacific ~   ~   ~   ~   ~ 
//        ~  1   2   2   3  (5) *
//        ~  3   2   3  (4) (4) *
//        ~  2   4  (5)  3   1  *
//        ~ (6) (7)  1   4   5  *
//        ~ (5)  1   1   2   4  *
//           *   *   *   *   * Atlantic

// Return:

// [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).
 
// SOLUTION 1:

// pacificAtlantic :: [[Number]] -> [[Number]]
const pacificAtlantic = (matrix) => {
    const dfs = (ocean) => (i, j, visited = new Set()) => {
      if(visited.has(i + ':' + j)) return false;
      visited.add(i + ':' + j);
      
      if((i === -1 || j === -1)) return ocean === 0;
      if((i === matrix.length || j === matrix[0].length)) return ocean === 1;
      
      let neighbors = [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]];
      
      for(let [ii, jj] of neighbors) {
        if(ii === -1 || jj === -1 || ii === matrix.length || jj === matrix[0].length) {
          if(dfs(ocean)(ii, jj, visited)) return true;
        } else {
          if(matrix[i][j] >= matrix[ii][jj]) {
            if(dfs(ocean)(ii, jj, visited)) return true;
          }
        }
      }
      
      return false;
    }
      
    const result = [];
    for(let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[0].length; j++) {
        if(dfs(0)(i, j) && dfs(1)(i, j)) result.push([i, j]);
      }
    }
    
    return result;
  };