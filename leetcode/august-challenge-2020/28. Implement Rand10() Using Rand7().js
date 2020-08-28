// Given a function rand7 which generates a uniform random integer in the range 1 to 7, write a function rand10 which generates a uniform random integer in the range 1 to 10.
//
// Do NOT use system's Math.random().

// SOLUTION 1:

// rand10 :: () -> Number
const rand10 = () => {
    let rand = rand7() + rand7() + rand7() + rand7() + rand7();
    return rand % 10 + 1;
};

// SOLUTION 2:

// rand10 :: () -> Number
const rand10 = () => {
    let rand40 = 40;
    while(rand40 >= 40) {
        rand40 = (rand7() - 1) * 7 + rand7() - 1;
    }
    return rand40 % 10 + 1;
};
