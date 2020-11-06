// A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.

// Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).

// Return a list of all MHTs' root labels. You can return the answer in any order.

// The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

 

// Example 1:


// Input: n = 4, edges = [[1,0],[1,2],[1,3]]
// Output: [1]
// Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.
// Example 2:


// Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
// Output: [3,4]
// Example 3:

// Input: n = 1, edges = []
// Output: [0]
// Example 4:

// Input: n = 2, edges = [[0,1]]
// Output: [0,1]
 

// Constraints:

// 1 <= n <= 2 * 104
// edges.length == n - 1
// 0 <= ai, bi < n
// ai != bi
// All the pairs (ai, bi) are distinct.
// The given input is guaranteed to be a tree and there will be no repeated edges.

// SOLUTION 1:
// slow O(n ^ 2) dfs

// findMinHeightTrees :: (Number, [[Number]]) -> [Number]
const findMinHeightTrees = (n, edges) => {
    if(edges.length === 0) return [0];
    
    const graph = {};
    const visited = {};
    const maxHeight = {};
    
    for(let [a, b] of edges) {
        graph[a] = (graph[a] || []).concat(b);
        graph[b] = (graph[b] || []).concat(a);
    }
    
    let min = null;
    let roots = [];
    
    const visiting = {};
    const dfs = (node, h = 0, root) => {
        visiting[node] = true;
        visited[root] = (visited[root] || 0) + 1;
        
        maxHeight[root] = Math.max(maxHeight[root] || 0, h)
        
        if(min !== null && maxHeight[root] > min) {
            visiting[node] = false;
            return;
        }
        
        if(visited[root] === n) {
            if(min === null || maxHeight[root] < min) {
                min = maxHeight[root];
                roots = [root];
            } else if(min === maxHeight[root]) {
                roots.push(root)
            }
            
            visiting[node] = false;
            return;
        }
        
        const branches = graph[node].filter(n => !visiting[n]);
        for(let branch of branches) dfs(branch, h + 1, root);
        
        visiting[node] = false
    }
    
    for(let i = 0; i < n; i++) dfs(i, 0, i);
    
    return roots;
};

// SOLUTION 2

// findMinHeightTrees :: (Number, [[Number]]) -> [Number]
const findMinHeightTrees = (n, edges) => {
    if(edges.length === 0) return [0];
    
    const graph = {};
    for(let [a, b] of edges) {
        graph[a] = (graph[a] || []).concat(b);
        graph[b] = (graph[b] || []).concat(a);
    }
    
    while(Object.keys(graph).length > 2) {
        
        // first remove leaves
        for(let key of Object.keys(graph)) {
            if(graph[key].length === 1) {
                delete graph[key];
            }
        }
        
        // then removes link from nodes to removed leaves
        for(let key of Object.keys(graph)) {
            graph[key] = graph[key].filter(k => graph[k]);
        }
    }
 
    return Object.keys(graph);
};