// Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.
 

// Example 1:


// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// Output: true
// Example 2:


// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
// Output: false
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= n, m <= 300
// -109 <= matix[i][j] <= 109
// All the integers in each row are sorted in ascending order.
// All the integers in each column are sorted in ascending order.
// -109 <= target <= 109

// SOLUTION 1:
// naive O(n * m)

// searchMatrix :: ([[Number]], Number) -> Booelean
const searchMatrix = (matrix, target) => {
    const m = matrix.length;
    const n = matrix[0].length;
    
    for(let i = 0; i < m; i++) {
        const row = matrix[i];
        
        if(row[0] <= target && row[n - 1] >= target) {
            if(row.find(e => e === target)) return true;
        }
    }
    
    return false;
};

// SOLUTION 2:
// O(m * log(n))

// searchMatrix :: ([[Number]], Number) -> Booelean
const searchMatrix = (matrix, target) => {
    const m = matrix.length;
    const n = matrix[0].length;
    
    for(let i = 0; i < m; i++) {
        const row = matrix[i];
        
        if(row[0] <= target && row[n - 1] >= target) {
            let start = 0;
            let end = n - 1;
            
            while(start <= end) {
                const mid = Math.floor((start + end) / 2);
                
                if(row[mid] === target) return true;
                else if(row[mid] < target) start = mid + 1;
                else end = mid - 1;
            }
        }
    }
    
    return false;
};

// SOLUTION 3:
// O(m + n)

// searchMatrix :: ([[Number]], Number) -> Booelean
const searchMatrix = (matrix, target) => {
    const m = matrix.length;
    const n = matrix[0].length;
    
    let [i, j] = [0, n - 1];
    while(i < m && j > -1) {
        if(matrix[i][j] < target) i++;
        else if(matrix[i][j] > target) j--;
        else return true;
    }
    
    return false;
};