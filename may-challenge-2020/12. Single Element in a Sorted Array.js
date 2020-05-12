// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

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
