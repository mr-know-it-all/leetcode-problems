// https://leetcode.com/problems/find-k-th-smallest-pair-distance/submissions/

// Given an integer array, return the k-th smallest distance among all the pairs. The distance of a pair (A, B) is defined as the absolute difference between A and B.

// SOLUTION (1)
// bad time complexity, good space complexity
// TODO: add more performant, clever, solution

// smallestDistancePair :: ([Numnber], Number) -> Number
const smallestDistancePair = (nums, k) => {
    // we want to know the biggest difference between pairs
    // we'll use it to define the size of the pairs array
    // to compute it, we need to sort the list of numbers
    nums.sort((a, b) => a - b);

    let n = nums.length;
    // this is the maximum distance, biggest number minus smallest number
    let D = nums[n - 1] - nums[0];

    // an index of this array will represent a value of a pair distance
    // some of them will most probably be empty, hence the 0 pre-setting
    // this will be used to store the pair distance values and sort of "sort" them at the same time (pun intended!)
    const arr = Array.from({ length: D }, () => 0);

    // compute all pairs (the naive way)
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            let p = Math.abs(nums[i] - nums[j]);

            // update the index of the array that corresponds to the pair distance value
            arr[p] = (arr[p] || 0) + 1;
        }
    }

    let count = 0;

    // count the k'th pair distance
    for(let i = 0; i <= D; i++) {
        count += arr[i];
        if(count >= k) return i;
    }

    return count;
};
