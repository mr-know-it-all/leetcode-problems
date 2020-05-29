// There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.
//
// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
//
// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

// SOLUTION 1:

// canFinish :: (Number, [[Number]]) -> Boolean
const canFinish = function(N, preqs) {
    const graph = {};
    for(let [a, b] of preqs) graph[b] = (graph[b] || []).concat(a);

    const visited = {};
    const hasCycle = (node, path = []) => {
        if(visited[node] || !graph[node]) return false;
        if(path.includes(node)) return true;

        for(let neighbor of graph[node]) if(hasCycle(neighbor, path.concat(node))) return true;

        visited[node] = true;
        return false;
    }

    for(let node = 0; node < N; node++) if(hasCycle(node)) return false;

    return true;
};

// SOLUTION 2:

// canFinish :: (Number, [[Number]]) -> Boolean
const canFinish = (N, preqs) => {
    const graph = {};
    // build a graph
    for(let [a, b] of preqs) {
        if(!graph[b]) graph[b] = [];
        graph[b].push(a);
    }

    const visited = {};
    const visiting = {};

    const dfs = node => {
        // no prerequisites are specified
        if(!graph[node]) return true;

        // already validated as part of a DAG
        if(visited[node]) return true;

        // while recursing on the neighbors of a node
        // if that node was already seen, we have a cycle
        if(visiting[node]) return false;

        // we are visiting this node
        visiting[node] = true;
        for(let neighbor of graph[node]) {
            // we have a cycle down the recursion chain
            // at some point, a node up the chain (added in visiting)
            // was encountered again
            if(!dfs(neighbor)) return false;
        }
        // we visited all neighbors of this node, and we are ok
        visiting[node] = false;

        // the node is a valid part of a DAG
        visited[node] = true;

        return true;
    }

    // validate all nodes as being part of a DAG
    for(let i = 0; i < N; i++) if(!dfs(i)) return false;

    return true;
}
