// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

 

// Example 1:

// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:

// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:

// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
// Example 4:

// Input: nums = [0]
// Output: 1
// Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the missing number in the range since it does not appear in nums.
 

// Constraints:

// n == nums.length
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.

// SOLUTION 1:
// O(n log n) time
// O(1) space

// missingNumber :: [Number] -> Number
const missingNumber = (nums) => {
    nums.sort((a, b) => a - b);
    
    const n = nums.length;
    
    for(let i = 0; i < n; i++) {
      if(i !== nums[i]) return i;
    }
    
    return n;
  };

// SOLUTION 2:
// O(n) time
// O(1) space

const dp = {};
// getSum :: Number -> Number
const getSum = n => {
  if(dp[n]) return dp[n];
  else return dp[n] = n * (n + 1) / 2;
}

// missingNumber :: [Number] -> Number
const missingNumber = (nums) => {
  let sum = getSum(nums.length);
  for(let n of nums) sum -= n;
  return sum;
};

// SOLUTION 3:
// O(n) time
// O(1) space

// missingNumber :: [Number] -> Number
const missingNumber = (nums) => {
    const n = nums.length;
    let res = n;
    for(let i = 0; i < n; i++) res = res ^ i ^ nums[i];
    
    return res;
  };