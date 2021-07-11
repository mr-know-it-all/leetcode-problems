// Given an n x n matrix where each of the rows and columns are sorted in ascending order, return the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

 

// Example 1:

// Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
// Example 2:

// Input: matrix = [[-5]], k = 1
// Output: -5
 

// Constraints:

// n == matrix.length
// n == matrix[i].length
// 1 <= n <= 300
// -109 <= matrix[i][j] <= 109
// All the rows and columns of matrix are guaranteed to be sorted in non-decreasing order.
// 1 <= k <= n2

// SOLUTION 1:
// naive

function _kthSmallest(matrix: number[][], k: number): number {
    let list: number[] = matrix.flatMap(x => x);
    list.sort((a, b) => a - b);
    
    return list[k - 1];
};

// SOLUTION 2:
// plain JavaScript

// function kthSmallest(matrix, k) {
//     const Q = new MaxPriorityQueue();
//     let count = 0;
    
//     for(let i = 0; i < matrix.length; i++) {
//         for(let j = 0; j < matrix[0].length; j++) {
//             Q.enqueue(matrix[i][j]);
            
//             count++;
            
//             if(count > k) {
//                 Q.dequeue();
//                 count--;
//             }
//         }
//     }
    
//     return Q.dequeue().element;
// };

// SOLUTION 3:

function kthSmallest(matrix: number[][], k: number): number {
    const m = matrix.length;
    const n = matrix[0].length;
    
    const countLessThan = x => {
        let count = 0;
        
        for(let row = 0; row < m; row++) {
            let rowCount = 0;
            
            for(let col = 0; col < n; col++) {
                if(matrix[row][col] <= x) rowCount++;
                else break;
            }
            
            count += rowCount;
            if(rowCount === 0) break;
        }
        
        return count;
    };
    
    let l = matrix[0][0];
    let r = matrix[m - 1][n - 1];
    
    while(l <= r) {
        const mid = Math.floor((l + r) / 2);
        const count = countLessThan(mid);
        
        if(count < k) l = mid + 1;
        else r = mid - 1;
    }
    
    return l;
};