// Given an array arr.  You can choose a set of integers and remove all the occurrences of these integers in the array.

// Return the minimum size of the set so that at least half of the integers of the array are removed.

 

// Example 1:

// Input: arr = [3,3,3,3,5,5,5,2,2,7]
// Output: 2
// Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 (i.e equal to half of the size of the old array).
// Possible sets of size 2 are {3,5},{3,2},{5,2}.
// Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] which has size greater than half of the size of the old array.
// Example 2:

// Input: arr = [7,7,7,7,7,7]
// Output: 1
// Explanation: The only possible set you can choose is {7}. This will make the new array empty.
// Example 3:

// Input: arr = [1,9]
// Output: 1
// Example 4:

// Input: arr = [1000,1000,3,7]
// Output: 1
// Example 5:

// Input: arr = [1,2,3,4,5,6,7,8,9,10]
// Output: 5
 

// Constraints:

// 1 <= arr.length <= 10^5
// arr.length is even.
// 1 <= arr[i] <= 10^5

// SOLUTION 1:
// TODO: optimize solution

function minSetSize(arr: number[]): number {
    const n = arr.length;
    
    const count = {};
    for(let n of arr) {
        if(!count[n]) count[n] = 0;
        count[n]++;
    }
    
    const vals: number[] = Object.values(count);
    vals.sort((a: number, b: number) => { return b - a; });  

    let result = 0;
    let half = n / 2;
    while(half > 0) {
        half -= vals.shift();
        result++;
    }
    return result;
};

// SOLUTION 2:
// plain JavaScript

// function minSetSize(arr) {
//     const n = arr.length;
//     const count = new Map();
    
//     for(let el of arr) {
//         const c = count.get(el) || 0;
//         count.set(el, c + 1);
//     }
    
//     let Q = new MaxPriorityQueue();
//     for(let el of count.values()) Q.enqueue(el);
    
    
//     let half = n / 2;
//     let removed = 0;
//     while(half > 0) {
//         half -= Q.dequeue().element;
//         removed++;
//     }
    
//     return removed;
// };