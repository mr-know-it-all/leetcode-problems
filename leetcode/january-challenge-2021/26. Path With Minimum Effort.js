// You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.

// A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.

// Return the minimum effort required to travel from the top-left cell to the bottom-right cell.

 

// Example 1:



// Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
// Output: 2
// Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
// This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.
// Example 2:



// Input: heights = [[1,2,3],[3,8,4],[5,3,5]]
// Output: 1
// Explanation: The route of [1,2,3,4,5] has a maximum absolute difference of 1 in consecutive cells, which is better than route [1,3,5,3,5].
// Example 3:


// Input: heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]
// Output: 0
// Explanation: This route does not require any effort.
 

// Constraints:

// rows == heights.length
// columns == heights[i].length
// 1 <= rows, columns <= 100
// 1 <= heights[i][j] <= 106

// SOLUTION 1:

// key :: (Number, Number) -> String
const key = (x, y) => `${x}:${y}`;

// minimumEffortPath :: [[Number]] -> Number
const minimumEffortPath = (heights) => {
    const m = heights.length;
    const n = heights[0].length;

    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    
    const bfs = (limit) => {
		const queue = [[0,0]];
		const visited = new Set([0,0]);

		while(queue.length) {
			const [x, y] = queue.shift();
			if (x === m - 1 && y === n - 1) return true;
            
			for(let dir of dirs) {
				let nx = dir[0] + x;
				let ny = dir[1] + y;
                
				if (!heights[nx] || !heights[nx][ny] || visited.has(key(nx,ny))) continue;
				if(Math.abs(heights[nx][ny] - heights[x][y]) > limit) continue;
                
				visited.add(key(nx, ny));
				queue.push([nx,ny]);
			}
		}

		return false;
	}
    
    let start = 0;
    let end = 1e6;
    
    while(start < end) {
        const mid = Math.floor((start + end) / 2);
        
        const res = bfs(mid);
        
        if(res) end = mid;
        else start = mid + 1;
    }
    
    return start;
};

// SOLUTION 2:

// getMin :: [[Number, Number, Number]] -> [Number, Number, Number]
const getMin = list => {
    let minIndex = 0;
    let minVal = Infinity;
    
    for(let i = 0; i < list.length; i++) {
        if(list[i][0] < minVal) {
            minVal = list[i][0];
            minIndex = i;
        }
    }
    
    return list.splice(minIndex, 1)[0];
}

// minimumEffortPath :: [[Number]] -> Number
const minimumEffortPath = function(list) {
    const m = list.length;
    const n = list[0].length;
    
    // will store distance to start from every grid cell
    const dist = Array.from({ length: m }, () => Array.from({ length: n }, () => Infinity));
    dist[0][0] = 0;
    
    // ideally this would be a priority queue
    const q = [[0, 0, 0]];
    
    // while we have nodes to process
    while(q.length) {
        // get the one with the smallest distance to start
        const [d, row, col] = getMin(q);
        // return distance to start if we reached the end
        if(row === m - 1 && col === n - 1) return d;
        
        // if current position has a better distance to start, skip this node
        if(d > dist[row][col]) continue;
        
        const neighbors = [
            [row + 1, col],
            [row - 1, col],
            [row, col + 1],
            [row, col - 1]
        ];
        
        // update neighbors if necessary
        for(let [nrow, ncol] of neighbors) {
            // poor man's boundary check
            if(list[nrow] && list[nrow][ncol]) {
                // distance to start means in this context
                // largest difference between two connected nodes
                // of course, if current node's distance to start is larger we'll use that
                // kind of like in the standard algorithm:
                //      nodeB's distance to start is updated if
                //      nodeA's distanceToStart + distance from nodeA to nodeB
                //      is smaller than nodeB's distance to start
                const newDist = Math.max(d, Math.abs(list[nrow][ncol] - list[row][col]));
                
                // if this neighbor has a smaller distance to start connected to current node
                // update its value in the dist table
                if(dist[nrow][ncol] > newDist) {
                    dist[nrow][ncol] = newDist;
                    q.push([newDist, nrow, ncol]);
                }
            }
        }
    }
};