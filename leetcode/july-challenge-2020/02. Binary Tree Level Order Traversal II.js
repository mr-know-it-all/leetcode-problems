// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// SOLUTION 1:

// levelOrderBottom :: TreeNode T => T -> [[Number]]
const levelOrderBottom = root => {
    const response = {};

    (function dfs(node, level = 0) {
        if(!node) return;

        dfs(node.left, level + 1);
        dfs(node.right, level + 1);

        response[level] = (response[level] || []).concat(node.val);
    })(root);

    return Object.values(response).reverse();
};
