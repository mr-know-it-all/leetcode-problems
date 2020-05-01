// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// productExceptSelf :: [Number] -> [Number]
const productExceptSelf = nums => {
    const len = nums.length;
    const result = Array.from({ length: len });
    const left = Array.from({ length: len });
    const right = Array.from({ length: len });

    left[0] = 1;
    for(let i = 1; i < len; i++) {
        left[i] = nums[i - 1] * left[i - 1];
    }

    right[len - 1] = 1;
    for(let i = len - 2; i >= 0; i--) {
        right[i] = nums[i + 1] * right[i + 1];
    }

    for(let i = 0; i < len; i++) {
        result[i] = left[i] * right[i];
    }

    return result;
};
