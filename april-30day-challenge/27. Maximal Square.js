// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// maximalSquare :: [[String]] -> Number
var maximalSquare = function(matrix) {
    if(matrix.length === 0) return 0;
    let max = 0;

    const expand = (i, j, size) => {
        let isSquare = true;
        for(let s = 1; s <= size; s++) {
            const left = matrix[i][j - s];
            const up = matrix[i - s][j];
            if(left === '0' || up === '0' || left === undefined || up === 'undefined') {
                isSquare = false;
                break;
            }
        }

        if(isSquare) {
            max = Math.max(max, size + 1);
            if(i + 1 < matrix.length && j + 1 < matrix[i].length && matrix[i + 1][j + 1] === '1') {
                expand(i + 1, j + 1, size + 1);
            }
        }
    }

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] === '1') {
                max = Math.max(max, 1);

                if(i + 1 < matrix.length && j + 1 < matrix[i].length && matrix[i + 1][j + 1] === '1') {
                    expand(i + 1, j + 1, 1);
                }
            }
        }
    }

    return max * max;
};
