// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
//
// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
//
//
//
// Example 1:
//
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
//              Total amount you can rob = 1 + 3 = 4.
// Example 2:
//
// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
//              Total amount you can rob = 2 + 9 + 1 = 12.
//
//
// Constraints:
//
// 0 <= nums.length <= 100
// 0 <= nums[i] <= 400

// SOLUTION 1:

// rob :: [Number] -> Number
const rob = nums => {
    return nums.reduce(function(acc, val) {
        return [acc[1], Math.max(acc[0] + val, acc[1])];
    }, [0,0])[1];
};


// SOLUTION 2:

// rob :: [Number] -> Number
const rob = nums => {
    const len = nums.length;

    if(!nums || len === 0) return 0;
    if(len === 1) return nums[0];
    if(len === 2) return Math.max(nums[0], nums[1]);

    const dp = Array.from({ length: len });
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for(let i = 2; i < len; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    }

    return dp[len - 1];
};
