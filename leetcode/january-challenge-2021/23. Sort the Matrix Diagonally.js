// A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction until reaching the matrix's end. For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix, includes cells mat[2][0], mat[3][1], and mat[4][2].

// Given an m x n matrix mat of integers, sort each matrix diagonal in ascending order and return the resulting matrix.

 

// Example 1:


// Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
// Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]
 

// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 100
// 1 <= mat[i][j] <= 100

// SOLUTION 1:

// diagonalSort :: [[Number]] -> [[Number]]
const diagonalSort = function(matrix) {
    let m = matrix.length;
    if(m === 0) return matrix;
    let n = matrix[0].length;

    const diagonals = {};
    
    for(let i = 0; i < n; i++) {
        const start = `0:${i}`;
        diagonals[start] = [];
        let [x, y] = [0, i];
        while(matrix[x] && matrix[x][y]) diagonals[start].push(matrix[x++][y++]);
        
        diagonals[start].sort((a, b) => a - b);
    }

    for(let i = 0; i < m; i++) {
        const start = `${i}:0`;
        diagonals[start] = [];
        let [x, y] = [i, 0];
        while(matrix[x] && matrix[x][y]) diagonals[start].push(matrix[x++][y++]);
        
        diagonals[start].sort((a, b) => a - b);
    }

    for(let [start, diagonal] of Object.entries(diagonals)) {
        let [x, y] = start.split(':');

        while(diagonal.length) matrix[x++][y++] = diagonal.shift();
    }
    
    return matrix;
};

// SOLUTION 2:

// insert :: Ord a => [a] -> a -> ()
const insert = xs => x => {
    let i = 0;
    while(x > xs[i]) i++;
    xs.splice(i, 0, x)
}

// diagonalSort :: [[Number]] -> [[Number]]
const diagonalSort = function(matrix) {
    let m = matrix.length;
    if(m === 0) return matrix;
    let n = matrix[0].length;

    const diagonals = {};
    
    for(let i = 0; i < n; i++) {
        const start = `0:${i}`;
        diagonals[start] = [];
        let [x, y] = [0, i];
        while(matrix[x] && matrix[x][y])
            insert(diagonals[start])(matrix[x++][y++]);
    }

    for(let i = 0; i < m; i++) {
        const start = `${i}:0`;
        diagonals[start] = [];
        let [x, y] = [i, 0];
        while(matrix[x] && matrix[x][y])
            insert(diagonals[start])(matrix[x++][y++]);
    }

    for(let [start, diagonal] of Object.entries(diagonals)) {
        let [x, y] = start.split(':');
        
        for(let val of diagonal) matrix[x++][y++] = val;
    }
    
    return matrix;
};