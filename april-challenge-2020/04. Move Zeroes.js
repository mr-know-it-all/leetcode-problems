// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// moveZeroes :: [Number] -> ()
const moveZeroes = nums => {
    let steps = 0;

    for(let i = 0; steps < nums.length; i++) {
        if(nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            i -= 1;
        }
        steps += 1;
    }

    return nums;
};
