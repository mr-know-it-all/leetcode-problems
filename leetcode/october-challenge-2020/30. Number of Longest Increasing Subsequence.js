// Given an integer array nums, return the number of longest increasing subsequences.

 

// Example 1:

// Input: nums = [1,3,5,4,7]
// Output: 2
// Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].
// Example 2:

// Input: nums = [2,2,2,2,2]
// Output: 5
// Explanation: The length of longest continuous increasing subsequence is 1, and there are 5 subsequences' length is 1, so output 5.

 

// Constraints:

// 0 <= nums.length <= 2000
// -106 <= nums[i] <= 106

// findNumberOfLIS :: [Number] -> Number
const findNumberOfLIS = nums => {
    let n = nums.length;
    if(n <= 1) return n;

    const length = Array.from({ length: n }, () => 1);
    const count = Array.from({ length: n }, () => 1);

    for(let i = 1; i < n; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[j] < nums[i]) {
                if(length[j] + 1 > length[i]) {
                    length[i] = length[j] + 1;
                    count[i] = count[j];
                } else if(length[j] + 1 === length[i]) {
                    count[i] += count[j];
                }
            }
        }
    }

    const max = Math.max(...length);

    let result = 0;
    for(let i = 0; i < n; i++) if(length[i] === max) result += count[i];
    
    return result;
};