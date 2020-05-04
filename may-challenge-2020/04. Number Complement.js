// https://leetcode.com/explore/challenge/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3319/

// Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

// findComplement :: Number -> Number
const findComplement = num => {
    const bitLength = num.toString(2).length;

    return ~num & (Math.pow(2, bitLength) - 1);
};
