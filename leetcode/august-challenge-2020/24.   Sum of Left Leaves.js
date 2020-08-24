// Find the sum of all left leaves in a given binary tree.
//
// Example:
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
//
// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// sumOfLeftLeaves :: TreeNode T => T -> Number
const sumOfLeftLeaves = root => {
    return (function compute(node, add = false) {
        if(!node) return 0;

        return (
            (add && !node.left && !node.right ? node.val : 0) +
            compute(node.left, true) +
            compute(node.right)
        );
    })(root);
};
