// https://leetcode.com/problems/number-of-paths-with-max-score/submissions/

// You are given a square board of characters. You can move on the board starting at the bottom right square marked with the character 'S'.

// You need to reach the top left square marked with the character 'E'. The rest of the squares are labeled either with a numeric character 1, 2, ..., 9 or with an obstacle 'X'. In one move you can go up, left or up-left (diagonally) only if there is no obstacle there.

// Return a list of two integers: the first integer is the maximum sum of numeric characters you can collect, and the second is the number of such paths that you can take to get that maximum sum, taken modulo 10^9 + 7.

// In case there is no path, return [0, 0].

// pathsWithMaxScore :: [String] -> [Number]
const pathsWithMaxScore = board => {
    const MOD = 1000000007;
    const n = board.length;

    const cache = {};

    const dfs = (x, y) => {
        // out of bounds
        if(board[x] === undefined || board[x][y] === undefined) return [0, 0];
        // use memoization
        if(cache[`${x}-${y}`]) return cache[`${x}-${y}`];
        // we reached the end
        if(board[x][y] === 'E') return [0, 1];
        // we are blocked, same result as for out of bounds
        if(board[x][y] === 'X') return [0, 0];

        const up = [x, y - 1];
        const left = [x - 1, y];
        const upLeft = [x - 1, y - 1];

        // we get the values for all possible directions
        const [s1, c1] = dfs(...up);
        const [s2, c2] = dfs(...left);
        const [s3, c3] = dfs(...upLeft);

        // we'll need the max value of those
        const max = Math.max(s1, s2, s3);

        // if we have paths of equal values, we add up all their count
        let count = 0;
        if(max === s1) count += c1;
        if(max === s2) count += c2;
        if(max === s3) count += c3;

        // we use board value only if we have count larger than 0, meaning we reached the end ('E') in the recursion
        const value = board[x][y] === 'S' ? 0 : count > 0 ? Number(board[x][y]) : 0;

        // cache the value before returning it
        cache[`${x}-${y}`] = [max + value, count % MOD];
        return cache[`${x}-${y}`];
    }

    // start top-bottom
    return dfs(n - 1, n - 1);
};
