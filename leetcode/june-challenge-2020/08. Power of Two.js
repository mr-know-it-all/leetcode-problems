// Given an integer, write a function to determine if it is a power of two.

// SOLUTON 1:
// TODO: add fater solution

// isPowerOfTwo :: Number -> Boolean
const isPowerOfTwo = n => {
    if(n === 1 || n === 2) return true;
    if(n & 1) return false;

    while(n > 2) {
        n = n / 2;
        if(n & 1) return false;
        if(n === 2) return true;
    }

    return false;
};
