// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// isSameTree :: TreeNode A, B => (A, B) -> Boolean
const isSameTree = (p, q) => {
    const isEqual = (a, b) => {
        if(!a && !b) return true;
        if(!a || !b) return false;
        if(a.val !== b.val) return false;

        return isEqual(a.left, b.left) && isEqual(a.right, b.right)
    }

    return isEqual(p, q);
};
