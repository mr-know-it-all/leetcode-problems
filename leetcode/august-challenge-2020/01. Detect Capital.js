// Given a word, you need to judge whether the usage of capitals in it is right or not.
//
// We define the usage of capitals in a word to be right when one of the following cases holds:
//
// All letters in this word are capitals, like "USA".
// All letters in this word are not capitals, like "leetcode".
// Only the first letter in this word is capital, like "Google".
// Otherwise, we define that this word doesn't use capitals in a right way.
//
//
// Example 1:
//
// Input: "USA"
// Output: True
//
//
// Example 2:
//
// Input: "FlaG"
// Output: False

// SOLUTION 1

// detectCapitalUse :: String -> Boolean
const detectCapitalUse = word => {
    if(word.length === 1) return true;

    const allLower = word[0] === word[0].toLowerCase();
    let allUpper = false;

    word = word.split('').slice(1).sort();

    if(allLower) {
        for(let i = 0; i < word.length; i++) {
            if(word[i].toLowerCase() !== word[i]) return false;
        }
        return true;
    } else {
        for(let i = 0; i < word.length; i++) {
            if(word[i].toUpperCase() === word[i]) allUpper = true;

            if(allUpper && word[i].toUpperCase() !== word[i]) return false;
        }
        return true;
    }
};
