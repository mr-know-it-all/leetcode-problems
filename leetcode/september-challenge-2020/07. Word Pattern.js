// Given a pattern and a string str, find if str follows the same pattern.
//
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
//
// Example 1:
//
// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true
// Example 2:
//
// Input:pattern = "abba", str = "dog cat cat fish"
// Output: false
// Example 3:
//
// Input: pattern = "aaaa", str = "dog cat cat dog"
// Output: false
// Example 4:
//
// Input: pattern = "abba", str = "dog dog dog dog"
// Output: false
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.

// SOLUTION 1:
// TODO: clean up code and replace slow A with something better

// wordPattern :: (String, String) -> Boolean
const wordPattern = (pattern, str) => {
    if(!pattern.length) return false;
    let pIndex = 0;
    let string = str.split(' ');
    const match = {}

    while(string.length) {
        if(!match[pattern[pIndex]]) {
            const word = string.shift();
            if(Object.values(match).includes(word)) return false; // <- A

            match[pattern[pIndex]] = word;
        } else {
            if(string.shift() !== match[pattern[pIndex]]) return false;
        }

        pIndex++;

        if(pIndex > pattern.length - 1) pIndex = 0;
    }

    return pIndex === 0;
};
