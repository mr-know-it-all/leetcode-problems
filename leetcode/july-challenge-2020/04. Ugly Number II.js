// Write a program to find the n-th ugly number.
//
// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
//
// Example:
//
// Input: n = 10
// Output: 12
// Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
// Note:
//
// 1 is typically treated as an ugly number.
// // n does not exceed 1690.

// nthUglyNumber :: Number -> Number
const nthUglyNumber = n => {
    if(n === 0) return 0;

    let dp = [1];

    let i2 = 0;
    let i3 = 0;
    let i5 = 0;

    while(dp[n-1] === undefined) {
        let x = dp[i2] * 2;
        let y = dp[i3] * 3;
        let z = dp[i5] * 5;

        let next = Math.min(x, y, z);
        dp.push(next);

        if(next === x) i2++;
        if(next === y) i3++;
        if(next === z) i5++;
    }

    return dp[n-1];
};
