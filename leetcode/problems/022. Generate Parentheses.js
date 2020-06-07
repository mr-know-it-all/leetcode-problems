// https://leetcode.com/problems/generate-parentheses/

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// generateParenthesis :: Number -> [String]
const generateParenthesis = n => {
    const result = [];

    // backtrack :: Object -> ()
    const search = ({ str = '', open = 0, close = 0 } = {}) => {
        // we have a complete valid parens string (n open and n closed)
        if(str.length === n * 2) return result.push(str)

        // we have two branches in our recursion: we can add an open or a close paren

        //if we can still add open parens we add one and increment its count
        if(open < n) search({ str: str + '(', open: open + 1, close });
        
        // we can add close parens only if before them we have open parens
        if(close < open) search({ str: str + ')', open, close: close + 1 });
    };

    search();

    return result;
}
