// A valid encoding of an array of words is any reference string s and array of indices indices such that:

// words.length == indices.length
// The reference string s ends with the '#' character.
// For each index indices[i], the substring of s starting from indices[i] and up to (but not including) the next '#' character is equal to words[i].
// Given an array of words, return the length of the shortest reference string s possible of any valid encoding of words.

 

// Example 1:

// Input: words = ["time", "me", "bell"]
// Output: 10
// Explanation: A valid encoding would be s = "time#bell#" and indices = [0, 2, 5].
// words[0] = "time", the substring of s starting from indices[0] = 0 to the next '#' is underlined in "time#bell#"
// words[1] = "me", the substring of s starting from indices[1] = 2 to the next '#' is underlined in "time#bell#"
// words[2] = "bell", the substring of s starting from indices[2] = 5 to the next '#' is underlined in "time#bell#"
// Example 2:

// Input: words = ["t"]
// Output: 2
// Explanation: A valid encoding would be s = "t#" and indices = [0].

 

// Constraints:

// 1 <= words.length <= 2000
// 1 <= words[i].length <= 7
// words[i] consists of only lowercase letters.

// SOLUTION 1:
// O(n^2)

const includes = (a, b) => {
    let i = a.length;
    let j = b.length;
    
    while(j >= 0) {
      if(a[i] !== b[j]) return false;
      i--;
      j--;
    }
    
    return true;
  }
  
  // minimumLengthEncoding :: [String] -> Number
  const minimumLengthEncoding = (words) => {
    words.sort((a, b) => b.length - a.length);
    
    let len = words.length;
    for(let i = 0; i < len; i++) {
      for(let j = i + 1; j < len; j++) {
        if(words[j] && includes(words[i], words[j])) words[j] = '';
      }
    }
    
    words = words.filter(Boolean);
    len  = words.length;
    
    return words.join('').length + len;
  };

// SOLUTION 2:
// specilized trie
// O(n log n)

// minimumLengthEncoding :: [String] -> Number
const minimumLengthEncoding = (words) => {
    words.sort((a, b) => b.length - a.length);
   
    const trie = new Trie();
    
    let len = 0;
    
    for(let word of words) {
      if(trie.has(word)) continue;
      trie.insert(word);
      len += word.length + 1;
    }
    
    return len;
  };
  
  // Trie :: () -> Object
  function Trie() {
    this.root = { children: {} };
  
    // find :: (String, Boolean) -> Boolean
    this.find = function(word, strict) {
        let currentNode = this.root;
    
        for(let i = word.length - 1; i >= 0; i--) {
            let key = word[i] // word.substr(0, i + 1); (alterrnative B)
            if(!currentNode.children[key]) return false;
  
            if(i === 0) {
                return true;
            }
  
            currentNode = currentNode.children[key];
        }
    }
  
    // insert :: String -> ()
    this.insert = function(word) {
        let currentNode = this.root;
  
        for(let i = word.length - 1; i >= 0; i--) {
            const key = word[i];
  
            if(currentNode.children[key]) {
                currentNode = currentNode.children[key];
            } else {
                let newNode = { children: {} };
                currentNode.children[key] = newNode;
                currentNode = newNode;
            }
        }
    }
  
    // has :: String -> (String, Boolean) -> Boolean
    this.has = word => this.find(word, false);
  }