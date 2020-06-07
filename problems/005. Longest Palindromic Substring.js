// https://leetcode.com/problems/longest-palindromic-substring/submissions/

// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

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
