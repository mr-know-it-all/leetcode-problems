// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

 

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
// Example 3:

// Input: nums = [1,-1], k = 1
// Output: [1,-1]
// Example 4:

// Input: nums = [9,11], k = 2
// Output: [11]
// Example 5:

// Input: nums = [4,-2], k = 2
// Output: [4]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length

// maxSlidingWindow :: ([Number], Number) => [Number]
const maxSlidingWindow = (nums, k) => {
    const result = [];
    if (nums.length == 0) return result;
    
    const deque = [];
    const add = n => {
        // keep queue in descending order
        while(deque.length > 0 && n > deque[deque.length - 1]) deque.pop();
        deque.push(n);
    }
    const remove = n => {
        // remove only if maximum
        if(n === deque[0]) deque.shift();
    }
    
    let windowStart = 0;
    nums.forEach((n, index) => {
        add(n);
        
        // when we start to move the window
        if(index + 1 >= k) {
            // add max of current window to result
            result.push(deque[0]);
            // remove previous window start element
            remove(nums[windowStart]);
            // move the window
            windowStart++;
        }
    });
    
    return result;
};