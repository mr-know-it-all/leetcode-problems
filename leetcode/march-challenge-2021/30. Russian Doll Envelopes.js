// You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope.

// One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

// Return the maximum number of envelopes can you Russian doll (i.e., put one inside the other).

// Note: You cannot rotate an envelope.

 

// Example 1:

// Input: envelopes = [[5,4],[6,4],[6,7],[2,3]]
// Output: 3
// Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
// Example 2:

// Input: envelopes = [[1,1],[1,1],[1,1]]
// Output: 1
 

// Constraints:

// 1 <= envelopes.length <= 5000
// envelopes[i].length == 2
// 1 <= wi, hi <= 104

// SOLUTION 1
// slow recursive TLE

// maxEnvelopes :: [[Number, Number]] -> Number
const maxEnvelopes = (envelopes) => {
    const n = envelopes.length;
    
    const w = envelopes.slice(0);
    const h = envelopes.slice(0);
    
    w.sort(([a, ], [b, ]) => b - a);
    h.sort(([, a], [, b]) => b - a);
    
    const makeDoll = (w, type) => (index, prev = null, count = 0) => {
      if(index === n) return count;
  
      if(!prev) {
        return Math.max(
          makeDoll(w, type)(index + 1, w[index], 1),
          makeDoll(w, type)(index + 1, null, 0)
        );
      } else {
        if(prev[0] > w[index][0] && prev[1] > w[index][1]) {
          return Math.max(
            makeDoll(w, type)(index + 1, w[index], count + 1),
            makeDoll(w, type)(index + 1, prev, count)
          );
        }
        return makeDoll(w, type)(index + 1, prev, count);
      }
    }
  
    return Math.max(makeDoll(w, 0)(0), makeDoll(h, 1)(0));
  };

// SOLUTION 2:

// maxEnvelopes :: [[Number, Number]] -> Number
const maxEnvelopes = (list) => {
    const n = list.length;
    if(!n) return n;
    
    list.sort(([a], [b]) => a - b);
    
    const dp = new Array(n).fill(1);
    
    for(let i = 0; i < n; i++) {
      for(let j = 0; j < i; j++) {
        if(list[j][0] < list[i][0] && list[j][1] < list[i][1]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
    }
    
    return Math.max(...dp);
  };
