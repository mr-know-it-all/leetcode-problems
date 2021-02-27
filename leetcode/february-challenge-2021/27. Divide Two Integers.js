// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// Return the quotient after dividing dividend by divisor.

// The integer division should truncate toward zero, which means losing its fractional part. For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

// Note:

// Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For this problem, assume that your function returns 231 − 1 when the division result overflows.
 

// Example 1:

// Input: dividend = 10, divisor = 3
// Output: 3
// Explanation: 10/3 = truncate(3.33333..) = 3.
// Example 2:

// Input: dividend = 7, divisor = -3
// Output: -2
// Explanation: 7/-3 = truncate(-2.33333..) = -2.
// Example 3:

// Input: dividend = 0, divisor = 1
// Output: 0
// Example 4:

// Input: dividend = 1, divisor = 1
// Output: 1
 

// Constraints:

// -231 <= dividend, divisor <= 231 - 1
// divisor != 0

// SOLUTON 1:

// divide :: (Number, Number) -> Number
const divide = (x, y) => {
    if (x === -2147483648 && y === -1) {
        return 2147483647;
    }
    
    let sign = x < 0 && y < 0 || y > 0 && x > 0 ? 1 : -1;
    let res = 0;
    
    x = Math.abs(x);
    y = Math.abs(y);
    subtract(y, 1);
    
    function subtract(d, q) {
        if(x > d) {
            subtract(d + d, q + q);
        }
        
        if(x >= d) {
            x -= d;
            res += q;
        }
    }
    
    return res * sign;
};

// SOLUTION 2:

// divide :: (Number, Number) -> Number
const divide = (x, y) => {
    if (x === -2147483648 && y === -1) {
        return 2147483647;
    }
    
    let sign = x < 0 && y < 0 || y > 0 && x > 0 ? 1 : -1;
    let res = 0;
    
    x = Math.abs(x);
    y = Math.abs(y);

    while(y <= x) {
        let value = y;
        let multiple = 1;
        while (value + value <= x) {
            value += value;
            multiple += multiple;
        }
        x = x - value;
        res += multiple;
    }
    
    return res * sign;
};