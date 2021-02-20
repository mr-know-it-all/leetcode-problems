// A sequence of numbers is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

// For example, these are arithmetic sequences:

// 1, 3, 5, 7, 9
// 7, 7, 7, 7
// 3, -1, -5, -9
// The following sequence is not arithmetic.

// 1, 1, 2, 5, 7
 
// A zero-indexed array A consisting of N numbers is given. A slice of that array is any pair of integers (P, Q) such that 0 <= P < Q < N.

// A slice (P, Q) of the array A is called arithmetic if the sequence:
// A[P], A[P + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means that P + 1 < Q.

// The function should return the number of arithmetic slices in the array A.

 
// Example:

// A = [1, 2, 3, 4]

// return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4] itself.

// SOLUTION 1:

// numberOfArithmeticSlices :: [Number] -> Number
const numberOfArithmeticSlices = (A) => {
    let count = 0;
    const seen = {};
    
    (function compute(index = 0, seq = 0, diff = null) {
        if(seq >= 3) count++;

        if(A[index + 1] !== undefined) {
            const nextDiff = A[index + 1] - A[index];
            
            if(diff === null) {
                compute(index + 1, 2, nextDiff);
            } else if(nextDiff === diff) {
                compute(index + 1, seq + 1, diff);
                !seen[index] && compute(index, 1, null);
            } else {
                !seen[index] && compute(index, 1, null);
            }
        }
        
        seen[index] = true;
    })();
    
    return count;
};