// You are given two integers n and k and two integer arrays speed and efficiency both of length n. There are n engineers numbered from 1 to n. speed[i] and efficiency[i] represent the speed and efficiency of the ith engineer respectively.

// Choose at most k different engineers out of the n engineers to form a team with the maximum performance.

// The performance of a team is the sum of their engineers' speeds multiplied by the minimum efficiency among their engineers.

// Return the maximum performance of this team. Since the answer can be a huge number, return it modulo 109 + 7.

 

// Example 1:

// Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 2
// Output: 60
// Explanation: 
// We have the maximum performance of the team by selecting engineer 2 (with speed=10 and efficiency=4) and engineer 5 (with speed=5 and efficiency=7). That is, performance = (10 + 5) * min(4, 7) = 60.
// Example 2:

// Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 3
// Output: 68
// Explanation:
// This is the same example as the first but k = 3. We can select engineer 1, engineer 2 and engineer 5 to get the maximum performance of the team. That is, performance = (2 + 10 + 5) * min(5, 4, 7) = 68.
// Example 3:

// Input: n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 4
// Output: 72
 

// Constraints:

// 1 <= <= k <= n <= 105
// speed.length == n
// efficiency.length == n
// 1 <= speed[i] <= 105
// 1 <= efficiency[i] <= 108

function maxPerformance(
    n/*: number*/,
    speed/*: number[]*/,
    efficiency/*: number[]*/,
    k/*: number*/
)/*: number*/ {
    // sort by decreasing efficiency
    // this way, the i'th engineer will represent the minimum efficiency
    const mostEff/*: Array<number>*/ = new Array(n).fill(0).map((_, i/*: number*/) => i);
    mostEff.sort((a/*: number*/, b/*: number*/) => efficiency[b] - efficiency[a]);
    
    let max/*: bigint*/ = BigInt(0);
    let sum/*: bigint*/ = BigInt(0);
    let minEff/*: number*/ = Infinity;
    const q/*: typeof MinPriorityQueue*/ = new MinPriorityQueue();
    
    for(const engineer of mostEff) {
        // store its speed
        q.enqueue(speed[engineer]);
        sum += BigInt(speed[engineer]);

        // if we have more engineers than the team's size
        // remove the one that has the lowest speed
        if(q.size() > k) sum -= BigInt(q.dequeue().element);
           
        // as written above,
        // the current engineer's efficiency is smaller than the previous ones
        minEff = efficiency[engineer];
        // compute candidate for max value, compare and update
        const localMax/*: bigint*/ = sum * BigInt(minEff); 
        if(localMax > max) max = localMax;
    }
    
    return max % BigInt(1000000007);
};