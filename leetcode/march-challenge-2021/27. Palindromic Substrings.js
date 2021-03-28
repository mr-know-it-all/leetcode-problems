// Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Example 1:

// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
 

// Example 2:

// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

// Note:

// The input string length won't exceed 1000.

// countSubstrings :: String -> Number
const countSubstrings = (s) => {
    let count = 0;
    
    const expand = (i, j) => {
      if(i < 0 || j === s.length) return;
      
      if(s[i] === s[j]) {
        count += 1;
        expand(i - 1, j + 1);
      }
    }
    
    for(let i = 0; i < s.length; i++) {
      count += 1;
      expand(i, i + 1);
      expand(i, i + 2);
    }
    
    return count;
  };