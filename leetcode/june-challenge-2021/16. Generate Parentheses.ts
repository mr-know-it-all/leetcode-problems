// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]
 

// Constraints:

// 1 <= n <= 8

function generateParenthesis(n: number): string[] {
    const combinations: string[] = [];
    
    (function compute(left, right, perm) {
        if(perm.length === n * 2) {
            combinations.push(perm);
            return;
        }
    
        if(left < n) compute(left + 1, right, perm + '(');
        if(left > right) compute(left, right + 1, perm + ')');
    })(0, 0, '');
    
    return combinations;
};