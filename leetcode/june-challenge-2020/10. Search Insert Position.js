// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// searchInsert :: ([[Number]], Number) -> Number
const searchInsert = (nums, target) => {
    let start = 0;
    let end = nums.length;
    let mid;

    while(start < end) {
        mid = Math.floor((start + end) / 2);

        if(nums[mid] === target) return mid;

        if(nums[mid] < target) start = mid + 1;
        else if(nums[mid] > target) end = mid - 1;
    }

    if(nums[mid] > target) mid = Math.max(0, mid - 1);
    while(nums[mid] < target) mid = mid + 1;

    return mid;
};
