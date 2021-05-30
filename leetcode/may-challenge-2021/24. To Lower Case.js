// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

 

// Example 1:

// Input: s = "Hello"
// Output: "hello"
// Example 2:

// Input: s = "here"
// Output: "here"
// Example 3:

// Input: s = "LOVELY"
// Output: "lovely"
 

// Constraints:

// 1 <= s.length <= 100
// s consists of printable ASCII characters.

// toLowerCase :: String -> String
const toLowerCase = (s) => {
    let result = '';
    
    for(let ch of s) {
        if(ch.charCodeAt(0) < 97 && ch.charCodeAt(0) > 64) {
            result += String.fromCharCode(ch.charCodeAt(0) + 32);
        } else {
            result += ch;
        }
    }
    
    return result;
};