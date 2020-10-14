// Given two strings A and B of lowercase letters, return true if you can swap two letters in A so the result is equal to B, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at A[i] and A[j]. For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

 

// Example 1:

// Input: A = "ab", B = "ba"
// Output: true
// Explanation: You can swap A[0] = 'a' and A[1] = 'b' to get "ba", which is equal to B.
// Example 2:

// Input: A = "ab", B = "ab"
// Output: false
// Explanation: The only letters you can swap are A[0] = 'a' and A[1] = 'b', which results in "ba" != B.
// Example 3:

// Input: A = "aa", B = "aa"
// Output: true
// Explanation: You can swap A[0] = 'a' and A[1] = 'a' to get "aa", which is equal to B.
// Example 4:

// Input: A = "aaaaaaabc", B = "aaaaaaacb"
// Output: true
// Example 5:

// Input: A = "", B = "aa"
// Output: false
 

// Constraints:

// 0 <= A.length <= 20000
// 0 <= B.length <= 20000
// A and B consist of lowercase letters.

// SOLUTION 1:

// buddyStrings :: (String, String) -> Boolean
const buddyStrings = (a, b) => {
    if(a.length !== b.length) return false;
    
    while(a[0] === b[0] && a.length > 10) {
        a = a.substr(1);
        b = b.substr(1);
    }
    while(a[a.length - 1] === b[b.length - 1] && a.length > 10) {
        a = a.substr(0, a.length - 1);
        b = b.substr(0, b.length - 1);
    }
    
    for(let i = 0; i < a.length - 1; i++) {
        for(let j = i + 1; j < a.length; j++) {
            const x = a[i];
            const y = a[j];
            
            const left = a.substring(0, i);
            const middle = a.substring(i + 1, j);
            const right = a.substring(j + 1);

            const str = left + y + middle + x + right;
            
            if(str === b) return true;
        }
    }
    
    return false;
};

// SOLUTION 2:

// buddyStrings :: (String, String) -> Boolean
const buddyStrings = (a, b) => {
    // different lengths don't work
    if(a.length !== b.length) return false;
    
    if(a === b) {
        // if they're equal, it only works if there are at least two duplicate characters
        return (new Set([...a])).size < a.length;
    }
    
    const diff = [];
    for(let i = 0; i < a.length; i++) {
        // the strings must be different in only two places for the switch to work
        if(diff.length > 2) return false;
        if(a[i] !== b[i]) diff.push(i);
    }
    
    const [i, j] = diff;

    // those two places must be cross equal
    return a[i] === b[j] && a[j] === b[i];
};