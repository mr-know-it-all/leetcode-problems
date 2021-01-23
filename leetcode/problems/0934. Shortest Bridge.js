// In a given 2D binary array A, there are two islands.  (An island is a 4-directionally connected group of 1s not connected to any other 1s.)

// Now, we may change 0s to 1s so as to connect the two islands together to form 1 island.

// Return the smallest number of 0s that must be flipped.  (It is guaranteed that the answer is at least 1.)

 

// Example 1:

// Input: A = [[0,1],[1,0]]
// Output: 1
// Example 2:

// Input: A = [[0,1,0],[0,0,0],[0,0,1]]
// Output: 2
// Example 3:

// Input: A = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
// Output: 1
 

// Constraints:

// 2 <= A.length == A[0].length <= 100
// A[i][j] == 0 or A[i][j] == 1

// SOLUTION 1:
// TODO: implement faster algorithm

// shortestBridge :: [[Number]] -> Number
const shortestBridge = A => {
    const L = A.length;
    const islandOne = [];
    
    const colored = {};
    const colorIsland = (i, j) => {
        if(colored[i + '-' + j]) return;
        colored[i + '-' + j] = true;
        
        if(A[i] !== undefined && A[i][j] !== undefined && A[i][j] === 1) {
            A[i][j] = 2;
            
            islandOne.push([i, j]);
            
            colorIsland(i - 1, j);
            colorIsland(i, j - 1);
            colorIsland(i + 1, j);
            colorIsland(i, j + 1);
        }
    }
    
    f1: for(let i = 0; i < L; i++) {
        for(let j = 0; j < L; j++) {
            if(A[i][j] === 1) {
                colorIsland(i, j);
                break f1;
            }
        }
    }
    
    let min = Infinity;
    for(let i = 0; i < L; i++) {
        for(let j = 0; j < L; j++) {
            if(A[i][j] === 1) {
                for(let val of islandOne) {
                    const newMin = Math.abs(j - val[1]) + Math.abs(i - val[0]);
                    
                    if(newMin < min) {
                        min = newMin;
                    }
                }
            }
        }
    }

    return Math.max(1, min - 1);
};