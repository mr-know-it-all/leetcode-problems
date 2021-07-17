// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]
 

// Constraints:

// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109

// SOLUTION 1:
// O(n ^ 4)

function _fourSum(nums: number[], target: number): number[][] {
    const n = nums.length;
    const res = [];
    const added = new Set();
    
    for(let a = 0; a < n - 3; a++) {
        for(let b = a + 1; b < n - 2; b++) {
            for(let c = b + 1; c < n - 1; c++) {
                for(let d = c + 1; d < n; d++) {
            
                    if(nums[a] + nums[b] + nums[c] + nums[d] === target) {
                        const el = [nums[a], nums[b], nums[c], nums[d]];
                        el.sort((a, b) => a - b);
                        
                        const key = el.join('-');
                        if(!added.has(key)) {
                            added.add(key);
                            res.push(el);
                        }
                    }
                }
            }
        }
    }
    
    return res;
};

// SOLUTION 2:
// O(n ^ 3)

function fourSum(nums: number[], target: number): number[][] {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const set = new Set();
    
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            const goal = target - nums[i] - nums[j];
            
            let start = j + 1;
            let end = n - 1;
            
            while(start < end) {
                if(nums[start] + nums[end] < goal) {
                    start++;
                } else if(nums[start] + nums[end] > goal) {
                    end--;
                } else {
                    set.add([nums[i], nums[j], nums[start], nums[end]].join(':'));
                    
                    start++;
                    end--;
                }
            }
        }
    }
    const result = [];
    
    for(let el of set) {
        result.push(String(el).split(':'));
    }
    
    return result;
};