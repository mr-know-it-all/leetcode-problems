// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.
//
// This is case sensitive, for example "Aa" is not considered a palindrome here.
//
// Note:
// Assume the length of given string will not exceed 1,010.
//
// Example:
//
// Input:
// "abccccdd"
//
// Output:
// 7
//
// Explanation:
// One long

// longestPalindrome :: String -> Number
const longestPalindrome = str => {
    const hash = {};
    let duplicates = 0;

    for(let char of str) {
        if(hash[char]) { delete hash[char]; duplicates++; }
        else { hash[char] = true; }
    };

    return duplicates * 2 + (duplicates * 2 < str.length ? 1 : 0);
};
