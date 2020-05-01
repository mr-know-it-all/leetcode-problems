// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:
//
// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.

// checkValidString :: String -> Boolean
const checkValidString = s => {
    let diff = 0;
    let star = 0;

    for(let i = 0; i < s.length; i++) {
        let c = s[i];

        if (c == '(') {
            diff++;
        } else if (c == ')') {
            diff--;
            if(diff < 0) {
                if(star == 0) return false;
                diff++;
                star--;
            }
        } else {
            if(diff > 0) {
                diff--;
                star += 2;
            } else {
                star++;
            }
        }
    }

    return diff == 0;
};
