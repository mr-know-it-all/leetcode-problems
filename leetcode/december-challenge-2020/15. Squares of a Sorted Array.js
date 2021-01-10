// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

// SOLUTION 1:

// sortedSquares :: [[Number]] -> [[Number]]
const sortedSquares = nums => {
    return nums.map(x => x * x).sort((a, b) => a - b);
};

// SOLUTION 2:
// slower, just another way of doing it

// addToSortedList :: [Number] -> Number -> ()
const addToSortedList = nums => x => {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > x) {
            if(i === 0) nums.unshift(x);
            else nums.splice(i, 0, x);
            return;
        }
    }
    nums.push(x);
};

// sortedSquares :: [[Number]] -> [[Number]]
const sortedSquares = nums => {
    let negative = [];
    
    while(nums[0] < 0) negative.unshift(Math.pow(nums.shift(), 2));
    for(let i = 0; i < nums.length; i++) nums[i] = Math.pow(nums[i], 2);
    while(negative.length !== 0) addToSortedList(nums)(negative.pop());
    
    return nums;
};