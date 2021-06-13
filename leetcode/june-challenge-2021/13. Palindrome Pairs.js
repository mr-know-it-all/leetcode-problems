// Given a list of unique words, return all the pairs of the distinct indices (i, j) in the given list, so that the concatenation of the two words words[i] + words[j] is a palindrome.

 

// Example 1:

// Input: words = ["abcd","dcba","lls","s","sssll"]
// Output: [[0,1],[1,0],[3,2],[2,4]]
// Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]
// Example 2:

// Input: words = ["bat","tab","cat"]
// Output: [[0,1],[1,0]]
// Explanation: The palindromes are ["battab","tabbat"]
// Example 3:

// Input: words = ["a",""]
// Output: [[0,1],[1,0]]
 

// Constraints:

// 1 <= words.length <= 5000
// 0 <= words[i].length <= 300
// words[i] consists of lower-case English letters.

// SOLUTION 1:
// TODO: write faster, cleaner algorithm

// palindromePairs :: [[String]] -> [[Number]]
const palindromePairs = (words) => {
    const isPal = str => {
        let left = 0;
        let right = str.length - 1;
        
        while(left < right) {
            if(str[left] !== str[right]) return false;
            
            left++;
            right--;
        }
        
        return true;
    };
    
    const result = [];
    let added = new Array(words.length).fill(0).map(() => new Array(words.length).fill(0));
    
    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < words.length; j++) {
            if(i === j || added[i][j]) continue;
            const w = words[i] + words[j];
            
            if(isPal(w)) {
                result.push([i, j]);
                added[i][j] = true;
                if(words[i].length === words[j].length) {
                    result.push([j, i]);
                    added[j][i] = true;
                }
                
            }
        }
    }
    
    return result;
};