// You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.

// Given n, find the total number of full staircase rows that can be formed.

// n is a non-negative integer and fits within the range of a 32-bit signed integer.

// Example 1:

// n = 5

// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤

// Because the 3rd row is incomplete, we return 2.
// Example 2:

// n = 8

// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤ ¤
// ¤ ¤

// Because the 4th row is incomplete, we return 3.

// SOLUTION 1:
// (slow but suprisingly not TLE)

// arrangeCoins :: Number -> Number
const arrangeCoins = n => {
    let stairs = 0;
    while(n >= stairs) n -= stairs++;
    return stairs - 1;
};

// SOLUTION 2:
// inspired from the official solution:

// [...]
// Assume that the answer is k, i.e. we've managed to complete k rows of coins.
// These completed rows contain in total 1 + 2 + ... + k = (k * (k + 1)) / 2 coins.
// [...]

// arrangeCoins :: Number -> Number
const arrangeCoins = n => {
    let start = 0;
    let end = n;

    let mid;
    let val;

    while(start <= end) {
        mid = (start + end) >> 1;
        val = (mid * (mid + 1)) / 2;

        if(val === n) return mid;

        if(n < val) end = mid - 1;
        else start = mid + 1;
    }

    return end;
};
