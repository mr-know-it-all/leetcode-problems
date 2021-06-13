// Alice and Bob take turns playing a game, with Alice starting first.

// There are n stones arranged in a row. On each player's turn, they can remove either the leftmost stone or the rightmost stone from the row and receive points equal to the sum of the remaining stones' values in the row. The winner is the one with the higher score when there are no stones left to remove.

// Bob found that he will always lose this game (poor Bob, he always loses), so he decided to minimize the score's difference. Alice's goal is to maximize the difference in the score.

// Given an array of integers stones where stones[i] represents the value of the ith stone from the left, return the difference in Alice and Bob's score if they both play optimally.

 

// Example 1:

// Input: stones = [5,3,1,4,2]
// Output: 6
// Explanation: 
// - Alice removes 2 and gets 5 + 3 + 1 + 4 = 13 points. Alice = 13, Bob = 0, stones = [5,3,1,4].
// - Bob removes 5 and gets 3 + 1 + 4 = 8 points. Alice = 13, Bob = 8, stones = [3,1,4].
// - Alice removes 3 and gets 1 + 4 = 5 points. Alice = 18, Bob = 8, stones = [1,4].
// - Bob removes 1 and gets 4 points. Alice = 18, Bob = 12, stones = [4].
// - Alice removes 4 and gets 0 points. Alice = 18, Bob = 12, stones = [].
// The score difference is 18 - 12 = 6.
// Example 2:

// Input: stones = [7,90,5,1,100,10,10,2]
// Output: 122
 

// Constraints:

// n == stones.length
// 2 <= n <= 1000
// 1 <= stones[i] <= 1000

// SOLUTION 1:
// TLE

function _stoneGameVII(stones: number[]): number {
    return (function compute(turn, A, B, stones) {
        if(stones.length === 0) {
            return A - B;
        }
        
        let opt1 = [...stones];
        let opt2 = [...stones];
        
        if(turn) {
            opt1.shift();
            const A1 = A + opt1.reduce((a, b) => a + b, 0);
            opt2.pop();
            const A2 = A + opt2.reduce((a, b) => a + b, 0);
            
            return Math.max(
                compute(false, A1, B, opt1),
                compute(false, A2, B, opt2)
            );
        } else {
            opt1.shift();
            const B1 = B + opt1.reduce((a, b) => a + b, 0);
            opt2.pop();
            const B2 = B + opt2.reduce((a, b) => a + b, 0);
            
            return Math.min(
                compute(true, A, B1, opt1),
                compute(true, A, B2, opt2)
            );
        }
    })(true, 0, 0, stones);    
};

// SOLUTION 2:

// stoneGameVII :: [Number] -> Number
function stoneGameVII(stones: number[]): number {
    const dp = new Array(stones.length).fill(0).map(() => new Array(stones.length).fill(-1));
    
    let sum = 0;
    for(let num of stones){
        sum += num;
    }
    
    const solve = (stones: number[], start: number, end: number, sum: number) => {
        if(start >= end) {
            return 0;
        }
        if(dp[start][end] !== -1) {
            return dp[start][end];
        }
        
        const scoreOnRemovingFirst = sum - stones[start];
        const scoreOnRemovingLast = sum - stones[end];
        
        dp[start][end] = Math.max(
            scoreOnRemovingFirst - solve(stones, start + 1, end, scoreOnRemovingFirst),
            scoreOnRemovingLast - solve(stones, start, end - 1, scoreOnRemovingLast)
        );
                                  
        return dp[start][end];
    }
    
    return solve(stones, 0, stones.length - 1, sum);
};
