// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

// SOLUTION 1: O(n)

// singleNonDuplicate :: [Number] -> Number
const singleNonDuplicate = nums => {
    let start = 0;
    let end = nums.length - 1;

    while(start <= end) {
        if(nums[start] === nums[start + 1]) start += 2;
        else return nums[start];

        if(nums[end] === nums[end - 1]) end -= 2;
        else return nums[end];
    }
};

// SOLUTION 2: O(log n)

// singleNonDuplicate :: [Number] -> Number
const singleNonDuplicate = nums => {
    let start = 0;
    let end = nums.length;

    while(start < end) {
        let mid = Math.floor((start + end) / 2);

        if(mid % 2 === 0) {
            // start -> mid + 1 has even numbers on the left (even index has uneven number of values)
            // unique number should be on the right if mid === mid + 1 (left part is complete)
            if(nums[mid] === nums[mid + 1]) start = mid + 2;
            else end = mid;
        }

        if(mid % 2 === 1) {
            // start -> mid has even numbers on the left (uneven index has even number of values)
            // unique number should be on the right if mid - 1 === mid (left part is complete)
            if(nums[mid] === nums[mid - 1]) start = mid + 1;
            else end = mid;
        }
    }

    return nums[start];
};
