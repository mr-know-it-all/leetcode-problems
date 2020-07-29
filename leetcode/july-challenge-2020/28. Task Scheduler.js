// You are given a char array representing tasks CPU need to do. It contains capital letters A to Z where each letter represents a different task. Tasks could be done without the original order of the array. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.
//
// However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.
//
// You need to return the least number of units of times that the CPU will take to finish all the given tasks.
//
//
//
// Example 1:
//
// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation:
// A -> B -> idle -> A -> B -> idle -> A -> B
// There is at least 2 units of time between any two same tasks.
// Example 2:
//
// Input: tasks = ["A","A","A","B","B","B"], n = 0
// Output: 6
// Explanation: On this case any permutation of size 6 would work since n = 0.
// ["A","A","A","B","B","B"]
// ["A","B","A","B","A","B"]
// ["B","B","B","A","A","A"]
// ...
// And so on.
// Example 3:
//
// Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
// Output: 16
// Explanation:
// One possible solution is
// A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A
//
//
// Constraints:
//
// The number of tasks is in the range [1, 10000].
// The integer n

// SOLUTION 1:

// leastInterval :: ([String], Number) -> Number
const leastInterval = function(tasks, n) {
    let count = {};
    let maxOccurences = 0;

    let maxOccurencesCount = 0;

    for(let task of tasks){
        count[task] = (count[task] || 0) + 1;

        if(count[task] > maxOccurences) {
            maxOccurences = count[task];
            maxOccurencesCount = 1;
        } else if(count[task] === maxOccurences) {
            maxOccurencesCount++;
        }
    }

    return Math.max(tasks.length, (maxOccurences - 1) * (n + 1) + maxOccurencesCount);
};

// SOLUTION 2:

// leastInterval :: ([String], Number) -> Number
const leastInterval = function(tasks, n) {
    let occurences = {};
    for(let task of tasks) occurences[task] = (occurences[task] || 0) + 1;

    // an actual priority queue will be needed here
    const queue = Object.values(occurences).sort((a, b) => a - b);

    let count = 0;
    while(queue.length) {
        const runningTasks = [];

        for(let i = 0; i < n + 1; i++) queue.length && runningTasks.push(queue.pop());
        for(task of runningTasks) task - 1 > 0 && queue.push(task - 1)

        queue.sort((a, b) => a - b);

        count += !queue.length ? runningTasks.length : n + 1;
    }

    return count;
};
