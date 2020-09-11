// Given a binary tree, each node has value 0 or 1.  Each root-to-leaf path represents a binary number starting with the most significant bit.  For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
//
// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.
//
// Return the sum of these numbers.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// sumRootToLeaf :: TreeNode T => T -> Number
const sumRootToLeaf = root => {
    let sum = 0;

    (function dfs(node, sumSoFar = '') {
        if(!node) return;
        if(!node.left && !node.right) {
            sum += parseInt(sumSoFar + node.val, 2);
        }

        dfs(node.left, sumSoFar + node.val);
        dfs(node.right, sumSoFar + node.val);
    })(root);

    return sum;
};
