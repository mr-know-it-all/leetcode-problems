// Given an integer n, return the decimal value of the binary string formed by concatenating the binary representations of 1 to n in order, modulo 109 + 7.

 

// Example 1:

// Input: n = 1
// Output: 1
// Explanation: "1" in binary corresponds to the decimal value 1. 
// Example 2:

// Input: n = 3
// Output: 27
// Explanation: In binary, 1, 2, and 3 corresponds to "1", "10", and "11".
// After concatenating them, we have "11011", which corresponds to the decimal value 27.
// Example 3:

// Input: n = 12
// Output: 505379714
// Explanation: The concatenation results in "1101110010111011110001001101010111100".
// The decimal value of that is 118505380540.
// After modulo 109 + 7, the result is 505379714.
 

// Constraints:

// 1 <= n <= 105

// SOLUTION 1:
// not TLE but slow

// concatenatedBinary :: Number -> Number
const concatenatedBinary = (n) => {
    const mod = 1000000007;
    let result = '';
    
    for(let i = 1; i <= n; i++)
        result = (parseInt(result + (i).toString(2), 2) % mod).toString(2);
    
    return parseInt(result, 2);
};

// SOLUTION 2:

// concatenatedBinary :: Number -> Number
const concatenatedBinary = (n) => {
    const mod = 1000000007;
    
    let val = 1;
    
    for(let i = 2; i <= n; i++) {
        let n = i.toString(2).length;
        
        val = (val * (2**n) + i) % mod;
    }
    
    return val;
};