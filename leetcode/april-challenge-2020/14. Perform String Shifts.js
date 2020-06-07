// You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:
//
// direction can be 0 (for left shift) or 1 (for right shift).
// amount is the amount by which string s is to be shifted.
// A left shift by 1 means remove the first character of s and append it to the end.
// Similarly, a right shift by 1 means remove the last character of s and add it to the beginning.
// Return the final string after all operations.

// shiftLeft :: (String, Number) -> String
const shiftLeft = (str, amount) => {
    let xs = str.split('');

    while(amount > 0) {
        xs.push(xs.shift());
        amount--;
    }

    return xs.join('');
}

// shiftRight :: (String, Number) -> String
const shiftRight = (str, amount) => {
    let xs = str.split('')

    while(amount > 0) {
        xs.unshift(xs.pop());
        amount--;
    }

    return xs.join('');
}

let method = [shiftLeft, shiftRight];

// stringShift :: (String, [[Number]]) -> String
var stringShift = function(s, shift) {
    const [left, right] = shift.reduce((acc, val) => {
        return (acc[val[0]] += val[1], acc);
    }, [0, 0]);

    if(left > right) return shiftLeft(s, left - right);
    if(right > left) return shiftRight(s, right - left);

    return s;
};
