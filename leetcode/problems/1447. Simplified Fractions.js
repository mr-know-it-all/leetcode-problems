// https://leetcode.com/problems/simplified-fractions/
//
// Given an integer n, return a list of all simplified fractions between 0 and 1 (exclusive) such that the denominator is less-than-or-equal-to n. The fractions can be in any order.
//
//
//
// Example 1:
//
// Input: n = 2
// Output: ["1/2"]
// Explanation: "1/2" is the only unique fraction with a denominator less-than-or-equal-to 2.
// Example 2:
//
// Input: n = 3
// Output: ["1/2","1/3","2/3"]
// Example 3:
//
// Input: n = 4
// Output: ["1/2","1/3","1/4","2/3","3/4"]
// Explanation: "2/4" is not a simplified fraction because it can be simplified to "1/2".
// Example 4:
//
// Input: n = 1
// Output: []
//
//
// Constraints:
//
// 1 <= n <= 100

// simplifiedFractions :: Number -> [String]
const simplifiedFractions = n => {
    const check = (i, j) => {
        let n = Math.min(i, j);
        while(n > 1) {
            if(i % n === 0 && j % n === 0) return false;
            n--;
        }
        return true;
    };

    const result = [];

    for(let i = 1; i < n; i++)
        for(let j = i + 1; j <= n; j++)
          if(check(i, j)) result.push(i + '/' + j);

    return result;
};
