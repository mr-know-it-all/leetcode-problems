// https://leetcode.com/problems/substring-with-concatenation-of-all-words/

// You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

// findSubstring :: (String, [String]) -> [Number]
const findSubstring = (s, words) => {
    const noOfWords = words.length;

    // can't compute any indexes with no words
    if(noOfWords <= 0) return [];

    const stringLength = s.length;
    const wordLength = words[0].length;
    const substringLength = wordLength * noOfWords;

    // if the string is smaller that the size of the substring, there is no result
    if(stringLength < substringLength) return [];

    // store all words is a hash, for duplicates keep a count
    const wordsHash = {};
    for(let i = 0; i < noOfWords; i++) {
        wordsHash[words[i]] = (wordsHash[words[i]] || 0) + 1;
    }

    const result = [];
    // for every possible i'th substring of concatenated words
    for(let i = 0; i <= stringLength - substringLength; i++) {
        // create a local hash of words that compose the substr
        const localHash = { ...wordsHash };

        // for every j'th starting point of a word inside i'th substring
        for(let j = i + substringLength - wordLength; j >= i; j -= wordLength) {
            const word = s.substr(j, wordLength);

            // decrease count or remove word from localHash if found in the substring
            if(localHash[word] > 1) {
                localHash[word] -= 1;
            } else if(localHash[word] === 1) {
                delete localHash[word]
            } else {
                break;
            }
        }

        // if localHash is empty, meaning that all words were part of a substring
        // that starting index is part of the response
        if(Object.keys(localHash).length === 0) result.push(i);
    }

    return result;
};
