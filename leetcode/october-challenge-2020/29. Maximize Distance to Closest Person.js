// You are given an array representing a row of seats where seats[i] = 1 represents a person sitting in the ith seat, and seats[i] = 0 represents that the ith seat is empty (0-indexed).

// There is at least one empty seat, and at least one person sitting.

// Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized. 

// Return that maximum distance to the closest person.

 

// Example 1:


// Input: seats = [1,0,0,0,1,0,1]
// Output: 2
// Explanation: 
// If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
// If Alex sits in any other open seat, the closest person has distance 1.
// Thus, the maximum distance to the closest person is 2.
// Example 2:

// Input: seats = [1,0,0,0]
// Output: 3
// Explanation: 
// If Alex sits in the last seat (i.e. seats[3]), the closest person is 3 seats away.
// This is the maximum distance possible, so the answer is 3.
// Example 3:

// Input: seats = [0,1]
// Output: 1
 

// Constraints:

// 2 <= seats.length <= 2 * 104
// seats[i] is 0 or 1.

// maxDistToClosest :: [Number] -> Number
const maxDistToClosest = seats => {
    const expand = i => {
        if(seats[i] === 1) return 0;
        
        let [left, right] = [seats[i - 1], seats[i + 1]];
        
        let count = 1;
        while(
            left === 0 && right === 0 ||
            left === 0 && right === undefined ||
            right === 0 && left === undefined
        ) {
            count++;
            [left, right] = [seats[i - count], seats[i + count]]
        }
        
        return count;
    }   
    
    let max = 0;
    for(let i = 0; i < seats.length; i++) max = Math.max(expand(i), max);
    
    return max;
};