// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

// SOLUTION 1:

// isAnagram :: (String, String) -> Boolean
const isAnagram = (a, b) => {
    const map = new Map();
    
    for(let c of a) map.set(c, (map.get(c) || 0) + 1);

    for(let c of b) {
        if(map.has(c)) {
            if(map.get(c) === 0) return false;
            
            if(map.get(c) === 1) map.delete(c);
            else map.set(c, map.get(c) - 1);
        } else {
            return false;
        }
    }
    
    return map.size === 0;
};

// SOLUTION 2:

// isAnagram :: (String, String) -> Boolean
const isAnagram = (a, b) => {
    a = a.split('').sort().join('');
    b = b.split('').sort().join('');
    
    return a === b;
};

// SOLUTION 3:

// isAnagram :: (String, String) -> Boolean
const isAnagram = (a, b) => {
    const m = a.length;
    const n = b.length;
    
    if(m !== n) return false;
    
    a = a.split('').sort();
    b = b.split('').sort();
    
    for(let i = 0; i < m; i++) if(a[i] !== b[i]) return false;
    
    return true;
};

// SOLUTION 4:

// isAnagram :: (String, String) -> Boolean
const isAnagram = (a, b) => {
    const m = a.length;
    const n = b.length;
    
    if(a.length !== b.length) return false;
    
    let A = {};
    let B = {};
    
    const chars = new Set();
    for(let i = 0; i < m; i++) {
        A[a[i]] = (A[a[i]] || 0) + 1;
        B[b[i]] = (B[b[i]] || 0) + 1;
        
        chars.add(a[i]);
        chars.add(b[i]);
    }
    
    for(let c of chars) if(A[c] !== B[c]) return false;
    
    return true;
};

// SOLUTION 5:

// isAnagram :: (String, String) -> Boolean
const isAnagram = (a, b) => {
    const m = a.length;
    const n = b.length;
    
    if(a.length !== b.length) return false;
    
    let chars = new Array(26).fill(0);
    for(let i = 0; i < m; i++) {
        chars[a[i].charCodeAt(0) - 97] += 1;
        chars[b[i].charCodeAt(0) - 97] -= 1;
    }
    
    return chars.every(x => x === 0);
};