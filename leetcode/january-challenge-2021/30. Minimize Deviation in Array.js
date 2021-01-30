// You are given an array nums of n positive integers.

// You can perform two types of operations on any element of the array any number of times:

// If the element is even, divide it by 2.
// For example, if the array is [1,2,3,4], then you can do this operation on the last element, and the array will be [1,2,3,2].
// If the element is odd, multiply it by 2.
// For example, if the array is [1,2,3,4], then you can do this operation on the first element, and the array will be [2,2,3,4].
// The deviation of the array is the maximum difference between any two elements in the array.

// Return the minimum deviation the array can have after performing some number of operations.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: 1
// Explanation: You can transform the array to [1,2,3,2], then to [2,2,3,2], then the deviation will be 3 - 2 = 1.
// Example 2:

// Input: nums = [4,1,5,20,3]
// Output: 3
// Explanation: You can transform the array after two operations to [4,2,5,5,3], then the deviation will be 5 - 2 = 3.
// Example 3:

// Input: nums = [2,10,8]
// Output: 3
 

// Constraints:

// n == nums.length
// 2 <= n <= 105
// 1 <= nums[i] <= 109

// SOLUTION 1:
// TODO: use priority queue or maxHeap to reduce complexity

// TODO: use priority queue
// addToQueue :: ([Number], Number) -> ()
const addToQueue = (q, n) => {
    for(let i = 0; i < q.length; i++) {
        if(q[i] < n) {
            q.splice(i, 0, n)
            return;
        }
    }
    
    q.push(n);
} 

// minimumDeviation :: [Number] -> Number
const minimumDeviation = (nums) => {
    let res = Infinity;
    let min = Infinity;
    
    // TODO: make priority queue
    let q = [];
    for(let n of nums) {
        // make all numbers even, even numbers cannot increase
        // thus we will only be able to decrease elements
        n = n % 2 ? n * 2 : n
        // put them on queue
        q.push(n);
        // keep track of min element
        min = Math.min(min, n);
    }
    // TODO: if it were a priority queue this would not be needed
    q.sort((a, b) => b - a);
    
    // while largest number in the queue is even, meaning can be decreased
    while(q[0] % 2 === 0) {
        // remove largest element
        const max = q.shift();
        
        // update response
        res = Math.min(res, max - min);
        
        const decreased = max / 2;
        
        // decreased may be less than current min
        min = Math.min(min, decreased);
        
        // add decreased value to queue
        addToQueue(q, decreased);
    }
    
    // make one last check for res before returning it
    return Math.min(res, q[0] - min);
};
