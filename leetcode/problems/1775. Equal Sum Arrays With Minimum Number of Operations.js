// You are given two arrays of integers nums1 and nums2, possibly of different lengths. The values in the arrays are between 1 and 6, inclusive.

// In one operation, you can change any integer's value in any of the arrays to any value between 1 and 6, inclusive.

// Return the minimum number of operations required to make the sum of values in nums1 equal to the sum of values in nums2. Return -1​​​​​ if it is not possible to make the sum of the two arrays equal.

 

// Example 1:

// Input: nums1 = [1,2,3,4,5,6], nums2 = [1,1,2,2,2,2]
// Output: 3
// Explanation: You can make the sums of nums1 and nums2 equal with 3 operations. All indices are 0-indexed.
// - Change nums2[0] to 6. nums1 = [1,2,3,4,5,6], nums2 = [6,1,2,2,2,2].
// - Change nums1[5] to 1. nums1 = [1,2,3,4,5,1], nums2 = [6,1,2,2,2,2].
// - Change nums1[2] to 2. nums1 = [1,2,2,4,5,1], nums2 = [6,1,2,2,2,2].
// Example 2:

// Input: nums1 = [1,1,1,1,1,1,1], nums2 = [6]
// Output: -1
// Explanation: There is no way to decrease the sum of nums1 or to increase the sum of nums2 to make them equal.
// Example 3:

// Input: nums1 = [6,6], nums2 = [1]
// Output: 3
// Explanation: You can make the sums of nums1 and nums2 equal with 3 operations. All indices are 0-indexed. 
// - Change nums1[0] to 2. nums1 = [2,6], nums2 = [1].
// - Change nums1[1] to 2. nums1 = [2,2], nums2 = [1].
// - Change nums2[0] to 4. nums1 = [2,2], nums2 = [4].
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 105
// 1 <= nums1[i], nums2[i] <= 6

const sum = (xs) => xs.reduce((a, b) => a + b);
const sort = (xs) => xs.sort((a, b) => a - b);

// minOperations :: ([Number], [Number]) -> Number
const minOperations = function(a, b) {
  if(a.length * 6 < b.length || b.length * 6 < a.length) return -1;  
  
  let sumA = sum(a);
  let sumB = sum(b);
  
  // for simplicity, make the first array the smallest one
  if(sumA > sumB) return minOperations(b, a);
  
  // sort the arrays to be able to find iterativelly the best choice over
  // adding to the smaller array or removing from the larger one
  sort(a);
  sort(b);
  
  let i = 0, j = b.length - 1, ops = 0;
  
  // to minimize the number of ops, choose the biggest value of:
  // adding to the smaller array -> 6 - element
  // removing from the bigger array -> element - 1
  while(sumA < sumB) {
    if(j < 0 || 6 - a[i] > b[j] - 1) {
      sumA += 6 - a[i];
      i++;
    } else {
      sumA += b[j] - 1;
      j--;
    }
    
    ops++;
  }
  
  return ops;
};