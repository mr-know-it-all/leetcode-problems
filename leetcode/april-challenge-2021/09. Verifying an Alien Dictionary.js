// In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

 

// Example 1:

// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
// Example 2:

// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
// Example 3:

// Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
// Output: false
// Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
 

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 20
// order.length == 26
// All characters in words[i] and order are English lowercase letters.

// isAlienSorted :: ([String], String) -> Boolean
const isAlienSorted = (words, order) => {
    const val = {};
    for(let i = 0; i < order.length; i++) val[order[i]] = i;
    
    for(let i = 1; i < words.length; i++) {
      let a = words[i - 1];
      let b = words[i];
      
      if(a.indexOf(b) === 0 && a.length > b.length) return false;
      
      for(let i = 0; i < Math.min(a.length, b.length); i++) {
        if(val[a[i]] < val[b[i]]) break;
        
        if(val[a[i]] > val[b[i]]) {
          return false;
        }
      }
    }
    
    return true;
  };