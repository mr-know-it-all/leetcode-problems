// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
//
// Example 1:
//
// Input: 16
// Output: true
// Example 2:
//
// Input: 5
// Output: false
// Follow up: Could you

// isPowerOfFour :: Number -> Boolean
const isPowerOfFour = num => {
    return (
        num > 0 && // this one is obvious
        (num & (num - 1)) === 0 && // has a single 1 in binary, hence power of 2
        (num & 1431655765) !== 0 // the 1 bit is in the right place
    );
};
