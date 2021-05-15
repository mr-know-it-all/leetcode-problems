// Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.

// In one step, you can delete exactly one character in either string.

 

// Example 1:

// Input: word1 = "sea", word2 = "eat"
// Output: 2
// Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
// Example 2:

// Input: word1 = "leetcode", word2 = "etco"
// Output: 4
 

// Constraints:

// 1 <= word1.length, word2.length <= 500
// word1 and word2 consist of only lowercase English letters.

// SOLUTION 1:
// recursive TLE

// minDistance :: (String, String) -> Number
const minDistance = (word1, word2) => {
    let w1 = word1.split('');
    let w2 = word2.split('');
    
    return (function compute([x, ...xs], [y, ...ys]) {
        if(x === undefined && y === undefined) return 0;
        if(x === undefined) return 1 + ys.length;
        if(y === undefined) return 1 + xs.length;
        
        if(x !== y) {
            const min = Math.min(
                (1 + compute(xs, [y, ...ys])),
                (1 + compute([x, ...xs], ys)),
                (2 + compute(xs, ys))
            );
            return min;
        } else {
            return compute(xs, ys);
        } 
    })(w1, w2);
};

// SOLUTION 2:
// still TLE

// minDistance :: (String, String) -> Number
const minDistance = (a, b) => {
    return (function compute(i, j) {
        if(a[i] === undefined && b[j] === undefined) return 0;
        if(a[i] === undefined) return b.length - j;
        if(b[j] === undefined) return a.length - i;
        
        if(a[i] !== b[j]) {
            const min = Math.min(
                (1 + compute(i + 1, j)),
                (1 + compute(i, j + 1)),
                (2 + compute(i + 1, j + 1))
            );
            return min;
        } else {
            return compute(i + 1, j + 1);
        } 
    })(0, 0);
};

// SOLUTION 3:
// acc with memoization

// minDistance :: (String, String) -> Number
const minDistance = (a, b) => {
    const dp = {};
    const m = a.length;
    const n = b.length;
    
    return (function compute(i, j) {
        if(dp[i + ':' + j]) return dp[i + ':' + j];
        if(a[i] === undefined && b[j] === undefined) return 0;
        if(a[i] === undefined) return n - j;
        if(b[j] === undefined) return m - i;
        
        if(a[i] !== b[j]) {
            const min = Math.min(
                (1 + compute(i + 1, j)),
                (1 + compute(i, j + 1)),
                (2 + compute(i + 1, j + 1))
            );
            return dp[i + ':' + j] = min;
        } else {
            return dp[i + ':' + j] = compute(i + 1, j + 1);
        } 
    })(0, 0);
};

// SOLUTION 4:
// same as above with different dp structure, better performance

// minDistance :: (String, String) -> Number
const minDistance = (a, b) => {
    const m = a.length;
    const n = b.length;
    
    const dp = new Array(m + 1).fill().map(() => new Array(n + 1));
    
    return (function compute(i, j) {
        if(dp[i][j]) return dp[i][j];
        if(a[i] === undefined && b[j] === undefined) return 0;
        if(a[i] === undefined) return n - j;
        if(b[j] === undefined) return m - i;
        
        if(a[i] !== b[j]) {
            const min = Math.min(
                (1 + compute(i + 1, j)),
                (1 + compute(i, j + 1)),
                (2 + compute(i + 1, j + 1))
            );
            return dp[i][j] = min;
        } else {
            return dp[i][j] = compute(i + 1, j + 1);
        } 
    })(0, 0);
};