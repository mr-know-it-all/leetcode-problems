// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// subarraySum :: [Number] -> Number -> Number
const subarraySum = (nums, k) => {
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        let sum = nums[i];

        if(sum === k) {
            count++;
        }

        for(let j = i + 1; j < nums.length; j++) {
            sum += nums[j];

            if(sum === k) {
                count++;
            }
        }
    }

    return count;
};
