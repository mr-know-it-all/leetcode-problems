// Two images A and B are given, represented as binary, square matrices of the same size.  (A binary matrix has only 0s and 1s as values.)
//
// We translate one image however we choose (sliding it left, right, up, or down any number of units), and place it on top of the other image.  After, the overlap of this translation is the number of positions that have a 1 in both images.
//
// (Note also that a translation does not include any kind of rotation.)
//
// What is the largest possible overlap?
//
// Example 1:
//
// Input: A = [[1,1,0],
//             [0,1,0],
//             [0,1,0]]
//        B = [[0,0,0],
//             [0,1,1],
//             [0,0,1]]
// Output: 3
// Explanation: We slide A to right by 1 unit and down by 1 unit.
// Notes:
//
// 1 <= A.length = A[0].length = B.length = B[0].length <= 30
// 0 <= A[i][j], B[i][j] <= 1

// largestOverlap :: ([Number], [Number]) -> Number
const largestOverlap = function(A, B) {
    const overlap = (row, col) => {
        let count = 0;

        for(let i = 0; i < A.length; i++) {
            for(let j = 0; j < A[0].length; j++) {
                if(
                    i + row < 0 ||
                    i + row >= A.length ||
                    j + col < 0 ||
                    j + col >= A[0].length ||
                    A[i][j] + B[i + row][j + col] !== 2
                ) continue;

                count++;
            }
        }

        return count;
    };

    let max = 0;

    for(let i = -A.length; i < A.length; i++) {
        for(let j = -A[0].length; j < A[0].length; j++) {
            max = Math.max(max, overlap(i, j));
        }
    }

    return max;
};
