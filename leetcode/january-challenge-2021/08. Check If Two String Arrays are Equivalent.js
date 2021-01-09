// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

 

// Example 1:

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.
// Example 2:

// Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
// Output: false
// Example 3:

// Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
// Output: true
 

// Constraints:

// 1 <= word1.length, word2.length <= 103
// 1 <= word1[i].length, word2[i].length <= 103
// 1 <= sum(word1[i].length), sum(word2[i].length) <= 103
// word1[i] and word2[i] consist of lowercase letters.

// SOLUTION 1:

// arrayStringsAreEqual :: ([String], [String]) -> Boolean
const arrayStringsAreEqual = (word1, word2) => {
    const makeString = xs => xs.reduce((acc, val) => acc + val, '');
    
    return makeString(word1) === makeString(word2);
};

// SOLUTION 2:

// arrayStringsAreEqual :: ([String], [String]) -> Boolean
const arrayStringsAreEqual = (word1, word2) => {
    let a = '';
    let b = '';
    
    while(word1.length || word2.length) {
        a += word1.shift() || '';
        b += word2.shift() || '';
        
        let i = Math.max(0, Math.min(a.length, b.length) - 1);
        
        while(a[i] && b[i]) {
            if(a[i] !== b[i]) return false;
            i++;
        }
    }
    
    return a === b;
};

// SOLUTION 3:

// arrayStringsAreEqual :: ([String], [String]) -> Boolean
const arrayStringsAreEqual = (word1, word2) => {
    let a = '';
    let b = '';
    
    while(word1.length || word2.length) {
        a += word1.shift() || '';
        b += word2.shift() || '';
        
        let i = Math.min(a.length, b.length);
        
        if(a.substring(0, i) === b.substring(0, i)) {
            a = a.substring(i);
            b = b.substring(i);
        } else return false;
    }
    
    return a === b;
};

// SOLUTION 4:

// arrayStringsAreEqual :: ([String], [String]) -> Boolean
const arrayStringsAreEqual = (word1, word2) => {
    let a = '';
    let b = '';
    
    for(let c of word1) a += c;
    for(let c of word2) b += c;
    
    return a === b;
};