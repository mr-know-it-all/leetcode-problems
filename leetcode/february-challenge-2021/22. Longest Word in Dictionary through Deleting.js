// Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string. If there are more than one possible results, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

// Example 1:
// Input:
// s = "abpcplea", d = ["ale","apple","monkey","plea"]

// Output: 
// "apple"
// Example 2:
// Input:
// s = "abpcplea", d = ["a","b","c"]

// Output: 
// "a"
// Note:
// All the strings in the input will only contain lower-case letters.
// The size of the dictionary won't exceed 1,000.
// The length of all the strings in the input won't exceed 1,000.

// SOLUTION 1:

// isSubsequence :: String -> String
const isSubsequence = function(seq, str) {
    for(let char of seq) {
        let index = str.indexOf(char);
        if(index === -1) return false;
        str = str.substr(index + 1);
    }
    
    return true;
};

// findLongestWord :: (String, [String]) -> String
const findLongestWord = (s, d) => {
    // sort words first by length then by lexicographic order
    // so that the first valid word can be returned as the answer
    d.sort((a, b) => {
        const B = b.length; 
        const A = a.length;
        
        if(B !== A) return B - A;
        else if(b > a) return -1;
        else if(b < a) return 1;
        else return 0;
    });

    for(let w of d) if(isSubsequence(w, s)) return w;
    
    return '';
};