// Given a binary string s and an integer k.

// Return True if every binary code of length k is a substring of s. Otherwise, return False.

 

// Example 1:

// Input: s = "00110110", k = 2
// Output: true
// Explanation: The binary codes of length 2 are "00", "01", "10" and "11". They can be all found as substrings at indicies 0, 1, 3 and 2 respectively.
// Example 2:

// Input: s = "00110", k = 2
// Output: true
// Example 3:

// Input: s = "0110", k = 1
// Output: true
// Explanation: The binary codes of length 1 are "0" and "1", it is clear that both exist as a substring. 
// Example 4:

// Input: s = "0110", k = 2
// Output: false
// Explanation: The binary code "00" is of length 2 and doesn't exist in the array.
// Example 5:

// Input: s = "0000000001011100", k = 4
// Output: false
 

// Constraints:

// 1 <= s.length <= 5 * 10^5
// s consists of 0's and 1's only.
// 1 <= k <= 20

// SOLUTION 1:
// slow O((2 ^ K) * n)

const getCodes = k => {
    const codes = [];
    
    (function compute(k, str = '') {
      if(k === 0) {
        codes.push(str);
        return;
      }
      
      compute(k - 1, str + '0');
      compute(k - 1, str + '1');
    })(k);
    
    return codes;
  }
  
  // hasAllCodes :: (String, Int) -> Boolean
  const hasAllCodes = (s, k) => {
      const codes = getCodes(k);
    
      for(let code of codes) {
        if(s.indexOf(code) === -1) return false;
      }
    
      return true;
  };

  // SOLUTION 2:
  // O(n)

  // hasAllCodes :: (String, Int) -> Boolean
const hasAllCodes = (s, k) => {
    let need = 1 << k;
    const seen = new Set();
    
    for(let i = k; i <= s.length; i++) {
      const substr = s.substring(i - k, i);
      
      if(seen.has(substr)) continue;
      
      seen.add(substr);
      need--;
      if(need === 0) return true;
    }
    
    return false;
  };