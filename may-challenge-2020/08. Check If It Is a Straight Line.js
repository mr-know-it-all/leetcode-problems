// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// getSlope (Number, Number) -> String | Number
const getSlope = (pivot, point) => (
    point[0] === pivot[0]
    ? 'horrizontal'
    : point[1] === pivot[1]
    ? 'vertical'
    : (1000000.0 * (point[1] - pivot[1])) / (point[0] - pivot[0])
);

// checkStraightLine :: [[Number]] -> Boolean
const checkStraightLine = coords => {
    if(coords.length == 2) return true;

    const [pivot, ...points] = coords;

    for(let i = 0, line; i < points.length; i++) {
        const point = points[i];

        let slope = getSlope(pivot, point);
        if(i === 0) { line = slope; } else if(slope !== line) { return false; }
    }

    return true;
};
