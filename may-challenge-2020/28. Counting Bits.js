// Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

// SOLUTION 1:
// (naive)

// bitCount :: Number -> Number
const bitCount = n => (n.toString(2).match(/1/g) || []).length;

// countBits :: Number -> [Number]
const countBits = num => {
    if(num === 0) return [0];
    const result = Array.from({ length: num }, () => 0);

    for(let i = 0; i <= num; i++) {
        result[i] = bitCount(i);
    }

    return result;
 };

// SOLUTION 2:

// countBits :: Number -> [Number]
const countBits = num => {
    if(num === 0) return [0];
    const result = Array.from({ length: num }, () => 0);

    for(let i = 0; i <= num; i++) {
        result[i] = result[i >> 1] + (i & 1)
    }

    return result;
 };
