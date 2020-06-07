// https://leetcode.com/problems/super-egg-drop/

// You are given K eggs, and you have access to a building with N floors from 1 to N.
//
// Each egg is identical in function, and if an egg breaks, you cannot drop it again.
//
// You know that there exists a floor F with 0 <= F <= N such that any egg dropped at a floor higher than F will break, and any egg dropped at or below floor F will not break.
//
// Each move, you may take an egg (if you have an unbroken one) and drop it from any floor X (with 1 <= X <= N).
//
// Your goal is to know with certainty what the value of F is.
//
// What is the minimum number of moves that you need to know with certainty what F is, regardless of the initial value of F?

// SOLUTION 1:
// (TLE) recursive with memoization

let cache = {};

// superEggDrop :: (Number, Number) -> Number
const superEggDrop = function(eggs, floors) {
    const key = `${eggs}-${floors}`;
    if(cache[key]) return cache[key];

    if(floors <= 1 || eggs === 1) return floors;
    let min = Infinity;
    for(let i = 1; i <= floors; i++) {
        const floorMax = Math.max(
            superEggDrop(eggs - 1, i - 1),
            superEggDrop(eggs, floors - i)
        );

        if(floorMax < min) min = floorMax;

    }

    cache[key] = min + 1;
    return min + 1;
};

// SOLUTION 2:
// TODO: optimize this solution or write another one with a better time complexity

const superEggDrop = function(eggs, floors) {
    const tries = floors; // this could be optimized
    // create a dp matrix with padding
    const dp = Array.from({ length: tries + 1}, i => Array.from({ length: eggs + 1 }));

    // zero tries with any egg yields zero floors
    for(let i = 0; i < eggs + 1; i++) dp[0][i] = 0;
    // zero eggs with any tries yields zero floors
    for(let i = 0; i < tries + 1; i++) dp[i][0] = 0;

    for(let i = 1; i <= tries; i++) {
        for(let j = 1; j <= eggs; j++) {
            dp[i][j] = 1 + dp[i-1][j] + dp[i-1][j-1];

            // if we are at (or passed) the desired floor, return the current i'th try
            if(dp[i][j] >= floors) return i;
        }
    }
};
