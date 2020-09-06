// Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.
//
//
//
// Example 1:
//
// Input: "abab"
// Output: True
// Explanation: It's the substring "ab" twice.
// Example 2:
//
// Input: "aba"
// Output: False
// Example 3:
//
// Input: "abcabcabcabc"
// Output: True
// Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)

// SOLUTION 1:
// slow, still passes all tests

// repeatedSubstringPattern :: String -> Boolean
const repeatedSubstringPattern = s => {
    if(s.length < 2) return false;

    const limit = Math.floor(s.length / 2);

    for(let i = 1; i <= limit; i++) {
        let regex = new RegExp(s.substr(0, i), 'g');

        if(s.replace(regex, '') === '') return true;
    }

    return false;
};

// SOLUTION 2:
// still slow, an optimization based on tests rather than a general algorithm

// repeatedSubstringPattern :: String -> Boolean
const repeatedSubstringPattern = s => {
    if(s.length < 2) return false;

    const limit = Math.floor(s.length / 2);

    for(let i = limit; i > 0; i--) {
        let regex = new RegExp(s.substr(0, i), 'g');

        if(s.replace(regex, '') === '') return true;
    }

    return false;
};

// SOLUTION 3:
// same logic, but early exit

// repeatedSubstringPattern :: String -> Boolean
const repeatedSubstringPattern = s => {
    if(s.length < 2) return false;

    const limit = Math.floor(s.length / 2);

    const check = sub => {
        let str = s;

        while(str.indexOf(sub) === 0) {
            str = str.substr(sub.length);
        }

        return str.length === 0;
    };

    for(let i = limit; i > 0; i--) {
        if(check(s.substr(0, i))) return true;
    }

    return false;
};

// SOLUTION 4:

// repeatedSubstringPattern :: String -> Boolean
const repeatedSubstringPattern = s => {
    let n = s.length;

    return (s + s).slice(1, (n + n) - 1).includes(s);
};
