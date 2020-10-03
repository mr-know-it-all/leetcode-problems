// Your are given an array of positive integers nums.

// Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.

// Example 1:
// Input: nums = [10, 5, 2, 6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Note:

// 0 < nums.length <= 50000.
// 0 < nums[i] < 1000.
// 0 <= k < 10^6.

// numSubarrayProductLessThanK :: ([Number], Number) -> Number
const numSubarrayProductLessThanK = (nums, k) => {
    if(k <= 1) return 0;
    
    let [count, left, right, product] = [0, 0, 0, 1];
    
    while(right < nums.length) {
        product *= nums[right];
        
        while(product >= k) {
            product /= nums[left];
            left++;
        }

        count += (right - left) + 1;
        right++;
        
    }
          
    return count;
};