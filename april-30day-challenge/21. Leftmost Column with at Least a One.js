// A binary matrix means that all elements are 0 or 1. For each individual row of the matrix, this row is sorted in non-decreasing order.
//
// Given a row-sorted binary matrix binaryMatrix, return leftmost column index(0-indexed) with at least a 1 in it. If such index doesn't exist, return -1.
//
// You can't access the Binary Matrix directly.  You may only access the matrix using a BinaryMatrix interface:
//
// BinaryMatrix.get(row, col) returns the element of the matrix at index (row, col) (0-indexed).
// BinaryMatrix.dimensions() returns a list of 2 elements [rows, cols], which means the matrix is rows * cols.
// Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer.  Also, any solutions that attempt to circumvent the judge will result in disqualification.
//
// For custom testing purposes you're given the binary matrix mat as input in the following four examples. You will not have access the binary matrix directly.

/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

// find :: BinaryMatrix M => M -> Number -> Number -> Number
const find = matrix => w => row => {
    let start = 0;
    let end = w;

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);

        if(matrix.get(row, mid) === 0) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return start;
}

// leftMostColumnWithOne :: BinaryMatrix M => M -> Number
var leftMostColumnWithOne = function(matrix) {
    const [h, w] = matrix.dimensions();
    const findVal = find(matrix)(w);

    let leftmost = Infinity;

    for(let i = 0; i < h; i++) {
        const temp = findVal(i);
        leftmost = Math.min(leftmost, temp);
    }

    return leftmost === w ? -1 : leftmost;
};
