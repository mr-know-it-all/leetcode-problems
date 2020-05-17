// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
//
// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
//
// The order of output does not matter.

// SOLUTION 1:
// TODO: find faster solution

// findAnagrams :: (String, String) -> [Number]
const findAnagrams = function(s, p) {
    const result = [];
    const wordLen = p.length;
    const stringLen = s.length;

    const hash = Array.from({ length: 26 }, () => 0);
    for(let i = 0; i < wordLen; i++) hash[p.charCodeAt(i) - 97]++;

    // for every possible anagram stating from index i
    forEveryPossibleIndex:
    for(let i = 0; i + wordLen <= stringLen; i++) {
        // make a local copy of the characters hash
        const localHash = hash.slice();

        // check if all characters in this window (i -> wordSize) are in hash
        const wordLimit = i + wordLen;
        for(let j = i; j < wordLimit; j++) {
            const char = s.charCodeAt(j) - 97;
            // if a character is missing it means this is not a valid starting index
            if(localHash[char] === 0) continue forEveryPossibleIndex;
            localHash[char] -= 1;
        }

        result.push(i);
    }

    return result;
};
