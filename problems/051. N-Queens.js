// https://leetcode.com/problems/n-queens/submissions/

// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

// buildRow :: Number -> Number -> String
const buildRow = n => col => '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1);

// isValid :: [String] -> (Number, Number) -> Boolean
const isValid = solvedRows => (row, col) => !solvedRows.some(
    (itemCol, itemRow) => (
        // exclude current element
        itemCol === col ||
        // check diagonally
        itemCol + itemRow === col + row ||
        itemCol - itemRow === col - row
    )
);

// solveNQueens :: Number -> [String]
const solveNQueens = n => {
    const res = [];
    const solvedRows = [];

    // search :: Number -> ()
    const search = (row = 0) => {
        // we have a complete board, let's make it a string and add it to result
        if(row === n) {
            res.push(solvedRows.map(buildRow(n)));
            return;
        }

        for (let col = 0; col < n; col++) {
            // if we have a legit queen placement for a column
            if(isValid(solvedRows)(row, col)) {
                // col is obviously the index of the column
                // the index that col value has in the board array will represent the row
                // add this queen placement to solvedRows
                solvedRows.push(col);

                // this will find all queen placements (until row === n) from current row and col
                search(row + 1);

                // after all the recursive steps started above are finished
                // either by completing a board or stopping early
                // remove this col placement and continue with the next col choice
                solvedRows.pop();
            }
        }
    }

    // start searching for possible board placements!
    search();

    return res;
};
