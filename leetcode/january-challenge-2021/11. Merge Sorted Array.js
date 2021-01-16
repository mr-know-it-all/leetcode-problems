// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

 

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
 

// Constraints:

// 0 <= n, m <= 200
// 1 <= n + m <= 200
// nums1.length == m + n
// nums2.length == n
// -109 <= nums1[i], nums2[i] <= 109

// SOLUTION 1:

// merge :: ([Number], Number, [Number], Number) -> ()
const merge = (a, m, b, n) => {
    while(a[a.length - 1] === 0) a.pop()
    
    w: while(b.length) {  
        let curr = b.shift();
     
        for(let i = 0; i < a.length; i++) {
            if(a[i] > curr) {
                a.splice(i, 0, curr);
                continue w;
            }
        }
        
        a.push(curr)
    }
    
    while(a.length < m + n) a.push(0);
};

// SOLUTION 2:

// merge :: ([Number], Number, [Number], Number) -> ()
const merge = (xs, x, ys, y) => {
    let index = x + y - 1;
    
    while(x - 1 >= 0 && y - 1 >= 0) {
        if(xs[x - 1] > ys[y - 1]) {
            xs[index] = xs[x - 1];
            x--;
        } else {
            xs[index] = ys[y - 1];
            y--;
        }
        index--;
    }

    while(y - 1 >= 0) {
        xs[index] = ys[y - 1];
        index--;
        y--;
    }
};