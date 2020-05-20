// Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// SOLUTION 1:
// TODO: add faster solution

// kthSmallest :: TreeNode T => (T, Number) -> Number
const kthSmallest = function(root, k) {
    const inOrder = node => ([
        ...(node.left ? inOrder(node.left) : []),
        node.val,
        ...(node.right ? inOrder(node.right) : [])
    ]);

    return inOrder(root)[k - 1];
};
