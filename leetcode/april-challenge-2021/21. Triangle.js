// Given a triangle array, return the minimum path sum from top to bottom.

// For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

// Example 1:

// Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// Output: 11
// Explanation: The triangle looks like:
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
// Example 2:

// Input: triangle = [[-10]]
// Output: -10
 

// Constraints:

// 1 <= triangle.length <= 200
// triangle[0].length == 1
// triangle[i].length == triangle[i - 1].length + 1
// -104 <= triangle[i][j] <= 104
 

// Follow up: Could you do this using only O(n) extra space, where n is the total number of rows in the triangle?

// SOLUTION 1:
// TLE

// minimumTotal :: [[Number]] -> Number
const minimumTotal = (triangle) => {
    const end = triangle.length;
    
    const dfs = (i, j) => {
      if(i === end) return 0;
      
      return Math.min(
        triangle[i][j] + dfs(i + 1, j),
        (triangle[i][j + 1] !== undefined 
         ? triangle[i][j + 1] + dfs(i + 1, j + 1)
         : Infinity)
      );
    };
    
    return dfs(0, 0);
};

// SOLUTION 2:

// minimumTotal :: [[Number]] -> Number
const minimumTotal = (triangle) => {
    for(let i = triangle.length - 1; i > 0; i--) {
      for(let j = triangle[i].length - 2; j >= 0; j--) {
        triangle[i - 1][j] += Math.min(
          triangle[i][j],
          triangle[i][j + 1]
        );
      }
    }
    
    return triangle[0][0];
};