// Given a string s and a string t, check if s is subsequence of t.

// A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

// isSubsequence :: Strin -> String
const isSubsequence = function(seq, str) {
    for(let char of seq) {
        let index = str.indexOf(char);

        if(index === -1) return false;

        str = str.substr(index + 1);
    }

    return true;
};
