// Given a positive integer num, write a function which returns True if num is a perfect square else False.
//
// Note: Do not use any built-in library function such as sqrt.

// isPerfectSquare :: Number -> Boolean
const isPerfectSquare = num => {
    if(num === 1) return true;

    for(let i = 1; i * i <= num; i++) if(i * i === num) return true;

    return false;
};
