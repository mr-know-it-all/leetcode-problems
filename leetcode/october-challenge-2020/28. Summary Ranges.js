// You are given a sorted unique integer array nums.

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b
 

// Example 1:

// Input: nums = [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: The ranges are:
// [0,2] --> "0->2"
// [4,5] --> "4->5"
// [7,7] --> "7"
// Example 2:

// Input: nums = [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: The ranges are:
// [0,0] --> "0"
// [2,4] --> "2->4"
// [6,6] --> "6"
// [8,9] --> "8->9"
// Example 3:

// Input: nums = []
// Output: []
// Example 4:

// Input: nums = [-1]
// Output: ["-1"]
// Example 5:

// Input: nums = [0]
// Output: ["0"]
 

// Constraints:

// 0 <= nums.length <= 20
// -231 <= nums[i] <= 231 - 1
// All the values of nums are unique.

// SOLUTION 1:
// TODO: make the code more readable

// summaryRanges :: [Number] -> [String]
const summaryRanges = nums => {
    if(nums.length === 0) return [];
    
    const result = [];
    
    let temp = [];
    while(nums.length) {
        let curr = nums.shift();
        
        if(temp.length === 0) {
            temp.push(curr);
        } else if(temp.length === 1) {
            if(temp[0] + 1 === curr) {
                temp.push(curr);
            } else {
                result.push(String(temp[0]));
                temp = [curr];
            }
        } else {
             if(temp[1] + 1 === curr) {
                temp[1] = curr;
            } else {
                result.push(String(temp[0]) + '->' + String(temp[1]));
                temp = [curr];
            } 
        } 
    }

    if(temp.length === 1) result.push(String(temp[0]));
    else result.push(String(temp[0]) + '->' + String(temp[1]));
    
    return result;
};