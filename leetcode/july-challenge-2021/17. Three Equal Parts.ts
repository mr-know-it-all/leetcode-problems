// You are given an array arr which consists of only zeros and ones, divide the array into three non-empty parts such that all of these parts represent the same binary value.

// If it is possible, return any [i, j] with i + 1 < j, such that:

// arr[0], arr[1], ..., arr[i] is the first part,
// arr[i + 1], arr[i + 2], ..., arr[j - 1] is the second part, and
// arr[j], arr[j + 1], ..., arr[arr.length - 1] is the third part.
// All three parts have equal binary values.
// If it is not possible, return [-1, -1].

// Note that the entire part is used when considering what binary value it represents. For example, [1,1,0] represents 6 in decimal, not 3. Also, leading zeros are allowed, so [0,1,1] and [1,1] represent the same value.

 

// Example 1:

// Input: arr = [1,0,1,0,1]
// Output: [0,3]
// Example 2:

// Input: arr = [1,1,0,1,1]
// Output: [-1,-1]
// Example 3:

// Input: arr = [1,1,0,0,1]
// Output: [0,2]
 

// Constraints:

// 3 <= arr.length <= 3 * 104
// arr[i] is 0 or 1

// SOLUTION 1:
// O(n ^ 3) TLE

function _threeEqualParts(arr: number[]): number[] {
    const n = arr.length;
    for(let i = 0; i < n - 1; i++) {
        for(let j = n - 1; j >= i + 2; j--) {
            let [a, b, c] = [0, 0, 0];
            
            for(let p = 0; p <= i; p++) {
                if(a === 0) {
                   a = arr[p]; 
                } else {
                    a = a << 1;
                    if(arr[p] === 1) a += 1;
                }
            }
            
            for(let p = i + 1; p <= j - 1; p++) {
                if(b === 0) {
                  b = arr[p];  
                } else {
                    b = b << 1;
                    if(arr[p] === 1) b += 1;
                }
            }
            
            if(a !== b) continue;
            
            for(let p = j; p < n; p++) {
                if(c === 0) {
                    c = arr[p];
                } else {
                    c = c << 1;
                    if(arr[p] === 1) c += 1;
                }
            }
            
            if(b === c) {
                return [i, j];
            }
        }
    }
    
    return [-1, -1];
};

// SOLUTION 2:

const findIndex = (target, arr) => {
    let cntOne = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 1) {
            cntOne++;
            if(cntOne === target) return i;
        }
    }
    return 0;
}

function threeEqualParts(arr: number[]): number[] {
    let ones = 0;
    
    for(let el of arr) ones += el;
    
    if(ones === 0) return [0, arr.length - 1];
    if(ones % 3 !== 0) return [-1, -1];
    const size = ones / 3;
    
    let start = findIndex(1, arr);
    let mid = findIndex(size + 1, arr);
    let end = findIndex(2 * size + 1, arr);

    while(arr[start] === arr[mid] && arr[mid] === arr[end]) {
        start++;
        mid++;
        end++;
    }

    if(end === arr.length) return [start - 1, mid];
    else return [-1, -1];
}; 