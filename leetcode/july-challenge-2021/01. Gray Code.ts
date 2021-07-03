// An n-bit gray code sequence is a sequence of 2n integers where:

// Every integer is in the inclusive range [0, 2n - 1],
// The first integer is 0,
// An integer appears no more than once in the sequence,
// The binary representation of every pair of adjacent integers differs by exactly one bit, and
// The binary representation of the first and last integers differs by exactly one bit.
// Given an integer n, return any valid n-bit gray code sequence.

 

// Example 1:

// Input: n = 2
// Output: [0,1,3,2]
// Explanation:
// The binary representation of [0,1,3,2] is [00,01,11,10].
// - 00 and 01 differ by one bit
// - 01 and 11 differ by one bit
// - 11 and 10 differ by one bit
// - 10 and 00 differ by one bit
// [0,2,3,1] is also a valid gray code sequence, whose binary representation is [00,10,11,01].
// - 00 and 10 differ by one bit
// - 10 and 11 differ by one bit
// - 11 and 01 differ by one bit
// - 01 and 00 differ by one bit
// Example 2:

// Input: n = 1
// Output: [0,1]
 

// Constraints:

// 1 <= n <= 16

// SOLUTION 1:

function _grayCode(n: number): number[] {
    const result = [0];
    
    for(let i = 1; i < Math.pow(2, n); i++) {
        result.push(result[result.length - 1] ^ (i & -i));
    }
    
    return result;
};

// SOLUTION 2:

function grayCode(n: number): number[] {
    const result = [];
    
    for(let i = 0; i < Math.pow(2, n); i++) {
        result.push(i ^ (i >> 1));
    }
    
    return result;
};