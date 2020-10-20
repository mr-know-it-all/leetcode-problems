// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
 

// Example 1:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
// Output: true
// Example 2:


// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 13
// Output: false
// Example 3:

// Input: matrix = [], target = 0
// Output: false
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 0 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

// SOLUTION 1:

// searchMatrix :: ([[Number]], Number) -> Boolean
const searchMatrix = (matrix, target) => {
    const list = matrix.flatMap(x => x);
    let start = 0;
    let end = list.length - 1;
    
    while(start <= end) {
        const mid = Math.floor((start + end) / 2);
        if(list[mid] === target) return true;
        if(list[mid] < target) start = mid + 1;
        else end = mid - 1;
    }
    
    return false;
};

// SOLUTION 2:

// searchMatrix :: ([[Number]], Number) -> Boolean
const searchMatrix = (matrix, target) => {
    if(matrix.length === 0 || matrix[0].length === 0) return false;
    
    const row = (function () {
        let start = 0;
        let end = matrix.length;
        
        while(start <= end) {
            const mid = Math.floor((start + end) / 2);
            const row = matrix[mid];
            
            if(!row) return null;
            
            if(row[0] <= target && row[row.length - 1] >= target) return mid;
            
            if(row[0] > target) end = mid - 1;
            else start = mid + 1
        }
        
        return null;
    })();
    
    if(row === null) return false;
    
    const col = (function () {
        const list = matrix[row];
    
        let start = 0;
        let end = list.length - 1;
    
        while(start <= end) {
            const mid = Math.floor((start + end) / 2);

            if(list[mid] === target) return true;

            if(list[mid] < target) start = mid + 1;
            else end = mid - 1;
        }
    
        return null;
    })();
    
    if(col === null) return false;

    return true;
};

// SOLUTION 3:

// searchMatrix :: ([[Number]], Number) -> Boolean
const searchMatrix = (matrix, target) => {
    const n = matrix.length;
    if(n === 0) return false;
    const m = matrix[0].length;
    if(m === 0) return false;
    
    let start = 0;
    let end = m * n - 1;
    
    while(start !== end) {
        const mid = Math.floor((start + end) / 2);
        
        if(matrix[Math.floor(mid / m)][mid % m] < target) start = mid + 1;
        else end = mid;
    }
    return matrix[Math.floor(end / m)][end % m] === target;
};