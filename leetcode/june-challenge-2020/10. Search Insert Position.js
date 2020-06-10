// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// searchInsert :: ([[Number]], Number) -> Number
const searchInsert = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;

    while(start <= end) {
        const mid = Math.floor((start + end) / 2);

        if(nums[mid] === target) return mid;

        if(nums[mid] > target) end = mid - 1;
        else start = mid + 1;
    }

    return start;
};
