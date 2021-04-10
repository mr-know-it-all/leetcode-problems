// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



 

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = ""
// Output: []
// Example 3:

// Input: digits = "2"
// Output: ["a","b","c"]
 

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

// SOLUTION 1:

const D = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}

const computeResult = (letters, progress, currentWord, limit, result) => {
    if(progress === limit) {
        result.push(currentWord);
        return;
    }
    
    for(let i = 0; i < letters[progress].length; i++) {
        const nextWord = currentWord + letters[progress][i];
        
        computeResult(letters, progress + 1, nextWord, limit, result);
    }
}

// letterCombinations :: String -> [String]
const letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    if(digits.length === 1) return D[digits[0]];
    
    const keys = digits.split('').map(d => D[d]);
    const result = [];
    
    computeResult(keys, 0, '', digits.length, result);
    
    return result;
};

// SOLUTION 2:

const D = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}



// letterCombinations :: String -> [String]
const letterCombinations = (digits) => {
  if(digits.length === 0) return [];  
  if(digits.length === 1) return D[digits[0]];
    
  const res = [];
  
  (function compute(index, combo = '') {
    if(digits.length === index) {
      res.push(combo);
      return;
    }
    
    const letters = D[digits[index]];
    
    for(let letter of letters) {
      compute(index + 1, combo + letter);
    }
  })(0);
  
  return res;
};