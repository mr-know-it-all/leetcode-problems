// Given a list of words, each word consists of English lowercase letters.

// Let's say word1 is a predecessor of word2 if and only if we can add exactly one letter anywhere in word1 to make it equal to word2. For example, "abc" is a predecessor of "abac".

// A word chain is a sequence of words [word_1, word_2, ..., word_k] with k >= 1, where word_1 is a predecessor of word_2, word_2 is a predecessor of word_3, and so on.

// Return the longest possible length of a word chain with words chosen from the given list of words.

 

// Example 1:

// Input: words = ["a","b","ba","bca","bda","bdca"]
// Output: 4
// Explanation: One of the longest word chain is "a","ba","bda","bdca".
// Example 2:

// Input: words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
// Output: 5
 

// Constraints:

// 1 <= words.length <= 1000
// 1 <= words[i].length <= 16
// words[i] only consists of English lowercase letters.

// SOLUTION 1:
// barely passes

const validate = (prev, curr) => {
    if(prev.length + 1 !== curr.length) {
        return false;
    }
    
    for(let i = 0; i < curr.length; i++) {
        const modified = curr.substring(0, i) + curr.substring(i + 1);
        if(prev === modified) return true;
    }
    
    return false;
}

// longestStrChain :: [String] -> Int
const longestStrChain = (words) => {
    words.sort((a, b) => a.length - b.length);
    const dp = {};
    const compute = (prev, next) => {
        if(dp[prev + ':' + next]) return dp[prev + ':' + next];
        if(words[next] === undefined) {
            return 0;
        }
        
        const _prev = words[prev];
        const _next = words[next];
        
        let max = 1;
        if(validate(_prev, _next)) {
            max = Math.max(
                1 + compute(next, next + 1),
                compute(prev, next + 1)
            )
        } else {
            max = compute(prev, next + 1);
        }
        
        return dp[prev + ':' + next] = max;
    }
    
    let max = 0;
    for(let i = 1; i < words.length; i++) {
        const localMax = compute(i - 1, i);
        max = Math.max(max, localMax);
    }
    
    return max + 1;
};

// SOLUTION 2:

const validate = (prev, curr) => {
    if(prev.length + 1 !== curr.length) {
        return false;
    }
    
    for(let i = 0; i < curr.length; i++) {
        const modified = curr.substring(0, i) + curr.substring(i + 1);
        if(prev === modified) return true;
    }
    
    return false;
}

// longestStrChain :: [String] -> Int
const longestStrChain = (words) => {
    words.sort((a, b) => a.length - b.length);
    const n = words.length;
    
    const dp = new Array(n).fill(1);
    for(let prev = 0; prev < n; prev++) {
        for(let curr = prev + 1; curr < n; curr++) {
            if(validate(words[prev], words[curr])) {
                dp[curr] = Math.max(dp[curr], (dp[prev] + 1));
            }
        }
    }
    
    return Math.max(...dp);
};