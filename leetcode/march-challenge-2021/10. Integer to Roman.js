// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given an integer, convert it to a roman numeral.

 

// Example 1:

// Input: num = 3
// Output: "III"
// Example 2:

// Input: num = 4
// Output: "IV"
// Example 3:

// Input: num = 9
// Output: "IX"
// Example 4:

// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.
// Example 5:

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

// Constraints:

// 1 <= num <= 3999

const map = {
    //         nine  five four  one
    thousand: [    ,    ,     , 'M'],
    hundred:  ['CM', 'D', 'CD', 'C'],
    ten:      ['XC', 'L', 'XL', 'X'],
    subten:   ['IX', 'V', 'IV', 'I']
};
  
// intToRoman :: Int -> String
const intToRoman = (num) => {
    let [thousand, hundred, ten, subten] = String(num).padStart(4, '0').split('').map(Number);
    
    let res = '';
    
    for(let [key, val] of Object.entries({ thousand, hundred, ten, subten })) {
      if(val) {
        if(val === 9) {
          res += map[key][0];
        } else if(val >= 5) {
          res += map[key][1] + map[key][3].repeat(val - 5);
        } else if(val === 4) {
          res += map[key][2];
        } else {
          res += map[key][3].repeat(val);
        }
      }
    }
    
    return res;
};