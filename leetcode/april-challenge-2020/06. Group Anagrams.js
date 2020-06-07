// Given an array of strings, group anagrams together.

const cache = {};

const sortStr = s => {
    if(cache[s]) return cache[s];
    cache[s] = s.split('').sort().join('');
    return cache[s];
}

// groupAnagrams :: [String] -> [[String]]
const groupAnagrams = strs => {
    let result = {};

    for(let i = 0; i < strs.length; i++) {
        let str = strs[i];
        let key = sortStr(str);
        if(result[key] === undefined) result[key] = [];

        result[key].push(str);
    }

    return Object.values(result);
};
