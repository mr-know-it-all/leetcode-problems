// Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] such that i < j < k and nums[i] < nums[k] < nums[j].

// Return true if there is a 132 pattern in nums, otherwise, return false.

// Follow up: The O(n^2) is trivial, could you come up with the O(n logn) or the O(n) solution?

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: false
// Explanation: There is no 132 pattern in the sequence.
// Example 2:

// Input: nums = [3,1,4,2]
// Output: true
// Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
// Example 3:

// Input: nums = [-1,3,2,0]
// Output: true
// Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
 

// Constraints:

// n == nums.length
// 1 <= n <= 104
// -109 <= nums[i] <= 109

// find132pattern :: [Number] -> [Number]
const find132pattern = nums => {
    if(nums.length < 3) return false;
    
    // this will be the smallest element that has a bigger element before it
    let kth = -Infinity;
    // this will hold candidates for the kth element
    let stack = [];
    
    for(let i = nums.length - 1; i >= 0; i--) {
        const ith = nums[i];
        
        // once we have a kth value it means we have a jth value
        // if we get a suitable ith value, we have a solution
        if(ith < kth) {
            return true;
        } else {
            const jth = ith;
            
            // we have added values to the stack and
            // there is a value to the right that's bigger than current value
            // find the smallest value to the right that's smaller than the current value
            while(stack.length > 0 && jth > stack[stack.length - 1]) {
                kth = stack.pop();
            }
        }
        
        stack.push(ith);
    }
    
    return false;
};