// Write an algorithm to determine if a number n is "happy".
//
// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
//
// Return True if n is a happy number, and False if not.

// isHappy :: Number -> Boolean
const isHappy = n => {
    let result = false;
    let cache = new Set();

    while(true) {
        let step = String(n).split('').reduce((acc, d) => acc + (d * d), 0);
        if(step === 1) {
            result = true;
            break;
        } else {
            if(cache.has(step)) {
                break;
            } else {
                cache.add(step);
                n = step;
            }
        }
    }

    return result;
};
