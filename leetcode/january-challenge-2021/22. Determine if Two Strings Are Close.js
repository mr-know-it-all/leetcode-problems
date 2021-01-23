// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

 

// Example 1:

// Input: word1 = "abc", word2 = "bca"
// Output: true
// Explanation: You can attain word2 from word1 in 2 operations.
// Apply Operation 1: "abc" -> "acb"
// Apply Operation 1: "acb" -> "bca"
// Example 2:

// Input: word1 = "a", word2 = "aa"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
// Example 3:

// Input: word1 = "cabbba", word2 = "abbccc"
// Output: true
// Explanation: You can attain word2 from word1 in 3 operations.
// Apply Operation 1: "cabbba" -> "caabbb"
// Apply Operation 2: "caabbb" -> "baaccc"
// Apply Operation 2: "baaccc" -> "abbccc"
// Example 4:

// Input: word1 = "cabbba", word2 = "aabbss"
// Output: false
// Explanation: It is impossible to attain word2 from word1, or vice versa, in any amount of operations.
 

// Constraints:

// 1 <= word1.length, word2.length <= 105
// word1 and word2 contain only lowercase English letters.

// SOLUTION 1:

// closeStrings :: (String, String) -> String
const closeStrings = (word1, word2) => {
    const freq1 = {};
    for(let c of word1) {
        freq1[c] = (freq1[c] || 0) + 1;
    }
    
    const freq2 = {};
    for(let c of word2) {
        if(!freq1[c]) return false;
        
        freq2[c] = (freq2[c] || 0) + 1;
    }
    
    const added1 = {};
    const added2 = {};
    for(let c of word1) {
        if(added1[c]) continue;
        
        if(freq1[c] === freq2[c]) {
            added2[c] = true;
            added1[c] = true;
            continue;
        }
        
        let found = false;

        for(let key of Object.keys(freq2)) {
            if(added2[key]) continue;

            if(freq2[key] === freq1[c]) {
                added1[c] = true;
                added2[key] = true;

                freq2[key] = -1;
                found = true;
                break;
            }
        }

        if(!found) return false;
    }
    
    return true;
};