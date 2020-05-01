// Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

// rangeBitwiseAnd :: Number -> Number -> number
var rangeBitwiseAnd = function(m, n) {
    let count = 0;
    while(m !== n) {
        m >>= 1;
        n >>= 1;
        count++;
    }

    return m << count;
};
