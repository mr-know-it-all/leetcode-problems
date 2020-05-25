// https://leetcode.com/problems/search-a-2d-matrix/submissions/

// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
//
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

// SOLUTION 1:

// searchMatrix :: ([[Number]], Number) -> Boolean
const searchMatrix = (matrix, target) => {
    if(matrix.length === 0) return false;
    const width = matrix[0].length;
    const height = matrix.length;
    const size = width * height;

    let start = 0;
    let end = size - 1;

    while(start <= end) {
        const mid = Math.floor((start + end) / 2);
        const row = Math.floor(mid / width)
        const col = mid % width;

        if(matrix[row][col] === target) return true;
        if(matrix[row][col] < target) start = mid + 1;
        else end = mid - 1;
    }

    return false;
};

// SOLUTION 2:

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
