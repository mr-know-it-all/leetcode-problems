// Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?


// SOLUTION 1:

// singleNumber :: [Number] -> Number
const singleNumber = nums => {
    let map = new Map();

    for(num of nums) {
        const count = map.get(num);

        if(count === undefined) { map.set(num, 1); continue; }
        if(count === 2) { map.delete(num); continue; }
        map.set(num, count + 1);
    }

    return map.keys().next().value;
};
