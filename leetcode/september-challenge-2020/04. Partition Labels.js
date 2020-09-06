// A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.
//
//
//
// Example 1:
//
// Input: S = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
//
//
// Note:
//
// S will have length in range [1, 500].
// S will consist of lowercase English letters ('a' to 'z') only.

// partitionLabels :: String -> [Number]
const partitionLabels = S => {
    const limit = {};
    for(let i = 0; i < S.length; i++) limit[S[i]] = i;

    const partitions = [];

    let currEnd = 0;
    let prevEnd = 0;
    for(let i = 0; i < S.length; i++) {
        currEnd = Math.max(currEnd, limit[S[i]]);

        if(i === currEnd) {
            partitions.push(i - prevEnd + 1);
            prevEnd = i + 1;
        }
    }

    return partitions;
};
