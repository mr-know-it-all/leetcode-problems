// Given a set of distinct integers, nums, return all possible subsets (the power set).
//
// Note: The solution set must not contain duplicate subsets.
//
// Example:
//
// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

// SOLUTION 1:

// subsets :: [Number] -> [[Number]]
const subsets = nums => {
  const result = [];

	(function compute(acc, index) {
      result.push(acc);
      for(let i = index; i < nums.length; i++) {
          compute([...acc, nums[i]], i + 1);
      }
	})([], 0);

	return result;
};

// SOLUTION 2:

// subsets :: [Number] -> [[Number]]
const subsets = nums => {
    const result = [[]];

    for(num of nums) {
        const subsets = result.map(subset => subset.concat(num));
        for(subset of subsets) result.push(subset);
    }

	return result;
};
