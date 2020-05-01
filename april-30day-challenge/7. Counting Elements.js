// Given an integer array arr, count element x such that x + 1 is also in arr.
//
// If there're duplicates in arr, count them seperately.

// countElements :: [Number] -> Number
const countElements = arr => {
    let cache = {};
    let result = 0;

    for(let i = arr.length - 1; i >= 0; i--) {
        cache[arr[i]] = 1;
    }

     for(let i = arr.length - 1; i >= 0; i--) {
        if(cache[arr[i] + 1]) {
            result += 1;
        }
    }
    return result;
};
