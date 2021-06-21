// You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. You want to use all the matchsticks to make one square. You should not break any stick, but you can link them up, and each matchstick must be used exactly one time.

// Return true if you can make this square and false otherwise.

 

// Example 1:


// Input: matchsticks = [1,1,2,2,2]
// Output: true
// Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.
// Example 2:

// Input: matchsticks = [3,3,3,3,4]
// Output: false
// Explanation: You cannot find a way to form a square with all the matchsticks.
 

// Constraints:

// 1 <= matchsticks.length <= 15
// 0 <= matchsticks[i] <= 109

// solution 1:
// TODO: clean up code

function _makesquare(matchsticks: number[]): boolean {
    matchsticks.sort((a, b) => b - a);
    const side: number = matchsticks.reduce((a, b) => a + b, 0) / 4;
    if(parseInt(String(side), 10) !== side) return false;
    
    const isValid = (g: number[], i: number, xs: number[][]) => g.reduce((a, b) => a + b, 0) === side;
    const isCand = (g: number[]) => g.reduce((a, b) => a + b, 0) <= side;
    
    const compute = (i: number, groups: number[][]) => {
        if(i === matchsticks.length && groups.every(isValid)) return true;
        
        const [a, b, c, d] = groups;
        return (
            isCand([...a, matchsticks[i]]) && compute(i + 1, [[...a, matchsticks[i]], b, c, d]) ||
            isCand([...b, matchsticks[i]]) && compute(i + 1, [a, [...b, matchsticks[i]], c, d]) ||
            isCand([...c, matchsticks[i]]) && compute(i + 1, [a, b, [...c, matchsticks[i]], d]) ||
            isCand([...d, matchsticks[i]]) && compute(i + 1, [a, b, c, [...d, matchsticks[i]]]) 
        );
    };
    
    return compute(0, [[], [], [], []]);
}

// solution 2:
// TODO: clean un code

function makesquare(matchsticks: number[]): boolean {
    matchsticks.sort((a, b) => b - a);
    const side: number = matchsticks.reduce((a, b) => a + b, 0) / 4;
    if(parseInt(String(side), 10) !== side) return false;
    
    const compute = (i: number, groups: number[]) => {
        if(i === matchsticks.length) return groups.every(g => g === side);
        
        const [a, b, c, d] = groups;
        return (
            (a + matchsticks[i]) <= side && compute(i + 1, [a + matchsticks[i], b, c, d]) ||
            (b + matchsticks[i]) <= side && compute(i + 1, [a, b + matchsticks[i], c, d]) ||
            (c + matchsticks[i]) <= side && compute(i + 1, [a, b, c + matchsticks[i], d]) ||
            (d + matchsticks[i]) <= side && compute(i + 1, [a, b, c, d + matchsticks[i]])
        );
    };
    
    return compute(0, [0, 0, 0, 0]);
}