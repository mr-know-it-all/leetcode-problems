// The set [1,2,3,...,n] contains a total of n! unique permutations.
//
// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
//
// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.
//
// Note:
//
// Given n will be between 1 and 9 inclusive.
// Given k will be between 1 and n! inclusive.

// getPermutation :: (Number, Number) -> String
const getPermutation = (n, k) => {
    const fact = [1];
    const list = [];

    for(let i = 1; i <=n; i++) list.push(i);
    for(let i = 1; i <= n; i++) fact[i] = i * fact[i - 1];

    k--;

    let permutation = '';

    // while there are values left to add in the permutation
    while(list.length > 0) {
        // first value is at k / fact(n - 1),
        // next is at k / fact((n--) - 1)
        // next is at k / fact(((n--)--) - 1)
        // and so on
        let index = Math.floor(k / fact[list.length - 1]);
        // k gets smaller by the number of permutations
        // that were eliminated by adding the previous value
        k -= index * fact[list.length - 1];

        permutation += list[index];
        list.splice(index, 1);
    }

    return permutation;
};
