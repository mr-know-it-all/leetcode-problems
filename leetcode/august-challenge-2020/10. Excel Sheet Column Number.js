// Given a column title as appear in an Excel sheet, return its corresponding column number.

// SOLUTION 1:

// titleToNumber :: String -> Number
const titleToNumber = function(s) {
    let total = 0;

    for(let i = 0; i < s.length; i++) {
        total += (s.charCodeAt(i) - 64) * Math.pow(26, s.length - i - 1);
    }

    return total;
};


// SOLUTION 2:

// titleToNumber :: String -> Number
const titleToNumber = function(s) {
    let total = 0;
    let multiplier = 1;

    for(let i = s.length - 1; i >= 0; i--) {
        total += (s.charCodeAt(i) - 64) * multiplier;
        multiplier *= 26;
    }

    return total;
};
