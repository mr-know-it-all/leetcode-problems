// Return all non-negative integers of length N such that the absolute difference between every two consecutive digits is K.
//
// Note that every number in the answer must not have leading zeros except for the number 0 itself. For example, 01 has one leading zero and is invalid, but 0 is valid.
//
// You may return the answer in any order.
//
//
//
// Example 1:
//
// Input: N = 3, K = 7
// Output: [181,292,707,818,929]
// Explanation: Note that 070 is not a valid number, because it has leading zeroes.
// Example 2:
//
// Input: N = 2, K = 1
// Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
//
//
// Note:
//
// 1 <= N <= 9
// 0 <= K <= 9

// numsSameConsecDiff :: (Number, Number) -> Number
const numsSameConsecDiff = (N, K) => {
    let result = [];

    const compute = (n, val = '') => {
        if(n === 0) {
            const asNumber = Number(val);
            String(asNumber).length === N && result.push(asNumber);
            return;
        }

        for(let i = 0; i < 10; i++) {
            const prevNumber = () => Number(val[val.length - 1]);
            if(val === '' || Math.abs(prevNumber() - i) === K) {
                compute(n - 1, val + i);
            }
        }
    }

    compute(N);

    return result;
};
