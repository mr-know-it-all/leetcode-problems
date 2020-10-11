// Given a string s, remove duplicate letters so that every letter appears once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

// Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

 

// Example 1:

// Input: s = "bcabc"
// Output: "abc"
// Example 2:

// Input: s = "cbacdcbc"
// Output: "acdb"
 

// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.

// SOLUTION 1:

// removeDuplicateLetters :: String -> String
const removeDuplicateLetters = s => {
    if(s.length <= 1) return s;
    
    let count = {};
    let used = {};

    // count duplicates
    for(let i = 0; i < s.length; i++) count[s[i]] = (count[s[i]] || 0) + 1;

    const res = [];
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        // char will be used so decrease duplicate count
        count[char]--;
        
        // if it was not already set in its position
        if(!used[char]) {
            // while last char till now
            // is greater than the current char
            // and a duplicate that still has copies (to the right of s)
            while(
                res.length
                && res[res.length - 1] > char
                && count[res[res.length - 1]] > 0
            ) {
                // remove it from result
                // "free" it from used chars, it will be added later to the right
                used[res[res.length - 1]] = false;
                res.pop();
            }
            
            // update result
            res.push(char);
        }
     
        // char becomes used, can be "free" again if greater than next char
        used[char] = true;
    }
    
    return res.join('');
};