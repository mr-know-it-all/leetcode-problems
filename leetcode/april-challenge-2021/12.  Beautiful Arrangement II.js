// Given two integers n and k, you need to construct a list which contains n different positive integers ranging from 1 to n and obeys the following requirement:
// Suppose this list is [a1, a2, a3, ... , an], then the list [|a1 - a2|, |a2 - a3|, |a3 - a4|, ... , |an-1 - an|] has exactly k distinct integers.

// If there are multiple answers, print any of them.

// Example 1:
// Input: n = 3, k = 1
// Output: [1, 2, 3]
// Explanation: The [1, 2, 3] has three different positive integers ranging from 1 to 3, and the [1, 1] has exactly 1 distinct integer: 1.
// Example 2:
// Input: n = 3, k = 2
// Output: [1, 3, 2]
// Explanation: The [1, 3, 2] has three different positive integers ranging from 1 to 3, and the [2, 1] has exactly 2 distinct integers: 1 and 2.
// Note:
// The n and k are in the range 1 <= k < n <= 104.

// SOLUTION 1:

// constructArray :: (Number, Number) => [Number]
const constructArray = (n, k) => {
    const list = new Array(n).fill(0).map((_, i) => i + 1);
    
    const reverseList = (start, end) => {
      while(start < end) {
        [list[start], list[end]] = [list[end], list[start]];
        start++;
        end--;
      }
    }
    
    for(let i = 1; i < k; i++) {
      reverseList(i, n - 1);
    }
    
    return list;
  };

  // SOLUTION 2:

  // constructArray :: (Number, Number) => [Number]
const constructArray = (n, k) => {
    const res = [];
    
    let l = 1, r = k + 1;
    for(let i = 0; i <= k; i++) {
      res.push(i % 2 ? r-- : l++);
    }
    
    for(let i = k + 1; i < n; i++) {
      res.push(i + 1);
    }
    
    return res;
  };