// You may recall that an array arr is a mountain array if and only if:

// arr.length >= 3
// There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Given an integer array arr, return the length of the longest subarray, which is a mountain. Return 0 if there is no mountain subarray.

 

// Example 1:

// Input: arr = [2,1,4,7,3,2,5]
// Output: 5
// Explanation: The largest mountain is [1,4,7,3,2] which has length 5.
// Example 2:

// Input: arr = [2,2,2]
// Output: 0
// Explanation: There is no mountain.
 

// Constraints:

// 1 <= arr.length <= 104
// 0 <= arr[i] <= 104
 

// Follow up:

// Can you solve it using only one pass?
// Can you solve it in O(1) space?

// SOLUTION 1:

// longestMountain :: [Number] -> Number
const longestMountain = A => {
    let max = 0;
    let i = 0;
    
    mainloop: while(i + 1 < A.length) {
        while(A[i] >= A[i + 1]) i++;
        
        const start = i;
        while(A[i] < A[i + 1]) i++;
        if(!(A[i] > A[i + 1])) continue mainloop;
        while(A[i] > A[i + 1]) i++;

        max = Math.max(max, i + 1 - start);
    }
    
    return max;
};

// SOLUTION 2:

// longestMountain :: [Number] -> Number
const longestMountain = list => {
    let max = 0;
    
    for(let i = 1; i< list.length - 1; i++) {
        if(list[i - 1] < list[i] && list[i + 1] < list[i]) {
            let l = i;
            let r = i;
            while(l > 0 && list[l - 1] < list[l]) l--;
            while(r < list.length - 1 && list[r + 1] < list[r]) r++;
            
            max = Math.max(max, r - l + 1);
        }

    }
    return max;
};