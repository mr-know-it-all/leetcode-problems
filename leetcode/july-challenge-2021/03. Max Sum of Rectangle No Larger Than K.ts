// Given an m x n matrix matrix and an integer k, return the max sum of a rectangle in the matrix such that its sum is no larger than k.

// It is guaranteed that there will be a rectangle with a sum no larger than k.

 

// Example 1:


// Input: matrix = [[1,0,1],[0,-2,3]], k = 2
// Output: 2
// Explanation: Because the sum of the blue rectangle [[0, 1], [-2, 3]] is 2, and 2 is the max number no larger than k (k = 2).
// Example 2:

// Input: matrix = [[2,2,-1]], k = 3
// Output: 3
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -100 <= matrix[i][j] <= 100
// -105 <= k <= 105
 

// Follow up: What if the number of rows is much larger than the number of columns?

// SOLUTION 1:
// Brute Force - TLE

function _maxSumSubmatrix(matrix: number[][], k: number): number {
    let max = -Infinity;
    
    const m = matrix.length;
    const n = matrix[0].length;
    
    f: for(let rowLen = 1; rowLen <= m; rowLen++) {
        for(let colLen = 1; colLen <= n; colLen++) {
            for(let i = 0; i + rowLen <= m; i++) {
                for(let j = 0; j + colLen <= n; j++) {
                    let sum = 0;
                    
                    for(let x = 0; x < rowLen; x++) {
                        for(let y = 0; y < colLen; y++) {
                        
                            sum += matrix[x + i][y + j];
                        }
                    }
                    
                    if(sum === k) {
                        max = k;
                        break f;
                    }
                    if(sum < k) max = Math.max(max, sum);
                }
            }
        }
    }
    
    return max;
};

// SOLUTION 2:

function maxSumSubmatrix(matrix: number[][], k: number): number {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    // will store collapsed value of every column
    const sums = Array(rows);
    
    let max = -Infinity;
    // starting from every column
    for(let c1 = 0; c1 < cols; c1++) {
        // reset collapsed columns sums
        sums.fill(0);
        
        // from c1'th column to the last column
        for(let c2 = c1; c2 < cols; c2++) {
            // collapse column in one row
            // as c2 increases, sums[row] will increase/decrease with next c2 column values for that row
            for(let row = 0; row < rows; row++) {
                sums[row] += matrix[row][c2];
            }
            
            // compute sum starting from every row
            for(let r1 = 0; r1 < rows; r1++) {
                let sum = 0;
                
                for(let r2 = r1; r2 < rows; r2++) {
                    sum += sums[r2];
                    
                    // this check will make sure all rectangles that are possible will be included
                    if(sum > max && sum <= k) {
                        max = sum;
                    }
                }
            }
        }
    }
        
    return max;
};
