// Given an array of 4 digits, return the largest 24 hour time that can be made.
//
// The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.
//
// Return the answer as a string of length 5.  If no valid time can be made, return an empty string.
//
//
//
// Example 1:
//
// Input: [1,2,3,4]
// Output: "23:41"
// Example 2:
//
// Input: [5,5,5,5]
// Output: ""
//
//
// Note:
//
// A.length == 4
// 0 <= A[i] <= 9

// SOLUTION 1:

const permutations = [
    [0, 1, 2, 3], [0, 1, 3, 2], [0, 2, 1, 3], [0, 2, 3, 1], [0, 3, 1, 2], [0, 3, 2, 1],
    [1, 0, 2, 3], [1, 0, 3, 2], [1, 2, 0, 3], [1, 2, 3, 0], [1, 3, 0, 2], [1, 3, 2, 0],
    [2, 0, 1, 3], [2, 0, 3, 1], [2, 1, 0, 3], [2, 1, 3, 0], [2, 3, 0, 1], [2, 3, 1, 0],
    [3, 0, 1, 2], [3, 0, 2, 1], [3, 1, 0, 2], [3, 1, 2, 0], [3, 2, 0, 1], [3, 2, 1, 0]
]

// isValidTime :: ([Number, Number, Number, Number]) -> Boolean
const isValidTime = ([a, b, c, d]) => `${a}${b}` < 24 && `${c}${d}` < 60;


// largestTimeFromDigits :: [Number] -> String
const largestTimeFromDigits = A => {
    const combinations = (
        permutations
            .map(p => p.map(i => A[i]))
            .filter(isValidTime)
            .map(x => Number(x.join('')))
    );

    if(combinations.length === 0) return '';

    const max = String(Math.max(...combinations)).padStart(4, 0).split('');
    const [a, b, c, d] = max;

    return `${a}${b}:${c}${d}`;
};
