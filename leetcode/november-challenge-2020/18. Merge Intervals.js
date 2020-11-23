// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

// Constraints:

// 1 <= intervals.length <= 104
// intervals[i].length == 2
// 0 <= starti <= endi <= 104

// merge :: [[Number]] -> [[Number]]
const merge = ints => {
    ints.sort((a, b) => a[0] - b[0]);
    
    let res = [];
    
    for(let int of ints) {
        if(res.length) {
            let [l, r] = res[res.length - 1];
            let [ll, rr] = int;
            
            if(l <= r && ll <= r) {
                res[res.length - 1][1] = Math.max(r, rr);
            } else {
                res.push(int);
            }
        } else {
            res.push(int);
        }
    }
    
    return res;
};