// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

// Constraints:

// 1 <= numRows <= 30

// generate :: Number -> [[Number]]
const generate = (numRows) => {
    const result = [[1]];
    
    for(let i = 2; i <= numRows; i++) {
        const row = new Array(i).fill(0);
        const prev = result[result.length - 1];
        
        for(let i = 0; i < row.length; i++) {
            row[i] = (prev[i - 1] || 0) + (prev[i] || 0);
        }
        
        result.push(row);
    }
    
    return result;
};