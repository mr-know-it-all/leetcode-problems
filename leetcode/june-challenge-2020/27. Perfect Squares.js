// Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n

const isSquare = n => Math.sqrt(n) % 1 === 0;

// numSquares :: Number -> Number
const numSquares = n => {
    const cache = {};
    let result = Infinity;

    (function decompose(n, count = 0) {
        if(n < 0 || count >= result) return;

        if(cache[n + '-' + count]) return;
        cache[n + '-' + count] = true;

        if(n === 0) {
            result = Math.min(result, count);
            return;
        }

        let next = n;
        while(next > 0) {
            if(isSquare(next)) decompose(n - next, count + 1);
            next--;
        }
    })(n);

    return result;
};
