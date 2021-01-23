// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

const pair = { '}': '{', ']': '[', ')': '(' };

// isValid :: String -> Boolean
const isValid = str => {
    let stack = [];
    
    for(let c of str) {
        if(!pair[c]) stack.push(c);
        else if(pair[c] !== stack.pop()) return false;
    }
    
    return stack.length === 0;
};