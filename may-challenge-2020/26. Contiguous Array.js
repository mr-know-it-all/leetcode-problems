// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// findMaxLength :: [Number] -> Number
const findMaxLength = nums => {
    const cache = new Map();
    cache.set(0, -1);

    let max = 0;
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        count += nums[i] === 0 ? -1 : 1;

        if(cache.get(count) !== undefined) {
            max = Math.max(max, i - cache.get(count));
        } else {
            cache.set(count, i);
        }
    }

    return max;
};
