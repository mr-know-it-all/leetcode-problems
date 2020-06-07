// Given an array of non-negative integers, you are initially positioned at the first index of the array.
//
// Each element in the array represents your maximum jump length at that position.
//
// Determine if you are able to reach the last index.

// canJump :: [Number] -> Boolean
const canJump = nums => {
    const len = nums.length;
    let currentPos = len - 1;

    for(i = len - 1; i >= 0; i--) {
        if(i + nums[i] >= currentPos) {
            currentPos = i;
        }
    }

    return currentPos === 0;
};
