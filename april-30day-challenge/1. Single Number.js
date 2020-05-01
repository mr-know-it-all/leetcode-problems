// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// singleNumber :: [Number] -> Number
const singleNumber = nums => {
    let cache = new Set();
    nums.forEach(n => { cache.has(n) ? cache.delete(n) : cache.add(n); });
    return cache.values().next().value;
};
