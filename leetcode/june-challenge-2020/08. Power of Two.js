// Given an integer, write a function to determine if it is a power of two.

// SOLUTON 1:
// TODO: add faster solution

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


// SOLUTON 2:

// Intuition:
/*
    A power of two has only one bit set to one in binary.
    If n is power of 2, (n - 1) will have all bits flipped, e.g.: 4 (100) becomes 3 (011).
    n & (n - 1) will cancel out all bits in for every n that is a power of 2.
*/

// isPowerOfTwo :: Number -> Boolean
const isPowerOfTwo = n => n > 0 && (n & (n - 1)) === 0;
