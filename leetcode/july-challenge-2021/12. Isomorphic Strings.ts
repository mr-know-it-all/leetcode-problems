// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

// SOLUTION 1:

function _isIsomorphic(s: string, t: string): boolean {
    let m = s.length;
    let n = t.length;
    
    if(m !== n) return false;
    if(m === 1) return true;

    const used = new Set();
    let mapping = {};
    for(let i = 0; i < n; i++) {
        const a = s[i];
        const b = t[i];
    
        if(mapping[a] && mapping[a] !== b || !mapping[a] && used.has(b)) {
            return false;
        } else {
            mapping[a] = b;
            used.add(b)
        }
    }
    
    return true;
};

// SOLUTION 2:

function isIsomorphic(s: string, t: string): boolean {
    const m1 = Array(255).fill(-1);
    const m2 = Array(255).fill(-1);
    
    for(let i = 0; i < s.length; i++) {
        if(m1[s[i]] !== m2[t[i]]) return false;
        
        m1[s[i]] = i;
        m2[t[i]] = i;
    }
    
    return true;
};