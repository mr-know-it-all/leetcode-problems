// We write the integers of A and B (in the order they are given) on two separate horizontal lines.

// Now, we may draw connecting lines: a straight line connecting two numbers A[i] and B[j] such that:

// A[i] == B[j];
// The line we draw does not intersect any other connecting (non-horizontal) line.
// Note that a connecting lines cannot intersect even at the endpoints: each number can only belong to one connecting line.

// Return the maximum number of connecting lines we can draw in this way.

// SOLUTION 1:
// (TLE - simple to understand)

// maxUncrossedLines :: ([[Number]], [[Number]]) -> Number
const maxUncrossedLines = (A, B) => {
    const search = (i, j) => {
        if(i === A.length || j === B.length) return 0;

        if(A[i] === B[j]) {
            return 1 + search(i + 1, j + 1);
        } else {
            return Math.max(search(i + 1, j), search(i, j + 1));
        }
    };

    return search(0, 0);
}

// SOLUTION 2:
// (TLE - recursion with memoization)

// maxUncrossedLines :: ([[Number]], [[Number]]) -> Number
const maxUncrossedLines = (A, B) => {
    const Alength = A.length;
    const Blength = B.length;
    const cache = Array.from({ length: Alength }, () => Array.from({ length: Blength }));

    const search = (i, j) => {
        if(i === Alength || j === Blength) return 0;

        if(cache[i][j]) return cache[i][j];

        if(A[i] === B[j]) {
            cache[i][j] = 1 + search(i + 1, j + 1);
        } else {
            cache[i][j] = Math.max(search(i + 1, j), search(i, j + 1));
        }

        return cache[i][j]
    };

    return search(0, 0);
}

// SOLUTION 3:

// maxUncrossedLines :: ([[Number]], [[Number]]) -> Number
const maxUncrossedLines = (A, B) => {
    const lenA = A.length;
    const lenB = B.length;
    const dp = Array.from({ length: lenA + 1 }, () => Array.from({ length: lenB + 1 }, () => 0));

    for(let i = 1; i <= lenA; i++) {
        for(let j = 1; j <= lenB; j++) {
            if(A[i - 1] === B[j - 1]){
                dp[i][j] = 1 + dp[i - 1][j - 1];
            }
            else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            }

        }
    }

    return dp[lenA][lenB];
}
