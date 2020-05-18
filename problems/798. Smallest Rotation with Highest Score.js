// https://leetcode.com/problems/smallest-rotation-with-highest-score/

//  Given an array A, we may rotate it by a non-negative integer K so that the array becomes A[K], A[K+1], A{K+2], ... A[A.length - 1], A[0], A[1], ..., A[K-1].  Afterward, any entries that are less than or equal to their index are worth 1 point.

// For example, if we have [2, 4, 1, 3, 0], and we rotate by K = 2, it becomes [1, 3, 0, 2, 4].  This is worth 3 points because 1 > 0 [no points], 3 > 1 [no points], 0 <= 2 [one point], 2 <= 3 [one point], 4 <= 4 [one point].

// Over all possible rotations, return the rotation index K that corresponds to the highest score we could receive.  If there are multiple answers, return the smallest such index K.

// SOLUTION 1:
// this seems to get 100% space and time (space-time :D) in JavaScript, nonetheless, it is NOT optimal
// TODO: add faster solution

// rotate :: [Number] -> ()
const rotate = xs => { xs.push(xs.shift()); }

// count :: [Number] -> Number
const count = xs => {
    let result = 0;
    for(let i = 0; i < xs.length; i++) { result += (xs[i] <= i ? 1 : 0); }
    return result;
}

// bestRotatiokn :: [Number] -> Number
const bestRotation = function(A) {
    let maxCount = 0;
    let rotations = 0;

    for(let i = 0; i < A.length; i++) {
        const localMax = count(A);

        rotate(A);

        if(localMax > maxCount) {
            maxCount = localMax;
            rotations = i;
        }
    }
    return rotations;
};
