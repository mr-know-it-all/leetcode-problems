// Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.

 

// Example 1:

// Input: s = "aaabb", k = 3
// Output: 3
// Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.
// Example 2:

// Input: s = "ababbc", k = 2
// Output: 5
// Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only lowercase English letters.
// 1 <= k <= 105

// longestSubstring :: (String, Number) -> Number
const longestSubstring = (s, k) => {
    let map=new Map();
    map.clear();
    for(item of s) {
        if(map.has(item)) map.set(item, map.get(item) + 1);
        else map.set(item,1);
    }
    for([item,val] of map) {
        if(val < k) {
            let parts = s.split(item);
            let res = 0;
            for(word of parts) {
                res = Math.max(res, longestSubstring(word, k));
            }
            return res;
        }
    }
    return s.length;
}