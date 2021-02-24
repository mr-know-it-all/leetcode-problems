// Given a balanced parentheses string S, compute the score of the string based on the following rule:

// () has score 1
// AB has score A + B, where A and B are balanced parentheses strings.
// (A) has score 2 * A, where A is a balanced parentheses string.
 

// Example 1:

// Input: "()"
// Output: 1
// Example 2:

// Input: "(())"
// Output: 2
// Example 3:

// Input: "()()"
// Output: 2
// Example 4:

// Input: "(()(()))"
// Output: 6
 

// Note:

// S is a balanced parentheses string, containing only ( and ).
// 2 <= S.length <= 50

// SOLUTION 1:

// scoreOfParentheses :: String -> Number
const scoreOfParentheses = (s) => {
    const compute = (s) => {
        const stack = [];
        let index = 0;
        
        while(true) {
            let curr = s[index++];
            
            if(curr === '(') stack.push('(');
            else stack.pop();
            
            if(stack.length === 0) break;
        }
        
        const a = s.slice(1, index - 1);
        const b = s.slice(index);
           
        return (
            (a.length ? 2 * compute(a) : 1) +
            (b.length ? compute(b) : 0)
        );
    }
    
    return compute(s.split(''));
};