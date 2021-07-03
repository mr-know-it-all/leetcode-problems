// You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

// We repeatedly make duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

 

// Example 1:

// Input: s = "abbaca"
// Output: "ca"
// Explanation: 
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
// Example 2:

// Input: s = "azxxzy"
// Output: "ay"
 

// Constraints:

// 1 <= s.length <= 105
// s consists of lowercase English letters.

// SOLUTION 1:

function _removeDuplicates(s: string): string {
    const list: string[] = Array.from(s);
    
    let updated: boolean = true;
    
    while(updated) {
        updated = false;
        
        for(let i = 0; i < list.length - 1; i++) {
            if(list[i] === list[i + 1]) {
                updated = true;
                list.splice(i, 2);
                i -= 2;
            }
        }
    } 
    
    return list.join('');
};

// SOLUTION 2:

function removeDuplicates(s: string): string {
    const stack: string[] = [];
    
    for(let i = 0; i < s.length; i++) {
        if(stack[0] === s[i]) {
            stack.shift();
        } else {
            stack.unshift(s[i]);
        }
    }
    
    return stack.reverse().join('');
};