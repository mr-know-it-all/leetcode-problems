// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
// Note:
//
// The solution set must not contain duplicate triplets.
//
// Example:
//
// Given array nums = [-1, 0, 1, 2, -1, -4],
//
// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

// threeSum :: [Number] -> [[Number]]
const threeSum = nums => {
    nums.sort((a, b) => a - b);

    const result = [];
    const len = nums.length;

    for(let ia = 0; ia < len - 2; ia++) {
        const a = nums[ia];

        // since the list is sorted, if value is greater than 0 we should stop
        if(a > 0) return result;
        // we are skipping duplicates
        if(a === nums[ia - 1]) continue;

        let ib = ia + 1;
        let ic = len - 1;

        while(ib < ic) {
            const b = nums[ib];
            const c = nums[ic];

            const sum = a + b + c;

            // we have a good result item
            if(sum === 0) result.push([a, b, c]);

            // because the list is sorted we can move these pointers according to the value of "sum"
            if(sum >= 0) {
                // we are skipping duplicates
                while(nums[ic - 1] === c) { ic--; }
                ic--;
            }
            if(sum <= 0) {
                // we are skipping duplicates
                while(nums[ib + 1] === b) { ib++; }
                ib++;
            }
        }
    }

    return result;
};
