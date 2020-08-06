// Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
//
// Find all the elements that appear twice in this array.
//
// Could you do it without extra space and in O(n) runtime?
//
// Example:
// Input:
// [4,3,2,7,8,2,3,1]
//
// Output:
// [2,3]

// solution 1:
// (naive)

// findDuplicates :: [Number] -> [Number]
const findDuplicates = nums => {
    const hash = {};

    const result = [];
    for(let num of nums) {
        if(hash[num]) result.push(num);
        else hash[num] = true;
    }

    return result;
};

// SOLUTION 2:

// findDuplicates :: [Number] -> [Number]
const findDuplicates = nums => {
    const result = [];
    for(let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;

        if(nums[index] < 0) result.push(Math.abs(nums[i]));
        else nums[index] = -nums[index];
    }

    return result;
};
