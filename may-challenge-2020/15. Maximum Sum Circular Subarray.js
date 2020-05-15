
// SOLUTION 1:

// maxSubarraySumCircular :: [Number] -> Number
const maxSubarraySumCircular = nums => {
    const n = nums.length;

    if(n === 1) return nums[0];

    // these will be used to build kadane's algorithm for the normal array
    let localAMax = -Infinity;
    let globalAMax = -Infinity;

    // these will be used to build kadane's algorithm for the negated array
    let localBMax = -Infinity;
    let globalBMax = -Infinity;

    // array elements sum
    let sum = 0;

    for(let i = 0; i < n; i++) {
        localAMax = Math.max(nums[i], nums[i] + localAMax);
        if(localAMax > globalAMax) globalAMax = localAMax;

        localBMax = Math.max(-nums[i], -nums[i] + localBMax);
        if(localBMax > globalBMax) globalBMax = localBMax;

        sum += nums[i];
    }

    // this happens if all numbers are negative
    if(globalAMax < 0) return globalAMax;

    return Math.max(globalAMax, globalBMax + sum);
}

// SOLUTION 2:
// same as first solution, except for the way in which min is calculated

// maxSubarraySumCircular :: [Number] -> Number
const maxSubarraySumCircular = nums => {
    let sum = 0;

    let max = -Infinity;
    let localMax = 0;

    let min = Infinity;
    let localMin = 0;

    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];

        localMax = Math.max(localMax + nums[i], nums[i]);
        max = Math.max(max, localMax);

        localMin = Math.min(localMin + nums[i], nums[i]);
        min = Math.min(min, localMin);
    }

    return max > 0 ? Math.max(max, sum - min) : max;
}
