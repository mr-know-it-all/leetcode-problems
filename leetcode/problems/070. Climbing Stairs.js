// https://leetcode.com/problems/climbing-stairs/submissions/


// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.

// climbStairs :: Number -> Number
const climbStairs = n => {
    let [a, b] = [1, 1];

    for(let i = 2; i < n + 1; i++) {
        [a, b] = [b, a + b];
    }

    return b;
};
