// https://leetcode.com/problems/sudoku-solver/submissions/

// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// Empty cells are indicated by the character '.'.

// isValidRow :: [[String]] -> (Number, String) -> Boolean
const isValidRow = board => (row, val) => !board[row].some(col => col === val);

// isValidCol :: [[String]] -> (Number, String) -> Boolean
const isValidCol = board => (col, val) => !board.some(row => row[col] === val);

// isValidSquare :: [[String]] -> (Number, Number, String) -> Boolean
const isValidSquare = board => (row, col, val) => {
    const sRow = Math.floor(row / 3) * 3;
    const sCol = Math.floor(col / 3) * 3;

    for(let i = sRow; i < sRow + 3; i++) {
        for(let j = sCol; j < sCol + 3; j++) {
            // exclude current square
            if(i === row && j === col) continue;
            if(board[i][j] === val) return false
        }
    }

    return true;
}

// validate :: [[String]] -> (Number, Number, String)
const validate = board => (row, col, val) => (
    isValidRow(board)(row, val) &&
    isValidCol(board)(col, val) &&
    isValidSquare(board)(row, col, val)
);

// getEmptySquare :: [[String]] -> [Number, Number] | ()
const getEmptySquare = board => {
    for(let i = 0; i < 9; i++)
        for(let j = 0; j < 9; j++)
            if(board[i][j] === '.') return [i, j];
}

// solveSudoku :: [[String]] -> ()
const solveSudoku = board => {
    // findSolution :: () -> ()
    const findSolution = () => {
        const emptyPos = getEmptySquare(board);

        // there are no more empty squares, we found a solution!
        if(!emptyPos) return true;

        // we'll process the current empty position
        const [row, col] = emptyPos;

        // for every possible value of a square
        for(let i = 1; i <= 9; i++) {
            const value = String(i);

            // note: this choice could be optimized,
            // the validity check could be replaced by a record of possible values computed via constraint propagation
            const isValid = validate(board)(row, col, value);

            // if this value is legit in the current empty square
            if(isValid) {
                // add it
                board[row][col] = value;

                // recurse for the other cells
                // this function will get the next empty cell and will go on untill it either backtracks (B) or fills all squares
                if(findSolution()) return true;

                // if no complete solution was found, previous choices will be removed
                board[row][col] = '.';
            }
        }

        // no possible value was found to be valid
        // this will signal the backtracking (B)
        return false;
    }

    findSolution();
};
