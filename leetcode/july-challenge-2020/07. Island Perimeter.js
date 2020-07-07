// You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.
//
// Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
//
// The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
//
//
//
// Example:
//
// Input:
// [[0,1,0,0],
//  [1,1,1,0],
//  [0,1,0,0],
//  [1,1,0,0]]
//
// Output: 16

// islandPerimeter :: [[Number]] -> Number
const islandPerimeter = grid => {
    let perimeter = 0;
    const visited = {};

    const dfs = (i, j) => {
        if(visited[`${i}-${j}`]) return;
        visited[`${i}-${j}`] = true;

        const up = grid[i - 1] && grid[i - 1][j] || 0;
        const down = grid[i + 1] && grid[i + 1][j] || 0;
        const left = grid[i] && grid[i][j - 1] || 0;
        const right = grid[i] && grid[i][j + 1] || 0;

        if(up === 1) dfs(i - 1, j);
        else perimeter++;

        if(down === 1) dfs(i + 1, j);
        else perimeter++;

        if(left === 1) dfs(i, j - 1);
        else perimeter++;

        if(right === 1) dfs(i, j + 1);
        else perimeter++;
    }

    for(let i = 0; i < grid.length; i++)
        for(let j = 0; j < grid[0].length; j++)
            if(grid[i][j] === 1) { dfs(i, j); break; }

    return perimeter;
};
