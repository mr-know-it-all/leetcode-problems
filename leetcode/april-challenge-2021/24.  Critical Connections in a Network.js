// There are n servers numbered from 0 to n-1 connected by undirected server-to-server connections forming a network where connections[i] = [a, b] represents a connection between servers a and b. Any server can reach any other server directly or indirectly through the network.

// A critical connection is a connection that, if removed, will make some server unable to reach some other server.

// Return all critical connections in the network in any order.

 

// Example 1:



// Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
// Output: [[1,3]]
// Explanation: [[3,1]] is also accepted.
 

// Constraints:

// 1 <= n <= 10^5
// n-1 <= connections.length <= 10^5
// connections[i][0] != connections[i][1]
// There are no repeated connections.

// criticalConnections :: (Number, [[Number]]) -> [[Number]]
const criticalConnections = (n, cns) => {
    const G = new Array(n).fill(0).map(() => []);
  
    for(let [a, b] of cns) {
      G[a].push(b);
      G[b].push(a);
    }
    
    let seed = 1;
    const time = new Array(n).fill(0);
    const result = [];
    
    (function dfs(i, p) {
      if(time[i]) return time[i];
      else time[i] = seed++;
      
      let low = time[i];
      
      for(const n of G[i]) {
        if(n === p) continue;
        const lowOfn = dfs(n, i);
        if(lowOfn < low) low = lowOfn;
      }
      
      if(p !== -1 && low >= time[i]) result.push([i, p]);
      
      return low;
    })(0, -1);
    
    return result;
  };