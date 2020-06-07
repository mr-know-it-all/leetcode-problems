// https://leetcode.com/problems/symmetric-tree/

// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// isMirror :: TreeNode T => (T, T) -> Boolean
const isMirror = (a, b) => {
    if(!a && !b) return true;

    if(a && b && a.val === b.val) {
        return isMirror(a.left, b.right) && isMirror(a.right, b.left);
    }

    return false;
}

// isSymmetric :: TreeNode T => T -> Boolean
const isSymmetric = function(root) {
    return isMirror(root, root);
};
