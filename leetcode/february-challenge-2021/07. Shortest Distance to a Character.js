// Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the shortest distance from s[i] to the character c in s.

 

// Example 1:

// Input: s = "loveleetcode", c = "e"
// Output: [3,2,1,0,1,0,0,1,2,2,1,0]
// Example 2:

// Input: s = "aaab", c = "b"
// Output: [3,2,1,0]
 

// Constraints:

// 1 <= s.length <= 104
// s[i] and c are lowercase English letters.
// c occurs at least once in s.

// SOLUTION 1:

// shortestToChar :: (String, Char) -> Number
const shortestToChar = (s, c) => {
    const res = new Array(s.length).fill(Infinity);
    let count = Infinity;
    for(let i = 0; i < s.length; i++) {
        if(s[i] === c) {
            count = 0;
            res[i] = 0;
        } else {
            if(count !== Infinity) {
                count++;
                res[i] = Math.min(count, res[i]);

            }
        }
    }
    count = Infinity;
    for(let i = s.length - 1; i >= 0; i--) {
        if(s[i] === c) {
            count = 0;
            res[i] = 0;
        } else {
            if(count !== Infinity) {
                count++;
                res[i] = Math.min(count, res[i]);
            }
        }
    }
    
    return res;  
};

// SOLUTION 2:

// shortestToChar :: (String, Char) -> Number
const shortestToChar = (s, c) => {
    const res = new Array(s.length).fill(Infinity);
    let a = Infinity;
    let b = Infinity;
    
    let i = 0;
    let j = s.length - 1;
    
    while(i < s.length && j >= 0) {
        if(s[i] === c) {
            res[i] = 0;
            a = 0;
        } else if(a !== Infinity) {
            a++;
            res[i] = Math.min(res[i], a);
        }
        
        if(s[j] === c) {
            res[j] = 0;
            b = 0;
        } else if(b !== Infinity) {
            b++;
            res[j] = Math.min(res[j], b);
        }

        i++;
        j--;
    }
    
    return res;
};