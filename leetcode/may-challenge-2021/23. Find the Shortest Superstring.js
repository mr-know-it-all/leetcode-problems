// Given an array of strings words, return the smallest string that contains each string in words as a substring. If there are multiple valid strings of the smallest length, return any of them.

// You may assume that no string in words is a substring of another string in words.

 

// Example 1:

// Input: words = ["alex","loves","leetcode"]
// Output: "alexlovesleetcode"
// Explanation: All permutations of "alex","loves","leetcode" would also be accepted.
// Example 2:

// Input: words = ["catg","ctaagt","gcta","ttca","atgcatc"]
// Output: "gctaagttcatgcatc"
 

// Constraints:

// 1 <= words.length <= 12
// 1 <= words[i].length <= 20
// words[i] consists of lowercase English letters.
// All the strings of words are unique.

// SOLUTION 1:
// TLE

// shortestSuperstring :: [String] -> String
const shortestSuperstring = (words) => {
    let min = words.join('');
    
    (function permute(xs, perm = []) {
        if(xs.length === 0) {
            
             let result = '';
        
            f1: for(let word of perm) {
                if(result.length >= min.length) break;

                if(result.indexOf(word) !== -1) continue;

                for(let i = result.length - word.length; i < result.length; i++) {
                    const part = result.substring(i);
                    if(word.indexOf(part) === 0) {
                        result += word.substring(part.length);
                        continue f1;
                    }
                }
                result += word;
            }

            if(result.length < min.length) min = result;
            
            return;
        }
        
        for(let x of xs) {
            const a = xs.filter(n => n !== x);
            const b = perm.concat(x);
            
            permute(a, b);
        }
    })(words);    
    
    return min;
};

// SOLUTION 2:

const isConsumed = (unused, i) => ((unused >> i) & 1) == 0;
const consume = (unused, i) => unused & (~(1 << i));
const overlapAppend = (a, b) => {
    for(let i = 0; i < Math.max(a.length, b.length); i++) {
        if(b.indexOf(a.substring(i)) === 0) return a.substring(0, i) + b;
    }
    
    return a + b;
}

// shortestSuperstring :: [String] -> String
const shortestSuperstring = (words) => {
    const map = new Map();
    let unused = 0;
    
    for(let i = 0; i < words.length; i++) {
        unused |= (1 << i);
    }
    
    const compute = (startWord, unused) => {
        if(unused == 0) return startWord;
        
        const key = startWord + ':' + unused;
        if(map.has(key)) return map.get(key);
        
        let shortest = null;
        
        for(let i = 0; i < words.length; i++) {
            if(!isConsumed(unused, i)) {
                const superstring = compute(words[i], consume(unused, i));
                
                const appended = overlapAppend(startWord, superstring);
                
                if(shortest === null || appended.length < shortest.length) {
                    shortest = appended;
                }
            }
        }
        
        map.set(key, shortest);
        return shortest;
    };
    
    return compute('', unused);
}