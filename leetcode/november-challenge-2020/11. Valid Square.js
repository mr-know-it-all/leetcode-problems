// Given the coordinates of four points in 2D space, return whether the four points could construct a square.

// The coordinate (x,y) of a point is represented by an integer array with two integers.

// Example:

// Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
// Output: True
 

// Note:

// All the input integers are in the range [-10000, 10000].
// A valid square has four equal sides with positive length and four equal angles (90-degree angles).
// Input points have no order.
 
// SOLUTION 1:

const dist = (a, b) => Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2);

// validSquare :: ([Number], [Number], [Number], [Number]) -> Boolean
const validSquare = (p1, p2, p3, p4) => {
    const distances = [
        dist(p1, p2), dist(p1, p3), dist(p1, p4),
        dist(p2, p3), dist(p2, p4),
        dist(p3, p4)
    ];

    distances.sort((a, b) => a - b);
    
    const [sideA, sideB, sideC, sideD, diagA, diagB] = distances;
    
    return (
        sideA !== 0 &&
        sideA === sideB &&
        sideB === sideC &&
        sideC === sideD &&
        diagA === diagB
    );
};