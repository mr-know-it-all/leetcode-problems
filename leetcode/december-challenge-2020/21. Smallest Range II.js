// Given an array A of integers, for each integer A[i] we need to choose either x = -K or x = K, and add x to A[i] (only once).

// After this process, we have some array B.

// Return the smallest possible difference between the maximum value of B and the minimum value of B.

 

// Example 1:

// Input: A = [1], K = 0
// Output: 0
// Explanation: B = [1]
// Example 2:

// Input: A = [0,10], K = 2
// Output: 6
// Explanation: B = [2,8]
// Example 3:

// Input: A = [1,3,6], K = 3
// Output: 3
// Explanation: B = [4,6,3]
 

// Note:

// 1 <= A.length <= 10000
// 0 <= A[i] <= 10000
// 0 <= K <= 10000

// smallestRangeII :: ([Number], Number) -> Number
const smallestRangeII = function(A, K) {
    A.sort((a, b) => a - b);
    
    let res = A[A.length - 1] - A[0];
    for(let i = 0; i < A.length - 1; i++) {
        // smallest element + k (going near the max to minimize distance) or next element - k
        const min = Math.min(A[0] + K, A[i + 1] - K);
        // last element - k (going near the first to minimize distance) or current + k
        const max = Math.max(A[A.length - 1] - K, A[i] + K);
        
        res = Math.min(res, max - min)
    }
    return res
};