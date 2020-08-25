// https://leetcode.com/problems/detect-cycles-in-2d-grid/

// Given a 2D array of characters grid of size m x n, you need to find if there exists any cycle consisting of the same value in grid.
//
// A cycle is a path of length 4 or more in the grid that starts and ends at the same cell. From a given cell, you can move to one of the cells adjacent to it - in one of the four directions (up, down, left, or right), if it has the same value of the current cell.
//
// Also, you cannot move to the cell that you visited in your last move. For example, the cycle (1, 1) -> (1, 2) -> (1, 1) is invalid because from (1, 2) we visited (1, 1) which was the last visited cell.
//
// Return true if any cycle of the same value exists in grid, otherwise, return false.

// TODO: clean up code, at least rename variables to make the code easier to read
// also describe the solution, add comments in code

// containsCycle :: [[String]] -> Boolean
const containsCycle = grid => {
    const [m, n] = [grid.length, grid[0].length];
    const visited = {};

    const dfs = (i, j, ii = '*', jj = '*') => {
        if(visited[i + '-' + j]) return true;
        visited[i + '-' + j] = true;

        for(let [_i, _j] of [[i - 1, j], [i + 1, j], [i, j + 1], [i, j - 1]]) {
            if(0 <= _i && _i < m && 0 <= _j && _j < n) {
                if(grid[i][j] === grid[_i][_j] && (_i + '-' + _j) !== (ii + '-' + jj)) {
                    if(dfs(_i, _j, i, j)) return true;
                }
            }
        }
        return false;
    }
    let found = false;
    f1:for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(visited[i + '-' + j]) continue;
            if(dfs(i, j)) {
                found = true;
                break f1;
            }
        }
    }
    return found;
};
