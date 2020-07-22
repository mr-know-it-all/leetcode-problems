// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
//   [15,7]
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

// zigzagLevelOrder :: TreeNode T => T -> [[Number]]
const zigzagLevelOrder = function(root) {
    const result = [];

    const dfs = (node, depth = 0) => {
        if(!node) return;

        result[depth] = (result[depth] || []).concat(node.val);

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    };

    dfs(root);

    return result.map((level, i) => i % 2 === 0 ? level : level.reverse());
};

// SOLUTION 2:

// zigzagLevelOrder :: TreeNode T => T -> [[Number]]
const zigzagLevelOrder = function(root) {
    const result = [];

    const dfs = (node, depth = 0) => {
        if(!node) return;

        if(!result[depth]) result[depth] = [];

        if(depth % 2 === 0) result[depth].push(node.val);
        else result[depth].unshift(node.val);

        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    };

    dfs(root);

    return result;
};
