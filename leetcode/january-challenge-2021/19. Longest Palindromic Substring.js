// Given a string s, return the longest palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters (lower-case and/or upper-case),

// SOLUTION 1:

// https://leetcode.com/problems/longest-palindromic-substring/submissions/

// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// longestPalindrome :: String -> String
const longestPalindrome = s => {
    if(!s || s.length < 1) return '';
    
    let res = '';
    for(let i = 0; i < s.length; i++) {
        let odd = expandAroundCenter(s, i, i);
        let even = expandAroundCenter(s, i, i + 1);
        let max = odd.length > even.length ? odd : even;
        
        if(max.length > res.length) {
            res = max;
        }
    }

    return res;
}

// expandAroundCenter :: (String, Number, Number) -> Number
const expandAroundCenter = (s, left, right) => {
    // in bounds and palindrome
    while(left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substring(left + 1, right);
}

// SOLUTION 2:

// longestPalindrome :: String -> String
const longestPalindrome = s => {
    if(!s || s.length < 1) return '';
    
    let start = 0, end = 0;
    for(let i = 0; i < s.length; i++) {
        let odd = expandAroundCenter(s, i, i);
        let even = expandAroundCenter(s, i, i + 1);
        let max = Math.max(odd, even);
        
        if(max > end - start) {
            start = i - (max - 1) / 2;
            end = i + max / 2;
        }
    }

    return s.substring(Math.ceil(start), Math.floor(end) + 1);
}

// expandAroundCenter :: (String, Number, Number) -> Number
const expandAroundCenter = (s, left, right) => {
    // in bounds and palindrome
    while(left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return (right - left) - 1;
}