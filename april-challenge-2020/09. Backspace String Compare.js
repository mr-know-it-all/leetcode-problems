// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
//
// Note that after backspacing an empty text, the text will continue empty.

// backspaceCompare :: (String, String) -> Boolean
const backspaceCompare = (S, T) => {
    let a = '';
    let b = '';

    let sLen = S.length;
    let tLen = T.length;

    for(let i = 0; i < sLen; i++) {
        if(S[i] === '#') {
            a = a.substr(0, a.length - 1);
        } else if(S[i + 1] && S[i + 1] === '#') {
            i += 1;
            continue;
        } else {
            a += S[i];
        }
    }

    for(let i = 0; i < tLen; i++) {
        if(T[i] === '#') {
            b = b.substr(0, b.length - 1);
        } else if(T[i + 1] && T[i + 1] === '#') {
            i += 1;
            continue;
        } else {
            b += T[i];
        }
    }

    return a === b;
};
