// Given a string s which represents an expression, evaluate this expression and return its value. 

// The integer division should truncate toward zero.

 

// Example 1:

// Input: s = "3+2*2"
// Output: 7
// Example 2:

// Input: s = " 3/2 "
// Output: 1
// Example 3:

// Input: s = " 3+5 / 2 "
// Output: 5
 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
// s represents a valid expression.
// All the integers in the expression are non-negative integers in the range [0, 231 - 1].
// The answer is guaranteed to fit in a 32-bit integer.

const add = '+';
const sub = '-';
const mult = '*';
const div = '/';
const end = '$';

// calculate :: String -> Number
const calculate = s => {    
    s = s.replace(/\s/g, '') + end;

    let stack = [];
    let n = 0;
    let lastSign = '+';

    for (let c of s) {
        if (/\d/.test(c)) {
            n = n * 10 + Number(c);
        } else {
            if(lastSign === sub) stack.push(-n);
            else if(lastSign === add) stack.push(n);
            
            else if(lastSign === mult) stack.push(stack.pop() * n);
            else if(lastSign === div) stack.push(~~(stack.pop() / n));

            lastSign = c;
            n = 0;
        }
    }
    
    return stack.reduce((a, b) => a + b);
};