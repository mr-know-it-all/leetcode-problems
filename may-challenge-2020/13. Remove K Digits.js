// Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

// Note:
// The length of num is less than 10002 and will be ≥ k.
// The given num does not contain any leading zero.

// removeKdigits :: (String, Number) -> String
const removeKdigits = function(num, k) {
    if(k >= num.length) return '0';

    let digits = num.split('');

    while(k-- > 0) {
        for(let i = 0; i < digits.length - 1; i++) {
            if(Number(digits[i]) > Number(digits[i + 1])) {
                digits.splice(i, 1);
                break;
            }

            if(i + 1 === digits.length - 1) {
                digits.splice(i + 1, 1);
                break;
            }
        }
    }

    while(digits[0] === '0') digits.shift();

    return digits.join('') || '0';
};
