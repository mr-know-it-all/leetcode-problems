// Given two binary strings, return their sum (also a binary string).
//
// The input strings are both non-empty and contains only characters 1 or 0.
//
// Example 1:
//
// Input: a = "11", b = "1"
// Output: "100"
// Example 2:
//
// Input: a = "1010", b = "1011"
// Output: "10101"
//
//
// Constraints:
//
// Each string consists only of '0' or '1' characters.
// 1 <= a.length, b.length <= 10^4
// Each string is either "0" or doesn't contain any leading zero.

// SOLUTION 1:

// addBinary :: (String, String) -> String
const addBinary = (a, b) => {
    let i = a.length - 1;
    let j = b.length - 1;

    let carry = 0;
    let result = '';

    while(i >= 0 || j >= 0) {
        const sum = (+a[i] || 0) + (+b[j] || 0) + carry;

        if(sum === 0) { result = '0' + result; }
        if(sum === 1) { result = '1' + result; carry = 0; }
        if(sum === 2) { result = '0' + result; carry = 1; }
        if(sum === 3) { result = '1' + result; carry = 1; }

        i >= 0 && i--;
        j >= 0 && j--;
    }

    return carry > 0 ? '1' + result : result;
};
