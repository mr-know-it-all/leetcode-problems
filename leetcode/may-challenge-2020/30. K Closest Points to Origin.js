// We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

// (Here, the distance between two points on a plane is the Euclidean distance.)

// You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

// kClosest :: ([[Number]], Number) -> [[Number]]
const kClosest = function(points, K) {
    // distanceToOrigin :: ([Number, Number]) -> Number
    const distanceToOrigin = ([x, y]) => {
        const a = 0 - x;
        const b = 0 - y;

        return Math.sqrt(a * a + b * b);
    }

    points.sort((a, b) => distanceToOrigin(a) - distanceToOrigin(b));

    return points.slice(0, K);
};
