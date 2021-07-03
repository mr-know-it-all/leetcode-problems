// There is an m x n grid with a ball. The ball is initially at the position [startRow, startColumn]. You are allowed to move the ball to one of the four adjacent four cells in the grid (possibly out of the grid crossing the grid boundary). You can apply at most maxMove moves to the ball.

// Given the five integers m, n, maxMove, startRow, startColumn, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it modulo 109 + 7.

 

// Example 1:


// Input: m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
// Output: 6
// Example 2:


// Input: m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
// Output: 12
 

// Constraints:

// 1 <= m, n <= 50
// 0 <= maxMove <= 50
// 0 <= startRow <= m
// 0 <= startColumn <= n

// SOLUTION 1:

// findPaths :: (Number, Number, Number, Number, Number) -> Number
const findPaths = function(m, n, maxMove, startRow, startColumn) {
    const getKey = (i, j, k) => `${i}-${j}-${k}`;
    const memo = new Map();
    
    return (function dfs(i, j, k) {
        const key = getKey(i, j, k);
        
        if(memo.has(key)) return memo.get(key);
        
        const outOfBounds = i === -1 || i === m || j === -1 || j === n;
        if(outOfBounds) return 1;
        if(k === 0) return 0;
        
        let result = 0;
        result += dfs(i + 1, j, k - 1) % 1000000007;
        result += dfs(i - 1, j, k - 1) % 1000000007;
        result += dfs(i, j + 1, k - 1) % 1000000007;
        result += dfs(i, j - 1, k - 1) % 1000000007;
        
        
        memo.set(key, result);
        return result % 1000000007;
    })(startRow, startColumn, maxMove);
};

// SOLUTION 2:

// findPaths :: (Number, Number, Number, Number, Number) -> Number
const findPaths = function(m, n, maxMove, startRow, startColumn) {
    const key = (i, j, k) => `${i}-${j}-${k}`;
    const dirs = (i, j) => [
        [i - 1, j],
        [i + 1, j],
        [i, j - 1],
        [i, j + 1]
    ];
    const dp = new Map();
    return (function dfs(i, j, moves) {  
        const k = key(i, j, moves);
        if(dp.has(k)) return dp.get(k);
                                           
        if(i >= m || j >= n || i < 0 || j < 0) {
            return 1;
        }
        
        if(moves >= maxMove) {
            return 0;
        }
        
        let result = 0;
        for(let [ii, jj] of dirs(i, j)) {
            result += dfs(ii, jj, moves + 1) % 1000000007;
        }
        dp.set(k, result % 1000000007);
        return dp.get(k);
    })(startRow, startColumn, 0);
};