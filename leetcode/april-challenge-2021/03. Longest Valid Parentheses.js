// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

 

// Example 1:

// Input: s = "(()"
// Output: 2
// Explanation: The longest valid parentheses substring is "()".
// Example 2:

// Input: s = ")()())"
// Output: 4
// Explanation: The longest valid parentheses substring is "()()".
// Example 3:

// Input: s = ""
// Output: 0
 

// Constraints:

// 0 <= s.length <= 3 * 104
// s[i] is '(', or ')'.

// SOLUTION 1:
// TODO: add descriptive comments

/**
 * @param {string} s
 * @return {number}
 */
 var longestValidParentheses = function(s) {
    let max = 0;
    let stack = [-1];
  
    for(let i = 0; i < s.length; i++) {
      if(s[i] === '(') {
        stack.push(i);
      } else {
        stack.pop();
        
        if(stack.length === 0) {
          stack.push(i);
        } else {
          max = Math.max(max, i - stack[stack.length - 1])
        }
      }
    }
  
    return max;
};