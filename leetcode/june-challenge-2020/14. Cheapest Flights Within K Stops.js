// There are n cities connected by m flights. Each flight starts from city u and arrives at v with a price w.

// Now given all the cities and flights, together with starting city src and the destination dst, your task is to find the cheapest price from src to dst with up to k stops. If there is no such route, output -1.

// findCheapestPrice :: (Number, [[Number]], Number, Number, Number) -> Number
const findCheapestPrice = (n, flights, src, dst, K) => {
    const graph = {};
    for([from, to, price] of flights) {
        if(!graph[from]) graph[from] = {};
        graph[from][to] = price;
    }

    let minPrice = Infinity;
    const dfs = (node, price = 0, stops = 0, visited = {}) => {
        if(visited[node]) return;
        visited[node] = true;

        if(Number(node) === dst) {
            if(minPrice > price) minPrice = price;
            return;
        }
        if(stops > K || price >= minPrice) return;

        for(nb of (Object.keys(graph[node] || {}))) {
            dfs(nb, price + graph[node][nb], stops + 1, { ...visited });
        }
    }

    dfs(src);

    return minPrice === Infinity ? -1 : minPrice
};
