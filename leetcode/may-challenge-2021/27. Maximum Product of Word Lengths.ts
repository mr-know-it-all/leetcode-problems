// Given a string array words, return the maximum value of length(word[i]) * length(word[j]) where the two words do not share common letters. If no such two words exist, return 0.

 

// Example 1:

// Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]
// Output: 16
// Explanation: The two words can be "abcw", "xtfn".
// Example 2:

// Input: words = ["a","ab","abc","d","cd","bcd","abcd"]
// Output: 4
// Explanation: The two words can be "ab", "cd".
// Example 3:

// Input: words = ["a","aa","aaa","aaaa"]
// Output: 0
// Explanation: No such pair of words.
 

// Constraints:

// 2 <= words.length <= 1000
// 1 <= words[i].length <= 1000
// words[i] consists only of lowercase English letters.

function maxProduct(words: string[]): number {
    const getSymbol = (word: string): number[] => {
        const letters: number[] = new Array(27).fill(0);
        
        for(let l of word) {
            letters[l.charCodeAt(0) - 97]++;
        }
        
        return letters;
    }
    
    let max: number = 0;
    for(let w1 of words) {
        const s1: number[] = getSymbol(w1);
        f: for(let w2 of words) {
            const s2: number[] = getSymbol(w2);
            
            for(let i = 0; i <= 27; i++) {
                if(s1[i] > 0 && s2[i] > 0) continue f;
            }
    
            const localMax: number = w1.length * w2.length;
            if(localMax > max) max = localMax;
        }
    }
    
    return max;
};