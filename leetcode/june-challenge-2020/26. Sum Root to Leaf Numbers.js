// Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

// An example is the root-to-leaf path 1->2->3 which represents the number 123.

// Find the total sum of all root-to-leaf numbers.

// Note: A leaf is a node with no children.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// sumNumbers :: TreeNode T => T -> Number
const sumNumbers = root => {
    let total = 0;

    root && (function dfs(node, sum = 0) {
        !node.left && !node.right && (total += Number(`${sum}${node.val}`));

        node.left && dfs(node.left, `${sum}${node.val}`);
        node.right && dfs(node.right, `${sum}${node.val}`);
    })(root);

    return total;
};
