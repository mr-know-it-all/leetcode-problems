// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

// The replacement must be in place and use only constant extra memory.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,3,2]
// Example 2:

// Input: nums = [3,2,1]
// Output: [1,2,3]
// Example 3:

// Input: nums = [1,1,5]
// Output: [1,5,1]
// Example 4:

// Input: nums = [1]
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 100

// swap ([Number], Number, Number) -> ()
const swap = (nums, a, b) => {
    [nums[a], nums[b]] = [nums[b], nums[a]];
 }
 
 // nextPermutation :: [Numbers] -> ()
 const nextPermutation = (nums) => {
     const L = nums.length;
     let a = 0;
     let b = 0;
     for(let i = L - 1; i > 0; i--) {
         if(nums[i] < nums[i + 1]) {
             a = i;
             break;
         }
     }
     
     for(let i = L - 1; i > 0; i--) {
         if(nums[i] > nums[a]) {
             b = i;
             break;
         }
     }
 
     if(a === b && a === 0) {
         nums.reverse();
         return;
     }
     swap(nums, a, b);
 
     let i = a + 1;
     let j = L - 1;
     
     while(i < j) {
         swap(nums, i, j);
         i++;
         j--;
     }
 };