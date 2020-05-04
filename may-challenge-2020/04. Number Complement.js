// https://leetcode.com/explore/challenge/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3319/

// Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

// SOLUTION 1:

// findComplement :: Number -> Number
const findComplement = num => {
    const bitLength = num.toString(2).length;

    return ~num & (Math.pow(2, bitLength) - 1);
};

// SOLUTION 2:
// may be more intuitive, because we flip one bit at a time

// findComplement :: Number -> Number
const findComplement = num => {
    const complementString = (
        num
          .toString(2)
          .split('')
          .reduce((acc, val) => acc + (val ^ 1), '')
    );

    return parseInt(complementString, 2);
}
