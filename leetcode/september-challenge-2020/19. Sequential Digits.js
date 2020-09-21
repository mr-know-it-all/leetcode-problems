// An integer has sequential digits if and only if each digit in the number is one more than the previous digit.
//
// Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.
//
//
//
// Example 1:
//
// Input: low = 100, high = 300
// Output: [123,234]
// Example 2:
//
// Input: low = 1000, high = 13000
// Output: [1234,2345,3456,4567,5678,6789,12345]
//
//
// Constraints:
//
// 10 <= low <= high <= 10^9

const cache = [];

// sequentialDigits :: (Number, Number) -> Number
const sequentialDigits = (low, high) => {
    if(cache.length === 0) {
        // for every starting digit
        for(let i = 1; i <= 9; i++) {
            // for every possible length
            for(let j = i; j <= 9; j++) {
                let n = '';
                // add number of j-th length starting at i-th digit
                for(let k = i; k <= j; k++) {
                    n += k;
                }

                cache.push(n);
            }
        }

        cache.sort((a, b) => a - b);
    }

    return cache.filter(n => n >= low && n <= high);
};
