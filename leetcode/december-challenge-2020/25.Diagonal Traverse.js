// Given a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image.

 

// Example:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]

// Output:  [1,2,4,7,5,3,6,8,9]

// Explanation:

 

// Note:

// The total number of elements of the given matrix will not exceed 10,000.

// findDiagonalOrder :: [[Number]] -> [Number]
const findDiagonalOrder = matrix => {
    if(matrix.length === 0) return [];
    
    const m = matrix.length;
    const n = matrix[0].length;
    const total = m * n;
    
    const result = [];
    let [i, j] = [0, 0];
    let dir = 'up';
    
    while(result.length < total) {
        if(i < m && j < n && i >= 0 && j >= 0) {
            result.push(matrix[i][j]);
            
            if(dir === 'up') {
                i--;
                j++;
            } else {
                i++;
                j--;
            }
        } else {
            if(dir === 'up') {
                i++;
                if(j === n) {
                    i++;
                    j--;
                }
                dir = 'down';
            } else {
                j++;
                if(i === m) {
                    j++;
                    i--;
                }
                dir = 'up';
            }
        }
    }
    
    return result;
};