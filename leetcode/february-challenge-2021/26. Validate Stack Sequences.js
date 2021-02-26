// Given two sequences pushed and popped with distinct values, return true if and only if this could have been the result of a sequence of push and pop operations on an initially empty stack.

 

// Example 1:

// Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
// Output: true
// Explanation: We might do the following sequence:
// push(1), push(2), push(3), push(4), pop() -> 4,
// push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
// Example 2:

// Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
// Output: false
// Explanation: 1 cannot be popped before 2.
 

// Constraints:

// 0 <= pushed.length == popped.length <= 1000
// 0 <= pushed[i], popped[i] < 1000
// pushed is a permutation of popped.
// pushed and popped have distinct values.

// SOLUTION 1:

// validateStackSequences :: ([Number], [Number]) -> Boolean
const validateStackSequences = (pushed, popped) => {
    const stack = [];
    
    while(pushed.length || popped.length) {
        if(stack[stack.length - 1] === popped[0]) {
            stack.pop();
            popped.shift();
        } else if(pushed.length && pushed[0] !== popped[0]) {
            stack.push(pushed.shift());
        } else if(pushed.length && pushed[0] === popped[0]) {
            pushed.shift();
            popped.shift();
        } else if(stack[stack.length - 1] === popped[0]) {
            stack.pop();
            popped.shift();
        } else {
            break;
        }
    }
    
    return stack.length === 0;
};