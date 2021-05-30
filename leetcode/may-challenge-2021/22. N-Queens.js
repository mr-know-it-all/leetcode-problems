// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

 

// Example 1:


// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
// Example 2:

// Input: n = 1
// Output: [["Q"]]
 

// Constraints:

// 1 <= n <= 9

// isValid = ([Number], Number, Number) -> Boolean
const isValid = (board, row, col) => {
    for(let i = row; i >= 0; i--) {
        if(board[i][col] === 1) return false;
    }
    
    for(let i = row, m = 0; i >= 0; i--, m++) {
        if(board[i][col - m] === 1 || board[i][col + m] === 1) return false;
    }
    
    return true;
};

// buildRow :: [Number] -> String
const buildRow = row => row.reduce((acc, cell) => acc + (cell === 0 ? '.' : 'Q'), '');

// solveNQueens :: Number -> [String]
const solveNQueens = (n) => {
    const board = new Array(n).fill().map(() => new Array(n).fill(0));
    const result = [];
    
    (function compute(row) {
        if(row === n) {
            result.push(board.map(buildRow));
            return;
        }
        
        for(let col = 0; col < n; col++) {
            if(isValid(board, row, col)) {
                board[row][col] = 1;
                compute(row + 1);
                board[row][col] = 0;
            }
        }
    })(0);

    return result;
};