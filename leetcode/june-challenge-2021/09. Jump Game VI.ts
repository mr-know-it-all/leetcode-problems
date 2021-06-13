// You are given a 0-indexed integer array nums and an integer k.

// You are initially standing at index 0. In one move, you can jump at most k steps forward without going outside the boundaries of the array. That is, you can jump from index i to any index in the range [i + 1, min(n - 1, i + k)] inclusive.

// You want to reach the last index of the array (index n - 1). Your score is the sum of all nums[j] for each index j you visited in the array.

// Return the maximum score you can get.

 

// Example 1:

// Input: nums = [1,-1,-2,4,-7,3], k = 2
// Output: 7
// Explanation: You can choose your jumps forming the subsequence [1,-1,4,3] (underlined above). The sum is 7.
// Example 2:

// Input: nums = [10,-5,-2,4,0,3], k = 3
// Output: 17
// Explanation: You can choose your jumps forming the subsequence [10,4,3] (underlined above). The sum is 17.
// Example 3:

// Input: nums = [1,-5,-20,4,-1,3,-6,-3], k = 2
// Output: 0
 

// Constraints:

//  1 <= nums.length, k <= 105
// -104 <= nums[i] <= 104
//    Hide Hint #1  
// Let dp[i] be "the maximum score to reach the end starting at index i". The answer for dp[i] is nums[i] + min{dp[i+j]} for 1 <= j <= k. That gives an O(n*k) solution.
//    Hide Hint #2  
// Instead of checking every j for every i, keep track of the smallest dp[i] values in a heap and calculate dp[i] from right to left. When the smallest value in the heap is out of bounds of the current index, remove it and keep checking.

function maxResult(nums: number[], k: number): number {
    const dq: number[] = [];
    
    for(let i = nums.length - 1; i >= 0; i--) {
        // eliminate out of reach positions
        while(dq.length && dq[0] > i + k) dq.shift();
        
        
        if(dq.length) {
            // dq[0] will store the index of the max number available
            nums[i] += nums[dq[0]];
            // make sure dq[0] stores the highest number index
            while(dq.length && nums[dq[dq.length - 1]] < nums[i]) dq.pop();
        }
        
        // add current number index to queue
        dq.push(i);
    }
    
    return nums[0];
};