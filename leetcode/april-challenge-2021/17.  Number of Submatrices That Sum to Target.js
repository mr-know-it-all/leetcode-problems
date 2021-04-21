// Given a matrix and a target, return the number of non-empty submatrices that sum to target.

// A submatrix x1, y1, x2, y2 is the set of all cells matrix[x][y] with x1 <= x <= x2 and y1 <= y <= y2.

// Two submatrices (x1, y1, x2, y2) and (x1', y1', x2', y2') are different if they have some coordinate that is different: for example, if x1 != x1'.

 

// Example 1:


// Input: matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
// Output: 4
// Explanation: The four 1x1 submatrices that only contain 0.
// Example 2:

// Input: matrix = [[1,-1],[-1,1]], target = 0
// Output: 5
// Explanation: The two 1x2 submatrices, plus the two 2x1 submatrices, plus the 2x2 submatrix.
// Example 3:

// Input: matrix = [[904]], target = 0
// Output: 0
 

// Constraints:

// 1 <= matrix.length <= 100
// 1 <= matrix[0].length <= 100
// -1000 <= matrix[i] <= 1000
// -10^8 <= target <= 10^8

// SOLUTION 1:

// numSubmatrixSumTarget :: ([[Number]], Number) -> Number
const numSubmatrixSumTarget = function(matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  const prefixSums = new Array(matrix.length + 1)
    .fill()
    .map(() => new Array(matrix[0].length + 1).fill(0));
    
  for(let i = 1; i <= rows; i++) {
    for(let j = 1; j <= cols; j++) {
      prefixSums[i][j] = (
        matrix[i-1][j-1] +
        prefixSums[i-1][j] +
        prefixSums[i][j-1] -
        prefixSums[i-1][j-1]
      );
    }
  }
    
  let count = 0;
  for(let r1 = 1; r1 <= rows; r1++) {
    for(let r2 = r1; r2 <= rows; r2++) {
      const counts = {};
      counts[0] = 1;
      for(let c = 1; c <= cols; c++) {
        const sum = prefixSums[r2][c] - prefixSums[r1 - 1][c];
        count += counts[sum - target] || 0;
        counts[sum] = (counts[sum] || 0) + 1;
      }
    }
  }
    
  return count;
};

// SOLUTION 2:

// numSubmatrixSumTarget :: ([[Number]], Number) -> Number
const numSubmatrixSumTarget = function(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  // calculate prefix sums for every row
  for (const row of matrix) {
    for (let j = 0; j < n - 1; j++) {
      row[j + 1] += row[j];
    }
  }

  let count = 0;

  for (let leftCol = 0; leftCol < n; leftCol++) {
    for (let rightCol = leftCol; rightCol < n; rightCol++) {
      const sumMap = new Map();
      sumMap.set(0, 1); // sum -> num of sub matrices whose sum equals sum
      let prefixSum = 0; // sum of matrix (0, left_col, i, right_col)
      for (let i = 0; i < m; i++) {
        prefixSum += matrix[i][rightCol] - (leftCol > 0 ? matrix[i][leftCol - 1] : 0);
        if (sumMap.has(prefixSum - target)) {
          count += sumMap.get(prefixSum - target);
        }
        sumMap.set(prefixSum, (sumMap.get(prefixSum) || 0) + 1);
      }
    }
  }

  return count;
};

// SOLUTION 3:
// TLE...

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
 var numSubmatrixSumTarget = function(matrix, target) {
  let count =  0;
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      
      for(let rlen = 1; i + rlen <= rows; rlen++) {
        for(let clen = 1; j + clen <= cols; clen++) {
          let sum = 0;
          
          for(let row = i; row < i + rlen; row++) {
            for(let col = j; col < j + clen; col++) {
              sum += matrix[row][col];
            }
          }
              
          if(sum === target) count++;
        }
      }
    }
  }

  return count;
};