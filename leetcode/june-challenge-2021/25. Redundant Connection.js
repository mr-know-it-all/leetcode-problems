// In this problem, a tree is an undirected graph that is connected and has no cycles.

// You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.

// Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.

 

// Example 1:


// Input: edges = [[1,2],[1,3],[2,3]]
// Output: [2,3]
// Example 2:


// Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
// Output: [1,4]
 

// Constraints:

// n == edges.length
// 3 <= n <= 1000
// edges[i].length == 2
// 1 <= ai < bi <= edges.length
// ai != bi
// There are no repeated edges.
// The given graph is connected.

// findRedundantConnection :: [[Number]] -> [Number]
const findRedundantConnection = (edges) => {
    const getKey = (x, y) => `${x}-${y}`;
    const graph = {};
    const n = edges.length;
    
    for(let [a, b] of edges) {
        if(!graph[a]) graph[a] = [];
        if(!graph[b]) graph[b] = [];
        
        graph[a].push(b);
        graph[b].push(a);
    }
    const candidateEdges = new Set();
    const compute = (node, from = null, path = []) => {
        if(path.includes(node)) {
            candidateEdges.add(getKey(from, node));
            candidateEdges.add(getKey(node, from));
            return;
        }
        const neighbors = graph[node].filter(neighbor => neighbor !== from);
        
        for(neighbor of neighbors) {
            compute(neighbor, node, [...path, node]);
        }
    }  
    
    for(let i = 1; i <= n; i++) compute(i);
    
    for(let i = edges.length - 1; i >= 0; i--) {
        const [from, to] = edges[i];
        const key = getKey(from, to);
        
        if(candidateEdges.has(key)) return [from, to];
    }
};