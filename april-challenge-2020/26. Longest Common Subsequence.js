// Given two strings text1 and text2, return the length of their longest common subsequence.
//
// A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.
//
// If there is no common subsequence, return 0.

// longestCommonSubsequence :: (String, String) -> Number
const longestCommonSubsequence = (text1, text2) => {
    const dp = Array.from({ length: text1.length }, () => Array.from({ length: text2.length }));

    for(let i = 0; i < text1.length; i++) {
        for(let j = 0; j < text2.length; j++) {
            if(text1[i] === text2[j]) {
                if(dp[i - 1] === undefined || dp[i - 1][j - 1] === undefined) {
                    dp[i][j] = 1;
                } else {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                }
            } else {
                let a, b;
                if(dp[i - 1] === undefined) {
                    a = 0;
                } else {
                    a = dp[i - 1][j];
                }

                b = dp[i][j - 1] || 0;
                dp[i][j] = Math.max(a, b);
            }
        }
    }

    return dp[text1.length - 1][text2.length - 1];
};
