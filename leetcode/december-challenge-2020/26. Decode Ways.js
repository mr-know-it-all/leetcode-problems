// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given a non-empty string containing only digits, determine the total number of ways to decode it.

// The answer is guaranteed to fit in a 32-bit integer.

 

// Example 1:

// Input: s = "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L" (12).
// Example 2:

// Input: s = "226"
// Output: 3
// Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
// Example 3:

// Input: s = "0"
// Output: 0
// Explanation: There is no character that is mapped to a number starting with '0'. We cannot ignore a zero when we face it while decoding. So, each '0' should be part of "10" --> 'J' or "20" --> 'T'.
// Example 4:

// Input: s = "1"
// Output: 1
 

// Constraints:

// 1 <= s.length <= 100
// s contains only digits and may contain leading zero(s).

// numDecodings :: String -> Number
const numDecodings = s => {
    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    
    dp[0] = 1;
    dp[1] = s[0] === '0' ? 0 : 1;
    
    for(let i = 2; i <= n; i++) {
        if(s[i - 1] !== '0') dp[i] += dp[i - 1];
        if(s[i - 2] === '1' || s[i - 2] === '2' && s[i - 1] <= '6') dp[i] += dp[i - 2];
    }
    
    return dp[n];
};

// numDecodings :: String -> Number
const numDecodings = s => {
    let dp = {};
    
    const count = i => {
        if(dp[i]) return dp[i];
        
        // we have computed the entire string
        if(i === s.length) return 1;
        // no way to use '0' on its own
        if(s[i] === '0') return 0;
        
        let res = 0;
        res += count(i + 1);
        if(i + 2 <= s.length && Number(s.substring(i, i + 2)) <= 26) {
            res += count(i + 2);
        }
        
        return dp[i] = res;
    }
    
    return count(0);
};