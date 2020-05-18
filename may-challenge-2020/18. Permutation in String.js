// Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

// SOLUTION 1:
// this is almost identical to the problem from the previous day (Find All Anagrams in a String)

// checkInclusion :: (String, String) -> Boolean
const checkInclusion = (word, string) => {
    const wordLen = word.length;
    const stringLen = string.length;

    const hash = Array.from({ length: 26 }, () => 0);
    for(let i = 0; i < wordLen; i++) hash[word.charCodeAt(i) - 97]++;

    // for every possible permutation starting from index i
    forEveryPossibleIndex:
    for(let i = 0; i + wordLen <= stringLen; i++) {
        // make a local copy of the characters hash
        const localHash = hash.slice();

        // check if all characters in this window (i -> wordSize) are in hash
        const wordLimit = i + wordLen;
        for(let j = i; j < wordLimit; j++) {
            const char = string.charCodeAt(j) - 97;
            // if a character is missing it means this is not a valid starting index
            if(localHash[char] === 0) continue forEveryPossibleIndex;
            localHash[char] -= 1;
        }

        // we have a match, we are done!
        return true;
    }

    // no matches were found
    return false;
};

// SOLUTION 2:
// "sliding window"

// checkInclusion :: (String, String) -> Boolean
const checkInclusion = (word, string) => {
    const wordLen = word.length;
    const stringLen = string.length;

    const wordHash = Array.from({ length: 26 }, () => 0);
    const windowHash = Array.from({ length: 26 }, () => 0);

    for(let i = 0; i < wordLen; i++) {
        wordHash[word.charCodeAt(i) - 97]++;
        // precompute the hash of the first possible permutation in string
        windowHash[string.charCodeAt(i) - 97]++;
    }


    for(let i = 0; i + wordLen < stringLen; i++) {
        // check if we have a valid window
        if(equals(wordHash, windowHash)) return true;

        // [i -> rest of windowSize] -> j
        windowHash[string.charCodeAt(i + wordLen) - 97]++; // add j
        windowHash[string.charCodeAt(i) - 97]--; // remove i
    }

    return equals(wordHash, windowHash);
};
