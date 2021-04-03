// You are given an array of binary strings strs and two integers m and n.

// Return the size of the largest subset of strs such that there are at most m 0's and n 1's in the subset.

// A set x is a subset of a set y if all elements of x are also elements of y.

 

// Example 1:

// Input: strs = ["10","0001","111001","1","0"], m = 5, n = 3
// Output: 4
// Explanation: The largest subset with at most 5 0's and 3 1's is {"10", "0001", "1", "0"}, so the answer is 4.
// Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.
// {"111001"} is an invalid subset because it contains 4 1's, greater than the maximum of 3.
// Example 2:

// Input: strs = ["10","0","1"], m = 1, n = 1
// Output: 2
// Explanation: The largest subset is {"0", "1"}, so the answer is 2.
 

// Constraints:

// 1 <= strs.length <= 600
// 1 <= strs[i].length <= 100
// strs[i] consists only of digits '0' and '1'.
// 1 <= m, n <= 100

// SOLUTION 1:
// slow recursive + memoization solution

// findMaxForm :: ([String], Int, Int) -> Int
const findMaxForm = (strs, m, n) => {
    const key = (a, b, c) => a + ':' + b + ':' + c;
    strs.sort((a, b) => a.length - b.length);
    
    const dp = {};
    const compute = (index = 0, zs = 0, os = 0, count = 0) => {
      if(index === strs.length) return count;
      if(dp[key(index, zs, os)]) return dp[key(index, zs, os)];
      
      const curr = strs[index];
      let zeros = 0, ones = 0;
      for(let c of curr) {
        if(c === '0') zeros++;
        if(c === '1') ones++;
        
        if(zeros + zs > m || ones + os > n) {
          return dp[key(index, zs, os)] = (
            compute(index + 1, zs, os, count)
          );
        }
      }
      
      return dp[key(index, zs, os)] = Math.max(
        compute(index + 1, zeros + zs, ones + os, count + 1),
        compute(index + 1, zs, os, count)
      );
    }
    
    return compute();
  };

  // SOLUTION 2:
  // same as one

  // findMaxForm :: ([String], Int, Int) -> Int
const findMaxForm = (strs, m, n) => {
    const key = (a, b, c) => a + ':' + b + ':' + c;
    strs.sort((a, b) => a.length - b.length);
    
    const dp = {};
    const compute = (index = 0, zs = 0, os = 0) => {
      if(index === strs.length) return 0;
      if(dp[key(index, zs, os)]) return dp[key(index, zs, os)];
      
      const curr = strs[index];
      let zeros = 0, ones = 0;
      for(let c of curr) {
        if(c === '0') zeros++;
        if(c === '1') ones++;
        
        if(zeros + zs > m || ones + os > n) {
          return dp[key(index, zs, os)] = (
            compute(index + 1, zs, os)
          );
        }
      }
      
      return dp[key(index, zs, os)] = Math.max(
        1 + compute(index + 1, zeros + zs, ones + os),
        compute(index + 1, zs, os)
      );
    }
    
    return compute();
  };

// SOLUTION 3:

// findMaxForm :: ([String], Int, Int) -> Int
const findMaxForm = (strs, m, n) => {
    const key = (a, b, c) => a + ':' + b + ':' + c;
    
    const dp = {};
    const compute = (index = 0, zs = 0, os = 0) => {
      if(index === strs.length) return 0;
      if(dp[key(index, zs, os)]) return dp[key(index, zs, os)];
      
      const curr = strs[index];
      let zeros = 0, ones = 0;
      for(let c of curr) {
        if(c === '0') zeros++;
        if(c === '1') ones++;
        
        if(zeros + zs > m || ones + os > n) {
          return dp[key(index, zs, os)] = (
            compute(index + 1, zs, os)
          );
        }
      }
      
      return dp[key(index, zs, os)] = Math.max(
        1 + compute(index + 1, zeros + zs, ones + os),
        compute(index + 1, zs, os)
      );
    }
    
    return compute();
  };