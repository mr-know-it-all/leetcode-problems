// Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

// Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it does not fit in 32-bit integer, return -1.

 

// Example 1:

// Input: n = 12
// Output: 21
// Example 2:

// Input: n = 21
// Output: -1
 

// Constraints:

// 1 <= n <= 231 - 1

// nextGreaterElement :: Number -> Number
const nextGreaterElement = n => {
    let list = String(n).split('');
    
    for(let i = list.length - 1; i > 0; i--) {
        if(list[i - 1] < list[i]) {
            const left = list.slice(0, i - 1);
            const right = list.slice(i - 1).sort((a, b) => a - b);
            let candidate = list[i - 1];
    
            for(let j = 0; j < right .length; j++) {
                if(right[j] > candidate) {
                    candidate = right[j];
                    right.splice(j, 1);
                    break;
                }
            }
        
            const stringNum = left.concat(candidate).concat(right).join('');
            const num = Number(stringNum);
            
            return num >= 2147483647 ? -1 : num;
        }
    }
    
    return -1;
};