  // Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

  const addToVisited = function(grid, x, y, visited) {
  if(x < 0 || x > grid.length - 1 || y < 0 || y > grid[x].length - 1) return;
  if(visited[`${x}-${y}`] === true) return;

  visited[`${x}-${y}`] = true;
  if(grid[x][y] === '0') return;

  addToVisited(grid, x - 1, y, visited);
  addToVisited(grid, x + 1, y, visited);
  addToVisited(grid, x, y - 1, visited);
  addToVisited(grid, x, y + 1, visited);
};

// numIslands :: [[Number]] -> Number
const numIslands = grid => {
  let visited = {};

  let count = 0;
  for(let x = 0; x < grid.length; x++) {
    for(let y = 0; y < grid[x].length; y++) {
      if(!visited[`${x}-${y}`] && grid[x][y] === '1') {
        count++;
        addToVisited(grid, x, y, visited);
      }
      visited[`${x}-${y}`] = true;
    }
  }
  return count;
};
