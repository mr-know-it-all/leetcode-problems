// Given a non-empty binary tree, find the maximum path sum.
//
// For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// maxPathSum :: TreeNode T => T -> Number
var maxPathSum = function(root) {
    let max = -Infinity;

    const search = node => {
        if(!node) return 0;

        const left = Math.max(0, search(node.left));
        const right = Math.max(0, search(node.right));

        max = Math.max(max, left + right + node.val);

        return Math.max(left, right) + node.val;
    }

    search(root);

    return max;
};
