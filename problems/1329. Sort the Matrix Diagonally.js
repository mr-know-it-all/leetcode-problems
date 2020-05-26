// https://leetcode.com/problems/sort-the-matrix-diagonally/

// Given a m * n matrix mat of integers, sort it diagonally in ascending order from the top-left to the bottom-right then return the sorted array.

// SOLUTION 1:
// TODO: write faster solution

// diagonalSort :: [[Number]] -> [[Number]]
const diagonalSort = function(matrix) {
    if(matrix.length === 0) return matrix;

    // nextInBounds :: (Number, Number) -> Boolean
    const nextInBounds = (x, y) =>
        matrix[x + 1] !== undefined && matrix[x + 1][y + 1] !== undefined;

    const rows = matrix.length;
    const cols = matrix[0].length;

    const diagonals = {};

    // add diagonals that start on the first row from first column
    for(let i = 1; i < cols; i++) {
        const startCell = `0-${i}`;
        diagonals[startCell] = [matrix[0][i]];

        let [x, y] = [0, i];
        while(nextInBounds(x, y)) diagonals[startCell].push(matrix[++x][++y]);
    }

    // add diagonals that start on the first column of each row
    for(let i = 0; i < rows; i++) {
        const startCell = `${i}-0`;
        diagonals[startCell] = [matrix[i][0]];

        let [x, y] = [i, 0];
        while(nextInBounds(x, y)) diagonals[startCell].push(matrix[++x][++y]);
    }

    // sort every diagonal (could use insertion sort when adding them for better performance)
    // and add the values back in original matrix (in place, better space complexity)
    Object.entries(diagonals).forEach(([key, val]) => {
        let [x, y] = key.split('-');

        val.sort((a, b) => a - b);

        for(let i = 0; i < val.length; i++) matrix[x++][y++] = val[i];
    });

    return matrix;
};
