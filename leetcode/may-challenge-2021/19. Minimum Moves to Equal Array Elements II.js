// Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.

// In one move, you can increment or decrement an element of the array by 1.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: 2
// Explanation:
// Only two moves are needed (remember each move increments or decrements one element):
// [1,2,3]  =>  [2,2,3]  =>  [2,2,2]
// Example 2:

// Input: nums = [1,10,2,9]
// Output: 16
 

// Constraints:

// n == nums.length
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

// SOLUTION 1:

// minMoves2 :: [Number] -> Number
const minMoves2 = (list) => {
    list.sort((a, b) => a - b);
    const n = list.length;
    
    let [left, right] = [0, n - 1];
    let moves = 0;
    while(left < right) {
        moves += list[right] - list[left];
        left++;
        right--;
    }
    
    return moves;
};

// SOLUTION 2:

// minMoves2 :: [Number] -> Number
const minMoves2 = (list) => {
    list.sort((a, b) => a - b);
    
    const mid = Math.floor(list.length/2);
    
    let moves = 0;
    for(let n of list) {
        moves += Math.abs(n - list[mid]);
    }

    return moves;
};