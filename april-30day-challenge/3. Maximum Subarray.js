// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// maxSubArray :: [Number] -> Number
const maxSubArray = nums => {
    const n = nums.length;
    let localMax = 0;
    let globalMax = -Infinity;

    for(let i = 0; i < n; i++) {
        localMax = Math.max(nums[i], nums[i] + localMax);
        if(localMax > globalMax) globalMax = localMax;
    }

    return globalMax;
};
