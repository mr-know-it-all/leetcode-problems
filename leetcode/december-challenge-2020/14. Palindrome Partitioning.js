// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// A palindrome string is a string that reads the same backward as forward.

 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]
 

// Constraints:

// 1 <= s.length <= 16
// s contains only lowercase English letters.

// SOLUTION 1:

// isPalindome :: String -> Boolean
const isPalindrome = xs => [...xs].reverse().join('') === xs;

// partition :: String -> [[String]]
const partition = str => {
    const result = [];
    
    const consume = (str, acc = []) => {
        if(str.length === 0) result.push(acc);
        
        for(let i = 0; i < str.length; i++) {
            const part = str.slice(0, i + 1);
    
            if(isPalindrome(part)) {
                consume(str.slice(i + 1), acc.concat(part));
            }
        }
    }
    
    consume(str);
    
    return result;
 };