// Given an array of unique integers, arr, where each integer arr[i] is strictly greater than 1.

// We make a binary tree using these integers, and each number may be used for any number of times. Each non-leaf node's value should be equal to the product of the values of its children.

// Return the number of binary trees we can make. The answer may be too large so return the answer modulo 109 + 7.

 

// Example 1:

// Input: arr = [2,4]
// Output: 3
// Explanation: We can make these trees: [2], [4], [4, 2, 2]
// Example 2:

// Input: arr = [2,4,5,10]
// Output: 7
// Explanation: We can make these trees: [2], [4], [5], [10], [4, 2, 2], [10, 2, 5], [10, 5, 2].
 

// Constraints:

// 1 <= arr.length <= 1000
// 2 <= arr[i] <= 109

// numFactoredBinaryTrees :: [Number] -> Number
const numFactoredBinaryTrees = (arr) => {
    const nums = new Set(arr);
    const dp = {};
    
    const compute = (n) => {
      if(dp[n]) return dp[n];
      
      let count = 0;
      for(let x of arr) {
        if(n % x) continue;
        
        const q = n / x;
        
        if(q === 1) {
          count++;
        } else if(nums.has(q)) {
          count += (compute(x) * compute(q)) % 1000000007;
        }
      }
      
      return dp[n] = count;
    }
    
    let count = 0;
    for(let x of arr) {
      count += compute(x);
    }
    
    return count % 1000000007;
};