// Given a column title as appear in an Excel sheet, return its corresponding column number.

// titleToNumber :: String -> Number
const titleToNumber = function(s) {
    let total = 0;

    for(let i = 0; i < s.length; i++) {
        total += (s.charCodeAt(i) - 64) * Math.pow(26, s.length - i - 1);
    }

    return total;
};
