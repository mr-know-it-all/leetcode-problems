// Given a complete binary tree, count the number of nodes.

// Note:

// Definition of a complete binary tree from Wikipedia:
// In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// countNodes :: TreeNode T => T -> Number
const countNodes = function(root) {
    let count = 0;

    (function dfs(node) {
        if(!node || !node.left && node.right) return;

        dfs(node.left)
        dfs(node.right);

        count++;
    })(root);

    return count;
};
