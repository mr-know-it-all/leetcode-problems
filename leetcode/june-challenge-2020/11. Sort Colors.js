// Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
//
// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
//
// Note: You are not suppose to use the library's sort function for this problem.

// SOLUTION 1:

// sortColors :: [Number] -> [Number]
const sortColors = function(nums) {
    let zero = 0, one = 0, two = 0;

    for(num of nums) {
        num === 0 && (zero++);
        num === 1 && (one++);
        num === 2 && (two++);
    }

    for(let i = 0; i < nums.length; i++) {
        if(zero) {
            nums[i] = 0;
            zero--;
            continue;
        }

        if(one) {
            nums[i] = 1;
            one--;
            continue;
        }

        if(two) {
            nums[i] = 2;
            two--;
            continue;
        }
    }
};

// SOLUTION 2:

// sortColors :: [Number] -> [Number]
const sortColors = function(nums) {
    let zero = 0, one = 0, two = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            nums.unshift(0);
            zero++;
            i += 1;
        }

        if(nums[i] === 1) {
            nums.splice(zero, 0, 1);
            one++;
            i += 1;
        }

        if(nums[i] === 2) {
            nums.splice(zero + one, 0, 2);
            two++;
            i += 1;
        }
    }

    nums.length /= 2;
};
