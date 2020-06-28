// Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.
//
// Example 1:
//
// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.
// Example 2:
//
// Input: n = 13
// Output: 2
// Explanation: 1

// SOLUTION 1:

const isSquare = n => Math.sqrt(n) % 1 === 0;

// numSquares :: Number -> Number
const numSquares = n => {
    const cache = {};
    let result = Infinity;

    (function decompose(n, count = 0) {
        if(n < 0 || count >= result) return;

        if(cache[n + '-' + count]) return;
        cache[n + '-' + count] = true;

        if(n === 0) {
            result = Math.min(result, count);
            return;
        }

        let next = n;
        while(next > 0) {
            if(isSquare(next)) decompose(n - next, count + 1);
            next--;
        }
    })(n);

    return result;
};

// SOLUTION 2:

// numSquares :: Number -> Number
const numSquares = function(n) {
    let dp = [0];

    for(let i = 1; i <= n; i++) {
        dp[i] = Infinity;

        for(let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }

    return dp[n];
};
