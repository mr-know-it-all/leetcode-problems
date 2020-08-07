// Given a binary tree, return the vertical order traversal of its nodes values.
//
// For each node at position (X, Y), its left and right children respectively will be at positions (X-1, Y-1) and (X+1, Y-1).
//
// Running a vertical line from X = -infinity to X = +infinity, whenever the vertical line touches some nodes, we report the values of the nodes in order from top to bottom (decreasing Y coordinates).
//
// If two nodes have the same position, then the value of the node that is reported first is the value that is smaller.
//
// Return an list of non-empty reports in order of X coordinate.  Every report will have a list of values of nodes.

// SOLUTION 1:

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const compose = (...fns) => init => fns.reduceRight((acc, fn) => fn(acc), init);
const clone = x => x; // just to point out the concept
const sort = (a, b) => +a > +b ? 1 : +a < +b ? -1 : 0;
const sortLevel = l => clone(l).sort(([a, valA], [b, valB]) => {
    if(a !== b) return sort(b, a);
    return sort(valA, valB)
});
const sortLevels = ls => clone(ls).sort(([a,], [b,]) => sort(a, b));
const getKeyValuePairs = Object.entries;
const extractLevels = levels => levels.map(([, level]) => level);
const sortNodeValues = levels => levels.map(sortLevel);
const extractNodeValues = levels => levels.map(level => level.map(([, node]) => node));

// verticalTraversal :: TreeNode T => T -> [[Number]]
const verticalTraversal = root => {
    const levels = {};

    (function traverse(node, x, y) {
        levels[x] = (levels[x] || []);
        levels[x].push([y, node.val]);

        if(node.left) traverse(node.left,  x - 1, y - 1);
        if(node.right) traverse(node.right, x + 1, y - 1);
    })(root, 0, 0);

    return (
        compose(
            extractNodeValues,
            sortNodeValues,
            extractLevels,
            sortLevels,
            getKeyValuePairs
        )(levels)
    );
};
