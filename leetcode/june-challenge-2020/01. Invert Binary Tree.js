// Invert a binary tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// SOLUTION 1:

// invertTree :: TreeNode T => T -> T
const invertTree = function(node) {
    if(!node) return null;

    let left = node.left;
    let right = node.right;

    node.left = right;
    node.right = left;

    invertTree(node.left);
    invertTree(node.right);

    return node;
};
