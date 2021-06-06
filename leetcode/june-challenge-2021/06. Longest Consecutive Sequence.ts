// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

 

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9
 

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

// SOLUTION 1:
// naive O(n log n)

function longestConsecutive(nums: number[]): number {
    if(nums.length === 0) return 0;
    nums = Array.from(new Set(nums));
    nums.sort((a: number, b: number): number => a - b);
    
    let max: number = 1;
    let index: number = 0;
    
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] + 1 === nums[i + 1]) {
            max = Math.max(max, (i + 1) - (index - 1));
        } else {
            index = i + 1;
        }
    }
    
    return max;
};