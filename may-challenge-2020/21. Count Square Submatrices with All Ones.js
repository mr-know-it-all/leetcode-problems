// Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

// SOLUTION 1:
// almost identical to the solution for Maximal Square problem (https://leetcode.com/problems/maximal-square/)

// countSquares :: [[Number]] -> Number
const countSquares = matrix => {
    const m = matrix.length;
    const n = matrix[0].length;
    let count = 0;

    // expandOneBottomRight :: (Number, Number, Number) -> ()
    const expandOneBottomRight = (i, j, size) => {
        let isSquare = true;
        for(let s = 1; s <= size; s++) {
            const left = matrix[i][j - s];
            const up = matrix[i - s][j];
            const outOfBounds = left === undefined || up === undefined;

            if(outOfBounds || left === 0 || up === 0) {
                isSquare = false;
                break;
            }
        }

        if(isSquare) {
            count++;
            const nextDiagonalInBounds = i + 1 < m && j + 1 < n;

            if(nextDiagonalInBounds && matrix[i + 1][j + 1] === 1) {
                expandOneBottomRight(i + 1, j + 1, size + 1);
            }
        }
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] === 1) {
                count++;
                const nextDiagonalInBounds = i + 1 < m && j + 1 < n;

                if(nextDiagonalInBounds && matrix[i + 1][j + 1] === 1) {
                    expandOneBottomRight(i + 1, j + 1, 1);
                }
            }
        }
    }

    return count;
};
