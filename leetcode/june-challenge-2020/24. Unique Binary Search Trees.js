// Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

// SOLUTION 1:

// numTrees :: Number -> Number
const numTrees = n => {
    return (function count(n) {
        let result = 0;
        if(n <= 1) return 1;
        // for each number, count of posibilities before it (where it is root and parent of rest, or just parent of rest)
        // multiplied by the number of posibilities after it
        for(let i = 1; i <= n; i++) result += count(i - 1) * count(n - i);
        return result;
    })(n);
};

// SOLUTION 2:

// numTrees :: Number -> Number
const numTrees = n => {
    let cache = {};

    return (function count(n) {
        if(cache[n]) return cache[n];

        let result = 0;
        if(n <= 1) return 1;
        for(let i = 1; i <= n; i++) result += count(i - 1) * count(n - i);

        return (cache[n] = result);
    })(n);
};
