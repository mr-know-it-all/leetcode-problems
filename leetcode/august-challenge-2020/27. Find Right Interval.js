// Given a set of intervals, for each of the interval i, check if there exists an interval j whose start point is bigger than or equal to the end point of the interval i, which can be called that j is on the "right" of i.
//
// For any interval i, you need to store the minimum interval j's index, which means that the interval j has the minimum start point to build the "right" relationship for interval i. If the interval j doesn't exist, store -1 for the interval i. Finally, you need output the stored value of each interval as an array.
//
// Note:
//
// You may assume the interval's end point is always bigger than its start point.
// You may assume none of these intervals have the same start point.

// SOLUTION 1:

// findRightInterval :: [[Number, Number]] -> [Number]
const findRightInterval = intervals => {
    const list = [];
    const map = {};

    for(let i = 0; i < intervals.length; i++) {
        const start = intervals[i][0];

        list.push(start);
        map[start] = i;
    }

    list.sort((a, b) => a - b);

    return intervals.map(([, end]) => {
        // could use binary search to find the interval
        let interval = list.find(start => end <= start);
        return map[interval] !== undefined ? map[interval] : -1;
    });
};
