// In a given grid, each cell can have one of three values:
//
// the value 0 representing an empty cell;
// the value 1 representing a fresh orange;
// the value 2 representing a rotten orange.
// Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.
//
// Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.


// naive implementation sufficient for this problem
// clone :: a -> a
const clone = xs => JSON.parse(JSON.stringify(xs));

// orangesRotting :: [[Number]] -> Number
const orangesRotting = grid => {
    let count = 0;
    let live = 0;
    let updated = false;

    while(true) {
        updated = false;
        live = 0;

        let newGrid = clone(grid);

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                if(grid[i][j] === 1 && (
                    grid[i - 1] && grid[i - 1][j] === 2 ||
                    grid[i + 1] && grid[i + 1][j] === 2 ||
                    grid[i][j - 1] === 2 ||
                    grid[i][j + 1] === 2
                )) {
                    newGrid[i][j] = 2;
                    updated = true;
                }

                if(grid[i][j] === 1) live++;
            }
        }

        if(updated) {
            count++;
            grid = clone(newGrid);
        } else break;
    }

    return live > 0 ? -1 : count;
};
