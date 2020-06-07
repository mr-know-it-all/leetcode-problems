// We have a collection of stones, each stone has a positive integer weight.
//
// Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:
//
// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

// lastStoneWeight :: [Number] -> Number
var lastStoneWeight = function(stones) {
    stones.sort((a, b) =>  a - b).reverse();

    while(stones.length > 1) {
        let [a, b, ...rest] = stones;
        let c = Math.abs(a - b);

        // TODO: insert c n already sorted array
        stones = rest.concat(c);
        stones.sort((a, b) => a - b).reverse();
    }

    return stones[0];
};
