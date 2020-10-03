// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:

// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:

// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false

// SOLUTION 1:

// // wordBreak :: (String, [String]) -> Boolean
// const wordBreak = (str, words) => {
//     let found = false;
//     let cache = {};
    
//     (function consume(str) {
//         if(cache[str] || found) return;
        
//         if(str.length === 0) {
//             found = true;
//             return;
//         }   
        
//         for(let word of words) {
//             if(str.indexOf(word) === 0) {
//                 cache[str] = true;
//                 consume(str.replace(word, ''));
//             }
//         }
//     })(str);
    
//     return found;
// };

// SOLUTION 2:

// wordBreak :: (String, [String]) -> Boolean
const wordBreak = (str, words) => {
    const N = str.length;
    
    const dp = Array.from({ length: N + 1 }).map(() => false);
    dp[0] = true;
    
    for(let i = 0; i <= N + 1; i++) {
        for(let w of words) {
            const len = w.length;
            
            if(i + len > N) continue;
            
            if(dp[i] && w === str.substr(i, len)) {
                dp[i + len] = true;
                
            }
        }
    }
    
    return dp[N];
};