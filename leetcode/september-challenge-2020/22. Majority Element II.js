// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Follow-up: Could you solve the problem in linear time and in O(1) space?

 

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]
 

// Constraints:

// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109


// SOLUTION 1:
// naive implementation

// majorityElement :: [Number] -> [Number]
const majorityElement = function(nums) {
    const n = nums.length;
    const limit = n/3;
    
    const cache = {};
    const added = {};
    const result = [];
    
    for(let num of nums) {
        cache[num] = (cache[num] || 0) + 1;
        
        if(!added[num] && cache[num] > limit) {
            added[num] = true;
            delete cache[num];
            result.push(num);
        }
    }
    
    return result;
};

// SOLUTION 2:

// Intuition: 
// Can't have more than 2 numberg greater than n / 3
// We first find the two major elements of the array
// Then we check if they are greater than n / 3

const count = (n, ns) => {
    return ns.filter(x => x === n).length;
}

// majorityElement :: [Number] -> [Number]
const majorityElement = function(nums) {
    let [c1, c2, n1, n2] = [0, 0, null, null];
    
    for(let num of nums) {
        if(n1 === num) c1++;
        else if(n2 === num) c2++;
        else if(c1 === 0) {
            n1 = num;
            c1++;
        } else if(c2 === 0) {
            n2 = num;
            c2++;
        } else {
            c1--;
            c2--;
        }
    }
    
    const limit = nums.length / 3;
    
    return [
        ...(count(n1, nums) > limit ? [n1] : []),
        ...(count(n2, nums) > limit ? [n2] : [])
    ];
};