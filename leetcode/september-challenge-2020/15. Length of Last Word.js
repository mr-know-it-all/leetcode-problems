// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.
//
// If the last word does not exist, return 0.
//
// Note: A word is defined as a maximal substring consisting of non-space characters only.
//
// Example:
//
// Input: "Hello World"
// Output: 5

// lengthOfLastWord :: String -> Number
const lengthOfLastWord = s => {
    s = s.trim();
    const L = s.length;
    if(L === 0) return 0;

    let count = 0;
    let index = L - 1;

    while(index > -1 && s[index] !== ' ') {
        count++;
        index--;
    }

    return count;
};
