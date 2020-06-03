// There are 2N people a company is planning to interview. The cost of flying the i-th person to city A is costs[i][0], and the cost of flying the i-th person to city B is costs[i][1].
//
// Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.

// SOLUTION 1:
// (TLE)

// twoCitySchedCost :: [[Number]] -> Number
const twoCitySchedCost = costs => {
    let min = Infinity;

    const search = (i = 0, cost = 0, as = 0, bs = 0) => {
        if(i === costs.length) {
            if(cost < min && as === bs) min = cost;
            return;
        }

        if(cost > min || Math.abs(as - bs) > costs.length - i) return;

        const [a, b] = costs[i];

        search(i + 1, cost + a, as + 1, bs);
        search(i + 1, cost + b, as, bs + 1);
    }

    search();

    return min;
};

// SOLUTION 2:

// twoCitySchedCost :: [[Number]] -> Number
const twoCitySchedCost = costs => {
    costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));

    let result = 0;

    for(let i = 0; i < costs.length; i++) {
        if(i < costs.length / 2) result += costs[i][0];
        else result += costs[i][1];
    }

    return result;
};
