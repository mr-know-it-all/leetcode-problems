// Given a non-empty array of unique positive integers A, consider the following graph:
//
// There are A.length nodes, labelled A[0] to A[A.length - 1];
// There is an edge between A[i] and A[j] if and only if A[i] and A[j] share a common factor greater than 1.
// Return the size of the largest connected component in the graph.

// SOLUTION 1:
// TODO: write several alternative solutions to properly understand the concepts
// totally had to look for the solution, even then, not 100% clear to me

// getFactors :: Number -> Set(Number)
const getFactors = number => {
    const res = new Set();

    for(let i = 2; i * i <= number; i++) {
        if(number % i === 0) {
            res.add(i);
            res.add(number / i);
        }
    }

    return res;
}

// largestComponentSize :: [Number] -> Number
const largestComponentSize = A => {
    const p = [];
    const find = a => {
        if(!p[a]) p[a] = a;

        while (p[a] !== a) {
            p[a] = p[p[a]];
            a = p[a];
        }

        return a;
    }

    for (let num of A) {
        const set = getFactors(num);

        for (let factor of set.values()) {
            p[find(factor)] = find(num);
        }
    }

    const cntMap = new Map();

    for(let num of A) {
        const parent = find(num);
        cntMap.set(parent, (cntMap.get(parent) || 0) + 1);
    }

    return Math.max(...cntMap.values());
};
