// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

 

// Example 1:

// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// Example 2:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 

// Constraints:

// 1 <= nums.length <= 8
// -10 <= nums[i] <= 10

// permuteUnique :: [Number] -> [[Number]]
const permuteUnique = nums => {
    const permutations = [];
    
    (function permute(list, permutation = []) {
        if(list.length === 0) permutations.push(permutation);
        
        for(let i = 0; i < list.length; i++) {
            newList = list.slice(0, i).concat(list.slice(i + 1));
            newPermutation = permutation.concat(list[i]);
            
            permute(newList, newPermutation);
        }
    })(nums);
    
    return [
        ...new Set(permutations.map(p => p.join(':')))
    ].map(p => p.split(':'));
};