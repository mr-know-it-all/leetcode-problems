// You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

 

// Example 1:

// Input: nums = [5,2,6,1]
// Output: [2,1,1,0]
// Explanation:
// To the right of 5 there are 2 smaller elements (2 and 1).
// To the right of 2 there is only 1 smaller element (1).
// To the right of 6 there is 1 smaller element (1).
// To the right of 1 there is 0 smaller element.
// Example 2:

// Input: nums = [-1]
// Output: [0]
// Example 3:

// Input: nums = [-1,-1]
// Output: [0,0]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

// SOLUTION 1:
// naive TLE

function _countSmaller(nums: number[]): number[] {
    const n = nums.length;
    const stack = [];
    
    for(let i = n - 1; i >= 0; i--) {
        let smaller = 0;
        const s = stack.length;
        
        for(let j = s - 1; j >= 0; j--) {
            if(stack[j] >= nums[i]) break;
            smaller++;
        }
        let added = false;
        for(let j = 0; j < s; j++) {
            if(stack[j] <= nums[i]) {
                stack.splice(j, 0, nums[i]);
                added = true;
                break;
            }
        }
        if(!added) stack.push(nums[i]);
        
        nums[i] = smaller;
    }
    
    return nums;
}

// SOLUTION 2:
// slow, but passes

function __countSmaller(nums: number[]): number[] {
    const n = nums.length;
    const stack = [];
    
    for(let i = n - 1; i >= 0; i--) {
        let smaller = 0;
        const s = stack.length;
        
        for(let j = s - 1; j >= 0; j--) {
            if(stack[j] >= nums[i]) break;
            smaller++;
        }
       
        if(s - smaller || stack.length) stack.splice(s - smaller, 0, nums[i]);
        else stack.push(nums[i]);
        
        nums[i] = smaller;
    }
    
    return nums;
};

// SOLUTION 3:
// better but still slow

const findIndex = (x: number, xs: string | any[]) => {
    let start = 0, end = xs.length - 1;
        
    while(start <= end) {
        const mid = Math.floor((start + end) / 2);
            
        if(xs[mid] >= x) end = mid - 1;
        else start = mid + 1;
    }

    return start;
}

function countSmaller(nums: number[]): number[] {
    const n = nums.length;  
    const stack = [];
    
    for(let i = n - 1; i >= 0; i--) {
        let smaller = findIndex(nums[i], stack);
        
        if(smaller || stack.length) stack.splice(smaller, 0, nums[i]);
        else stack.push(nums[i]);
        
        nums[i] = smaller;
    }
    
    return nums;
};