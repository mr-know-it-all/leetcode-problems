// For an integer array nums, an inverse pair is a pair of integers [i, j] where 0 <= i < j < nums.length and nums[i] > nums[j].

// Given two integers n and k, return the number of different arrays consist of numbers from 1 to n such that there are exactly k inverse pairs. Since the answer can be huge, return it modulo 109 + 7.

 

// Example 1:

// Input: n = 3, k = 0
// Output: 1
// Explanation: Only the array [1,2,3] which consists of numbers from 1 to 3 has exactly 0 inverse pairs.
// Example 2:

// Input: n = 3, k = 1
// Output: 2
// Explanation: The array [1,3,2] and [2,1,3] have exactly 1 inverse pair.
 

// Constraints:

// 1 <= n <= 1000
// 0 <= k <= 1000

//  SOLUTION 1:
// intuitive, but TLE

function _kInversePairs(n: number, k: number): number {
    // no more numbers to use
    if(n <= 0) return 0;

    // no available pairs left
    if(k < 0) return 0;

    // all pairs are used
    // it's ok even if n is not zero
    // because the remaining numbers could be placed in ascending order
    // thus without forming inverse pairs
    if(k === 0) return 1;
    
    let res = 0;
    for(let moves = 0; moves < Math.min(n, k + 1); moves++) {
        // since we start from n, we move n to the left (<-)
        // by doing this, we spend number of moves inverse pairs
        // e.g.: 12345
        // 123|5|4 (one move, one pairs consumed)
        // 12|5|34 (two moves, two pairs consumed)
        // ...
        res += _kInversePairs(n - 1, k - moves);
    }
    
    return res;
};

// SOLUTION 2:
// TODO: internalize, properly understand and write dp solution


