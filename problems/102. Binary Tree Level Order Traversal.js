// https://leetcode.com/problems/binary-tree-level-order-traversal/

// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// SOLUTION 1:

// levelOrder :: TreeNode T => T -> [[Number]]
const levelOrder = function(root) {
    const cache = {};

    const dfs = (node, depth = 0) => {
        if(!node) return;

        if(!cache[depth]) cache[depth] = [];
        cache[depth].push(node.val);

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }

    dfs(root);

    return Object.values(cache);
};

// SOLUTION 2:

// levelOrder :: TreeNode T => T -> [[Number]]
const levelOrder = function(root) {
    const result = [];

    const dfs = (node, depth = 0) => {
        if(!node) return;

        result[depth] = (result[depth] || []).concat(node.val);

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }

    dfs(root);

    return result;
};
