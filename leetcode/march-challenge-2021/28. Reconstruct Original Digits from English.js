// Given a non-empty string containing an out-of-order English representation of digits 0-9, output the digits in ascending order.

// Note:
// Input contains only lowercase English letters.
// Input is guaranteed to be valid and can be transformed to its original digits. That means invalid inputs such as "abc" or "zerone" are not permitted.
// Input length is less than 50,000.
// Example 1:
// Input: "owoztneoer"

// Output: "012"
// Example 2:
// Input: "fviefuro"

// Output: "45"

// SOLUTION 1:
// TODO: make code more readable or write comments

// originalDigits :: String -> String
const originalDigits = (s) => {
    const words = { 'z': 'zero', 'x': 'six', 'w': 'two', 'u': 'four', 'g': 'eight', 's': 'seven', 'v': 'five', 'r': 'three', 'o': 'one', 'n': 'nine' };
    const nums = { 'z': 0, 'x': 6, 'w': 2, 'u': 4, 'g': 8, 's': 7, 'v': 5, 'r': 3, 'o': 1, 'n': 9 };
    let order = 'zxwugsvron';
    const count = {};
    for(let c of s) count[c] = (count[c] || 0) + 1;
  
    const res = new Array(10);
    for (let key of order) {
        while (count[key]) {
            for (let w of words[key]) {
                count[w]--;
            }
            res[nums[key]] = (res[nums[key]] || '') + nums[key];
        }
    }
    return res.join('');
};

// SOLUTION 2:
// TODO: make code more readable or write comments

// originalDigits :: String -> String
const originalDigits = (s) => {
    const digits = ["zero", "two", "four", "six", "eight", "one", "three", "five"," seven", "nine"];
    const indexes = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
    const uniqueLetters = {
      0: 'z',
      2: 'w',
      4: 'u',
      6: 'x',
      8: 'g',
      1: 'o',
      3: 't',
      5: 'f',
      7: 's',
      9: 'n'
    };
    
    const count = new Array(26).fill(0);
    for(let c of s) count[c.charCodeAt(0) - 97]++;
  
    let res = [];
    
    for(let i = 0; i < 10; i++) {
      const index = indexes[i];
      const digit = digits[i];
      const letter = uniqueLetters[index];
      
      while(count[letter.charCodeAt(0) - 97]) {
        for(let c of digit) {
          count[c.charCodeAt(0) - 97]--;
        }
        res.push(index);
      }
    }
    res.sort((a, b) => a - b)
    return res.join('');
  };