// Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
//
//
//
// Example 1:
//
// Input: [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.
// Example 2:
//
// Input: [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.
// Example 3:
//
// Input: [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
//
//
// Note:
//
// You may assume the interval's end point is always bigger than its start point.
// Intervals like [1,2] and [2,3] have borders "touching" but they don't overlap each other.

// SOLUTION 1:

// eraseOverlapIntervals :: [[Number]] -> Number
const eraseOverlapIntervals = intervals => {
    intervals.sort((a, b) => a[1] - b[1]);
    let prev = intervals[0];
    let removals = 0;

    for(let i = 1; i < intervals.length; i++) {
        const [, prevRight] = prev;
        const [nextLeft, ] = intervals[i];

        if(prevRight <= nextLeft) prev = intervals[i];
        else removals++;
    }
    return removals;
};

// SOLUTION 2:
// TLE of course, painfully slow, but nice Intuition
// TODO: find a way to make it pass the tests

// hasInterval :: ([[Number]], [Number, Number]) -> Number
const hasInterval = (path, interval) => {
    return path.some((p) => {
        let [l, r] = p;
        let [ll, rr] = interval;

        if(ll < r && l < rr) {
            return true;
        }
    })
};

// eraseOverlapIntervals :: [[Number]] -> Number
const eraseOverlapIntervals = intervals => {
    let min = Infinity;

    const dfs = (index, path = [], removed = 0) => {
        if(removed >= min) return;
        if(index === intervals.length) {
            if(removed < min) min = removed;
            return;
        }

        let interval = intervals[index];
        if(hasInterval(path, interval)) {
            dfs(index + 1, path, removed + 1);
        } else {
            dfs(index + 1, [...path, interval], removed);
            dfs(index + 1, path, removed + 1);
        }

    }

    dfs(0);
    return min;
};
