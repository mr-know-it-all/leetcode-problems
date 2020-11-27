// Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

 

// Example 1:

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].
// Example 2:

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.
 

// Constraints:

// 1 <= nums.length <= 200
// 1 <= nums[i] <= 100

const add = (x, y) => x + y;

// canPartition :: [Number] -> Boolean
const canPartition = nums => {    
    const sum = nums.reduce(add, 0);
    
    if(sum % 2 !== 0) return false;

    const cache = {};
    
    const dfs = (index, sum) => {
        if(index === 0 || sum < 0) return false;
        if(sum === 0) return true;
        const key = `${index}:${sum}`;
        
        if(cache[key] !== undefined) return cache[key];
        
        cache[key] = dfs(index - 1, sum - nums[index - 1]) || dfs(index - 1, sum);
        
        return cache[key];
    }
    
    return dfs(nums.length, sum / 2);
};