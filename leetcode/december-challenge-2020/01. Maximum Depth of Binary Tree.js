// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Given a binary tree, find its maximum depth.
// 
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// 
// Note: A leaf is a node with no children.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// SOLUTION 1:

// maxDepth :: TreeNode T => Number
const maxDepth = root => !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));

