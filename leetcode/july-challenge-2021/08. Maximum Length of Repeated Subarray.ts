// Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.

 

// Example 1:

// Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
// Output: 3
// Explanation: The repeated subarray with maximum length is [3,2,1].
// Example 2:

// Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
// Output: 5
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 100

// SOLUTION 1:
// naive TLE

function _findLength(nums1: number[], nums2: number[]): number {
    const n = nums1.length;
    
    const check = (sub) => {
        if(sub.length === 1) return nums2.find(e => e === sub[0]);
        
        f: for(let len = 0; len <= n; len++) {
            for(let j = 0; j < sub.length; j++) {
                if(nums2[len + j] !== sub[j]) continue f;
            }
            return true;
        }
        
        return false;
    };
    
    for(let len = n; len > 0; len--) {
        for(let i = 0; i + len <= n; i++) {
            const sub = nums1.slice(i, i + len);
            if(check(sub)) {
                return len;
            }
        }
    }
    
    return 0;
};

// SOLUTION 2:

function findLength(a: number[], b: number[]): number {
    const m = a.length;
    const n = b.length;
    
    const dp = Array(m + 1).fill([]).map(() => Array(n + 1).fill(0));
    
    let max = 0;
    
    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++) {
            if(a[i - 1] === b[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
                max = Math.max(max, dp[i][j]);
            }
        }
    }
    
    return max;
};