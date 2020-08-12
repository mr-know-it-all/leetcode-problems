// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
//
// Note that the row index starts from 0.

// getRow :: Number -> [Number]
const getRow = rowIndex => {
    let index = 0;
    let currentRow = [1];

    while(index++ < rowIndex) {
        let nextRow = Array.from({ length: currentRow.length + 1 }, (_, i) => {
            return (currentRow[i] || 0) + (currentRow[i - 1] || 0);
        });

        currentRow = nextRow;
    }

    return currentRow;
};
