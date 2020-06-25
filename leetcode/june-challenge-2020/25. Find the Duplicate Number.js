// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.
//
// Note:
//
// You must not modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n2).
// There is only one duplicate number in the array, but it could be repeated more than once.

// SOLUTION 1:
// (not TLE but slow)

// findDuplicate :: [Number] -> Number
const findDuplicate = nums => {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] === nums[j]) return nums[i];
        }
    }
};

// SOLUTION 2:
//  O(N log N)

// findDuplicate :: [Number] -> Number
const findDuplicate = nums => {
    // elements of nums are betwen 1 and length of nums
    // if an element has in the list smaller that or equal elements in a number greater than its value
    // it means a duplicate number is under it (the duplicate number is smaller than it)
    const check = n => {
        let count = 0;
        for(num of nums) if(num <= n) count++;
        return count > n;
    };

    let start = 0;
    let end = nums.length - 1;

    while(start < end) {
        const mid = (start + end) >> 1;

        if(check(mid)) end = mid;
        else start = mid + 1;
    }

    return start;
};
