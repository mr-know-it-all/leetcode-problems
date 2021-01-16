// A string s is called good if there are no two different characters in s that have the same frequency.

// Given a string s, return the minimum number of characters you need to delete to make s good.

// The frequency of a character in a string is the number of times it appears in the string. For example, in the string "aab", the frequency of 'a' is 2, while the frequency of 'b' is 1.

 

// Example 1:

// Input: s = "aab"
// Output: 0
// Explanation: s is already good.
// Example 2:

// Input: s = "aaabbbcc"
// Output: 2
// Explanation: You can delete two 'b's resulting in the good string "aaabcc".
// Another way it to delete one 'b' and one 'c' resulting in the good string "aaabbc".
// Example 3:

// Input: s = "ceabaacb"
// Output: 2
// Explanation: You can delete both 'c's resulting in the good string "eabaab".
// Note that we only care about characters that are still in the string at the end (i.e. frequency of 0 is ignored).
 

// Constraints:

// 1 <= s.length <= 105
// s contains only lowercase English letters.

// SOLUTION 1:

// minDeletions :: String -> Number
const minDeletions = str => {
    const a = 'a'.charCodeAt(0);
    
    const freq = new Array(26).fill(0);
    for(let c of str) freq[c.charCodeAt(0) - a]++;

    const added = new Set();
    let count = 0;
    
    for(let i = 0; i < 26; i++) {        
        while(freq[i] > 0 && added.has(freq[i])) {
            freq[i]--;
            count++;
        }
        added.add(freq[i])
    }
    
    return count;
};

// SOLUTION 2:

// minDeletions :: String -> Number
const minDeletions = str => {
    const group = {};
    for(let c of str) group[c] = (group[c] || 0) + 1;
    
    const added = new Set();
    let res = 0;
    
    for(let letter of Object.keys(group)) {
        while(group[letter] > 0 && added.has(group[letter])) {
            group[letter]--;
            res++;
        }
        
        added.add(group[letter]);
    }
    
    return res;
};