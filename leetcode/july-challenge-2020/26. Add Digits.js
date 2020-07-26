// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
//
// Example:
//
// Input: 38
// Output: 2
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
//              Since 2 has only one digit, return it.
// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?

// SOLUTION 1:
// (naive)

// addDigits :: Number -> Number
const addDigits = num => {
    let digits = num.toString().split('');

    while(digits.length > 1) {
        let sum = digits.reduce((acc, val) => acc + Number(val), 0);

        digits = sum.toString().split('');
    }

    return Number(digits[0]);
};

// SOLUTION 2:

// addDigits :: Number -> Number
const addDigits = num => {
    if(num < 10) return num;

    const mod = num % 9;

    return mod || 9;
};
