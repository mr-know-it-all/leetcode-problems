// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// findMaxLength :: [Number] -> Number
const findMaxLength = nums => {
    const cache = { 0: -1};

    let maxlen = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        count = count + (nums[i] === 1 ? 1 : -1);
        if (cache[count] !== undefined) {
            maxlen = Math.max(maxlen, i - cache[count]);
        } else {
            cache[count] = i;
        }
    }

    return maxlen;
};
