// Given a non-empty array of integers, return the k most frequent elements.
//
// Example 1:
//
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:
//
// Input: nums = [1], k = 1
// Output: [1]
// Note:
//
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
// It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
// You can return the answer in any order.

// SOLUTION 1:
// worst case: O(n + n * k) if k === n then O(n^2), not optimal

// topKFrequent :: ([Number], Number) -> Number
const topKFrequent = (nums, k) => {
    if(k === nums.length) return nums;

    const count = {};
    const uniqueNums = new Set();
    const top = Array.from({ length: k }, () => [0, 0]);

    for(let num of nums) {
        count[num] = (count[num] || 0) + 1;
        uniqueNums.add(num);
    }

    for(let num of uniqueNums) {
        for(let i = 0; i < k; i++) {
            if(top[i][1] < count[num]) {
                top.splice(i, 0, [num, count[num]]);
                break;
            }
        }
    }
    top.length = k;

    return top.map(([first]) => first);
};

// SOLUTION 2:
// O(n log n), faster but still not optimal

// topKFrequent :: ([Number], Number) -> Number
const topKFrequent = (nums, k) => {
    if(k === nums.length) return nums;

    const count = {};
    const uniqueNums = new Set();

    for(let num of nums) {
        count[num] = (count[num] || 0) + 1;
        uniqueNums.add(num);
    }

    return [...uniqueNums].sort((a, b) => count[b] - count[a]).slice(0, k);
};

// SOLUTION 3:
// O(n^2) worst case, sort of quick select approach without random pivot

// topKFrequent :: ([Number], Number) -> Number
const topKFrequent = (nums, k) => {
    if(k === nums.length) return nums;

    const count = {};
    let uniqueNums = new Set();
    for(let num of nums) {
        count[num] = (count[num] || 0) + 1;
        uniqueNums.add(num);
    }

    uniqueNums = Array.from(uniqueNums);
    for(let num of uniqueNums) {
        const larger = uniqueNums.filter(x => count[x] >= count[num]);

        if(larger.length === k) return larger;
    }
}
