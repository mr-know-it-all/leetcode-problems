// We had some 2-dimensional coordinates, like "(1, 3)" or "(2, 0.5)".  Then, we removed all commas, decimal points, and spaces, and ended up with the string s.  Return a list of strings representing all possibilities for what our original coordinates could have been.

// Our original representation never had extraneous zeroes, so we never started with numbers like "00", "0.0", "0.00", "1.0", "001", "00.01", or any other number that can be represented with less digits.  Also, a decimal point within a number never occurs without at least one digit occuring before it, so we never started with numbers like ".1".

// The final answer list can be returned in any order.  Also note that all coordinates in the final answer have exactly one space between them (occurring after the comma.)

// Example 1:
// Input: s = "(123)"
// Output: ["(1, 23)", "(12, 3)", "(1.2, 3)", "(1, 2.3)"]
// Example 2:
// Input: s = "(00011)"
// Output:  ["(0.001, 1)", "(0, 0.011)"]
// Explanation: 
// 0.0, 00, 0001 or 00.01 are not allowed.
// Example 3:
// Input: s = "(0123)"
// Output: ["(0, 123)", "(0, 12.3)", "(0, 1.23)", "(0.1, 23)", "(0.1, 2.3)", "(0.12, 3)"]
// Example 4:
// Input: s = "(100)"
// Output: [(10, 0)]
// Explanation: 
// 1.0 is not allowed.
 

// Note:

// 4 <= s.length <= 12.
// s[0] = "(", s[s.length - 1] = ")", and the other elements in s are digits.
 
// SOLUTION 1:
// unclean first draft

// ambiguousCoordinates :: String -> [String]
const ambiguousCoordinates = (str) => {
    let combos = [];
    let s = str.replace('(', '').replace(')', '');
    
    for(let i = 0; i < s.length - 1; i++) {
        let prefix = s.substring(0, i + 1);
        let suffix = s.substring(i + 1);
        combos.push([prefix, suffix]);   
    }
    
    const len = combos.length;
    for(let i = 0; i < len; i++) {
        let [p, s] = combos[i];
        
        for(let i = 0; i < p.length - 1; i++) {
            let prefix = p.substring(0, i + 1);
            let suffix = p.substring(i + 1);
            
            combos.push([prefix + '.' + suffix, s]);
            
            for(let i = 0; i < s.length - 1; i++) {
                let _prefix = s.substring(0, i + 1);
                let _suffix = s.substring(i + 1);
            
                combos.push([prefix + '.' + suffix, _prefix + '.' + _suffix]);
            }
        }
        for(let i = 0; i < s.length - 1; i++) {
            let prefix = s.substring(0, i + 1);
            let suffix = s.substring(i + 1);
            
            combos.push([p, prefix + '.' + suffix]);
        }
    }
    
    combos = combos.filter(c => {
        const [p, s] = c;
        if(p.length > 1 && p[0] === '0' && p[1] !== '.') return false;
        if(s.length > 1 && s[0] === '0' && s[1] !== '.') return false;
        
        if(p.length > 1 && Math.ceil(p) === 0) return false;
        if(s.length > 1 && Math.ceil(s) === 0) return false;
        
        if(p[p.length - 1] === '0' && p[p.length - 2] === '.') return false;
        if(s[s.length - 1] === '0' && s[s.length - 2] === '.') return false;
        
        const [pp, ppp] = p.split('.');
        const [ss, sss] = s.split('.');
        
        if(ppp && ppp[ppp.length - 1] === '0') return false;
        if(sss && sss[sss.length - 1] === '0') return false;
        return true;
    });
    
    return combos.map(([p, s]) => '(' + p + ', ' + s + ')');
};