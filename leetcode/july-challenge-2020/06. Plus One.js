// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
//
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
//
// You may assume the integer does not contain any leading zero, except the number 0 itself.
//
// Example 1:
//
// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:
//
// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

const plusOne :: [Number] -> Number
const plusOne = function(digits) {
    if(digits.length === 0) return digits;

    let carry = 1;
    let index = digits.length - 1;

    do {
        let value = digits[index] + carry;

        digits[index] = value > 9 ? 0 : value;
        carry = value > 9 ? 1 : 0;

        index--;
    } while(carry > 0 && index >= 0);

    carry > 0 && digits.unshift(1);

    return digits;
};
