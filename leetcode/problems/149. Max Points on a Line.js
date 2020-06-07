// https://leetcode.com/problems/max-points-on-a-line/

// Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.

// maxPoints :: [[Number, Number]] -> Number
const maxPoints = points => {
    let n = points.length;
    if(n <= 2) return n;

    // at least two points are on the same line :D
    let max = 2;

    // for every point compute the slope it has with all other remaining points
    for(let i = 0; i < n; i++) {
        // duplicates are to be taken into account
        let duplicates = 0;
        let cache = { empty: 0 };

        // i'th point
        const [x1, y1] = points[i];

        for(let j = i + 1; j < n; j++) {
            // j'th point (j > i)
            const [x2, y2] = points[j];

            // duplicates, vertical or horizontal lines
            if(x1 === x2 && y1 === y2) { duplicates += 1; continue; }
            if(x1 === x2) { cache['h'] = (cache['h'] || 0) + 1; continue; }
            if(y1 === y2) { cache['v'] = (cache['v'] || 0) + 1; continue; }

            const slope = (1000000.0 * (y2 - y1)) / (x2 - x1);

            cache[slope] = (cache[slope] || 0) + 1;
        }

        // for one i'th point, combined with the remaining j'th points,
        // compute the maximum number of points that have the same slope with it,
        // plus duplicates, plus itself
        const localMax = Math.max(...Object.values(cache)) + duplicates + 1;

        max = Math.max(max, localMax);
    }

    return max;
};
