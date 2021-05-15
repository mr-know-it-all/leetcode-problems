// Given an array of integers target. From a starting array, A consisting of all 1's, you may perform the following procedure :

// let x be the sum of all elements currently in your array.
// choose index i, such that 0 <= i < target.size and set the value of A at index i to x.
// You may repeat this procedure as many times as needed.
// Return True if it is possible to construct the target array from A otherwise return False.

 

// Example 1:

// Input: target = [9,3,5]
// Output: true
// Explanation: Start with [1, 1, 1] 
// [1, 1, 1], sum = 3 choose index 1
// [1, 3, 1], sum = 5 choose index 2
// [1, 3, 5], sum = 9 choose index 0
// [9, 3, 5] Done
// Example 2:

// Input: target = [1,1,1,2]
// Output: false
// Explanation: Impossible to create target array from [1,1,1,1].
// Example 3:

// Input: target = [8,5]
// Output: true
 

// Constraints:

// N == target.length
// 1 <= target.length <= 5 * 10^4
// 1 <= target[i] <= 10^9

// SOLUTION 1:
// TLE

// isPossible :: [Number] -> Boolean
const isPossible = (target) => {
    while(true) {
        let sum = target.reduce((a,b) => a + b);
        if (sum === target.length) return true;
        else {
            target.sort((a,b) => b - a);
            target[0] = target[0] - (sum - target[0]);
            if (target[0] < 1) return false;
        }
    }
};

// SOLUTION 2:

// isPossible :: [Number] -> Boolean
 const isPossible = (A) => {
    const q = new MaxPriorityQueue({priority: x => x})
    
    let total = 0;
    for (let a of A) {
        total += a;
        q.enqueue(a);
    }
    while (true) {
        let a = q.dequeue().element;
        total -= a;
        if (a == 1 || total == 1)
            return true;
        if (a < total || total == 0 || a % total == 0)
            return false;
        a %= total;
        total += a;
        q.enqueue(a);
    }
};

// SOLUTION 3:

// isPossible :: [Number] -> Boolean
const isPossible = (target) => {
    const q = new MaxPriorityQueue({priority: x => x})
    let s = target.reduce((a,b) => a + b);
    for(let t of target) q.enqueue(t);
    
    let cur = q.dequeue().element;
    while(s > 1 && cur > s / 2) {
        s -= cur;
        if(s <= 1) return s == 0 ? false : true;
        q.enqueue(cur % s);
        s += cur % s;
        cur = q.dequeue().element;
    }
    
    return s === target.length;
};

// SOLUTION 4:
// from Discuss board

// isPossible :: [Number] -> Boolean
const isPossible = (target) => {
    if(target.length == 1) return target[0] == 1; // [1] - true, [8] - false
        
    target.sort((a, b) => a - b);
    let biggestInt = target[target.length - 1];
    if (biggestInt == 1) return true;
        
    let sum = 0;
    for (const i of target) sum += i;
        
    const sumWithOutBiggest = sum - biggestInt;
    if(sumWithOutBiggest == 1) return true; // case [1,x] - always true
        
    if(biggestInt < sumWithOutBiggest + 1) return false; // biggest num >= sum all previous + 1
        
    biggestInt %= sumWithOutBiggest;
    if(biggestInt == 0) return false; // possible result but unacceptable for replace
        
    target[target.length - 1] = biggestInt;
    return isPossible(target);
};

// SOLUTION 5:

// isPossible :: [Number] -> Boolean
const isPossible = (target) => {
    let max = 0;
    let sum = 0;
    
    for(let i = 0; i < target.length; i++) {
        sum += target[i];
        if(target[i] > target[max]) max = i; 
    }
    const diff = sum - target[max];
    // [1, 1, 1]            [1, x]
    if(target[max] === 1 || diff === 1) return true;
    // [1, 2, 2]             [20, 5]                     [2]
    if(diff > target[max] || target[max] % diff === 0 || diff === 0) return false;
   
    target[max] %= diff;
    
    return isPossible(target);
};