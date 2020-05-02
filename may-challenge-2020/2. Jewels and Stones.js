// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
//
// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// SOLUTION 1:

// numJewelsInStones :: (String, String) -> Number
const numJewelsInStones = (J, S) => {
    let result = 0;
    for(let i = 0; i < S.length; i++) if(J.includes(S[i])) result++;
    return result;
};

// TODO: find a smart, faster, solution
