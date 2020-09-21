// On a 2-dimensional grid, there are 4 types of squares:
//
// 1 represents the starting square.  There is exactly one starting square.
// 2 represents the ending square.  There is exactly one ending square.
// 0 represents empty squares we can walk over.
// -1 represents obstacles that we cannot walk over.
// Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.
//
//
//
// Example 1:
//
// Input: [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
// Output: 2
// Explanation: We have the following two paths:
// 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
// 2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)
// Example 2:
//
// Input: [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
// Output: 4
// Explanation: We have the following four paths:
// 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
// 2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
// 3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
// 4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)
// Example 3:
//
// Input: [[0,1],[2,0]]
// Output: 0
// Explanation:
// There is no path that walks over every empty square exactly once.
// Note that the starting and ending square can be anywhere in the grid.
//
//
// Note:
//
// 1 <= grid.length * grid[0].length <= 20

// uniquePathsIII :: [[Number]] -> Number
const uniquePathsIII = (grid) => {
    let paths = 0;

    let [start, toVisit] = (function findStart() {
        let start, toVisit = 0;

        for(let i = 0; i < grid.length; i++) {
            for(let j = 0; j < grid[0].length; j++) {
                if(grid[i][j] === 1) start = [i, j];
                else if(grid[i][j] !== -1) toVisit++;
            }
        }

        return [start, toVisit];
    })();

    const visiting = [];

    (function dfs(r, c, toVisit) {
        let cell = `r-${r} c-${c}`
        if(visiting[cell]) return;

        if(r < 0 || r > grid.length -1 || c < 0 || c > grid[0].length - 1 || grid[r][c] == -1) return false

        visiting[cell] = true;

        if(grid[r][c] == 2 && toVisit === 0) paths++;

        dfs(r-1, c, toVisit - 1)
        dfs(r+1, c, toVisit - 1)
        dfs(r, c-1, toVisit - 1)
        dfs(r, c+1, toVisit - 1)

        visiting[cell] = false;

    })(...start, toVisit);

    return paths;
};
