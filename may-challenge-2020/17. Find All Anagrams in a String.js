// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.
//
// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.
//
// The order of output does not matter.

// SOLUTION 1:
// TODO: find faster solution, this one barely passes the tests

// findAnagrams :: (String, String) -> [Number]
const findAnagrams = function(s, p) {
    const result = [];

    const hash = {};
    const wordLen = p.length;
    for(let i = 0; i < wordLen; i++) {
        const char = p[i];
        hash[char] = (hash[char] || 0) + 1;
    }

    const stringLen = s.length;
    for(let i = 0; i + wordLen <= stringLen; i++) {
        let found = true;
        const localHash = Object.assign({}, hash);

        const wordLimit = i + wordLen;
        for(let j = i; j < wordLimit; j++) {
            const char = s[j];
            if(localHash[char] === undefined || localHash[char] === -1) {
                found = false;
                break;
            }

            if(localHash[char] === 1) {
                localHash[char] = -1;
            } else {
                localHash[char] -= 1;
            }
        }

        if(found) result.push(i);
    }

    return result;
};
