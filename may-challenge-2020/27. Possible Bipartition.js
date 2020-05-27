// Given a set of N people (numbered 1, 2, ..., N), we would like to split everyone into two groups of any size.

// Each person may dislike some other people, and they should not go into the same group.

// Formally, if dislikes[i] = [a, b], it means it is not allowed to put the people numbered a and b into the same group.

// Return true if and only if it is possible to split everyone into two groups in this way.

// SOLUTION 1:

// possibleBipartition :: (Number, [[Number]]) -> Boolean
const possibleBipartition = function(N, dislikes) {
    if(dislikes.length === 0) return true;

    const graph = {};
    const colors = {};

    const dfs = (node, color) => {
        colors[node] = color;

        for(let neighbor of (graph[node] || [])) {
            if(colors[neighbor] === color) return false;
            if(!colors[neighbor] && !dfs(neighbor, -color)) return false;
        }

        return true;
    }


    for(let i = 0; i < dislikes.length; i++) {
        const [a, b] = dislikes[i];

        if(!graph[a]) graph[a] = [b];
        else graph[a].push(b);

        if(!graph[b]) graph[b] = [a];
        else graph[b].push(a);
    }

    for(let node = 1; node <= N; node++) {
        if(!colors[node] && !dfs(node, 1)) return false;
    }

    return true;
};
