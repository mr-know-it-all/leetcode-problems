// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// firstUniqChar :: String -> Number
const firstUniqChar = function(s) {
    const list = new Map();
    const added = new Map();

    for(let i = 0; i < s.length; i++) {
        const key = s[i];
        
        if(list.get(key) === undefined && added.get(key) === undefined) {
           list.set(key, i);
        } else {
            list.delete(key);
            added.set(key, i);
        }
    }

    const unique = list.get(list.keys().next().value);
    return unique === undefined ? -1 : unique;
};
