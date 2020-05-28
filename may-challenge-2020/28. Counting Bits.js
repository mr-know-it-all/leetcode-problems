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
