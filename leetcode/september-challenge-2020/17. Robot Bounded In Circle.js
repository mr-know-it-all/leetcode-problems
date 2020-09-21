// On an infinite plane, a robot initially stands at (0, 0) and faces north.  The robot can receive one of three instructions:
//
// "G": go straight 1 unit;
// "L": turn 90 degrees to the left;
// "R": turn 90 degress to the right.
// The robot performs the instructions given in order, and repeats them forever.
//
// Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.
//
//
//
// Example 1:
//
// Input: "GGLLGG"
// Output: true
// Explanation:
// The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
// When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.
// Example 2:
//
// Input: "GG"
// Output: false
// Explanation:
// The robot moves north indefinitely.
// Example 3:
//
// Input: "GL"
// Output: true
// Explanation:
// The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...
//
//
// Note:
//
// 1 <= instructions.length <= 100
// instructions[i] is in {'G', 'L', 'R'}

// isRobotBounded :: String -> Boolean
const isRobotBounded = instructions => {
    let direction = 'N';
    let x = 0;
    let y = 0;

    for(let instruction of instructions) {
        if(instruction === 'G') {
            if(direction === 'N') {
                y++;
            } else if(direction === 'S') {
                y--;
            } else if(direction === 'W') {
                x--;
            } else {
                x++;
            }
        } else if(instruction === 'L') {
            if(direction === 'N') {
                direction = 'W'
            } else if(direction === 'S') {
                direction = 'E'
            } else if(direction === 'W') {
                direction = 'S'
            } else {
                direction = 'N'
            }
        } else {
            if(direction === 'N') {
                direction = 'E'
            } else if(direction === 'S') {
                direction = 'W'
            } else if(direction === 'W') {
                direction = 'N'
            } else {
                direction = 'S'
            }
        }
    }

    return (x === 0 && y === 0) || (direction !== 'N')
};
