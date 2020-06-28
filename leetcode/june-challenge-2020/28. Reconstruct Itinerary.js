// Given a list of airline tickets represented by pairs of departure and arrival airports [from, to], reconstruct the itinerary in order. All of the tickets belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

// Note:

// If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// All airports are represented by three capital letters (IATA code).
// You may assume all tickets form at least one valid itinerary.
// One must use all the tickets once and only once.
// Example 1:

// Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
// Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
// Example 2:

// Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
// Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
// Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
//              But it is larger in lexical order.

// findItinerary :: [String] -> [String]
const findItinerary = tickets => {
    const graph = {};

    // build a graph from the tikets (a ticket defines an edge betwen two cities)
    for(let ticket of tickets) {
        const [from, to] = ticket;
        if(graph[from]) graph[from].push(to);
        else graph[from] = [to];
    }
    // sort the connections each node has (needed for problem requirement)
    for(let node in graph) graph[node].sort();

    const result = [];

    // starting with JFK, add connections to the result
    (function dfs(node) {
        const destinations = graph[node];
        while((destinations || []).length > 0) dfs(destinations.shift());
        result.unshift(node);
    })('JFK');

    return result;
};
