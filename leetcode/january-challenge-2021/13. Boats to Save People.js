// The i-th person has weight people[i], and each boat can carry a maximum weight of limit.

// Each boat carries at most 2 people at the same time, provided the sum of the weight of those people is at most limit.

// Return the minimum number of boats to carry every given person.  (It is guaranteed each person can be carried by a boat.)

 

// Example 1:

// Input: people = [1,2], limit = 3
// Output: 1
// Explanation: 1 boat (1, 2)
// Example 2:

// Input: people = [3,2,2,1], limit = 3
// Output: 3
// Explanation: 3 boats (1, 2), (2) and (3)
// Example 3:

// Input: people = [3,5,3,4], limit = 5
// Output: 4
// Explanation: 4 boats (3), (3), (4), (5)
// Note:

// 1 <= people.length <= 50000
// 1 <= people[i] <= limit <= 30000

// SOLUTION 1:

// numRescueBoats :: ([Number], Number) -> Number
const numRescueBoats = (people, limit) => {
    let count = 0;
    
    people.sort((a, b) => a - b);
    
    while(people.length) {
        let a = people.shift();
        
        for(let i = people.length; i >= 0; i--) {
            if(a + people[i] <= limit) {
                people.splice(i, 1);
                break;
            }
        }
            
        count++;
    }
    
    return count;
};

// SOLUTION 2:

// numRescueBoats :: ([Number], Number) -> Number
const numRescueBoats = (people, limit) => {
    let count = 0;
    
    people.sort((a, b) => a - b);
    
    while(people.length) {
        const largest = people.pop();
        let boat = limit - largest;

        // if && else if -> while && while for unlimited passengers in the limit
        if(boat - people[people.length - 1] >= 0) boat -= people.pop();
        else if(boat - people[0] >= 0) boat - people.shift();
        
        count++;
    }
    
    return count;
};

// SOLUTION 3:

// numRescueBoats :: ([Number], Number) -> Number
const numRescueBoats = (people, limit) => {
    people.sort((a, b) => a - b);
    
    let left = 0;
    const N = people.length - 1;
    
    for(let right = N; right > left; right--) {
        if(people[right] + people[left] <= limit) left++;
    }
    
    return people.length - left;
};