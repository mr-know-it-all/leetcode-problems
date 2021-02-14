// In an N by N square grid, each cell is either empty (0) or blocked (1).

// A clear path from top-left to bottom-right has length k if and only if it is composed of cells C_1, C_2, ..., C_k such that:

// Adjacent cells C_i and C_{i+1} are connected 8-directionally (ie., they are different and share an edge or corner)
// C_1 is at location (0, 0) (ie. has value grid[0][0])
// C_k is at location (N-1, N-1) (ie. has value grid[N-1][N-1])
// If C_i is located at (r, c), then grid[r][c] is empty (ie. grid[r][c] == 0).
// Return the length of the shortest such clear path from top-left to bottom-right.  If such a path does not exist, return -1.

 

// Example 1:

// Input: [[0,1],[1,0]]


// Output: 2

// Example 2:

// Input: [[0,0,0],[1,1,0],[1,1,0]]


// Output: 4

 

// Note:

// 1 <= grid.length == grid[0].length <= 100
// grid[r][c] is 0 or 1

// SOLUTION 1:

// shortestPathBinaryMatrix :: [[Number]] -> Number
const shortestPathBinaryMatrix = (grid) => {
    const m = grid.length - 1;
    const n = grid[0].length - 1;
    
    if(m === - 1 || n === - 1 || grid[0][0] === 1) return -1;
    
    const check = (x, y) => (
        x >= 0 && x <= m && y >= 0 && y <= n && grid[x][y] === 0
    );
    const q = [[0, 0, 1]];
    const seen = new Set();
 
    while(q.length) {
        const [x, y, D] = q.shift();
        if(x === m && y === n) return D;
        
        if(seen.has(x + ':' + y)) continue;
        seen.add(x + ':' + y);
        
        const neighbors = [
            [x - 1, y - 1], [x - 1, y], [x - 1, y + 1],
            [x, y - 1],                     [x, y + 1],
            [x + 1, y + 1], [x + 1, y], [x + 1, y - 1]
        ];
        for(let [i, j] of neighbors) if(check(i, j)) q.push([i, j, D + 1]);
    }
    
    return -1;
};