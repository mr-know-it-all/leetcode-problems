// Given a binary tree where each path going from the root to any leaf form a valid sequence, check if a given string is a valid sequence in such binary tree.
//
// We get the given string from the concatenation of an array of integers arr and the concatenation of all values of the nodes along a path results in a sequence in the given binary tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// isValidSequence :: TreeNode T => (T, [Number]) -> Boolean
const isValidSequence = (root =>, arr) => {
    if(arr.length === 0 || root === null) {
        return false;
    }
    if(arr.length === 1 && (root.left !== null || root.right !== null)) {
        return false;
    }

    if(root.left === null && root.right === null) {
        if(arr.length === 1 && arr[0] === root.val) {
            return true;
        } else {
            return false;
        }
    }

    const [x, ...xs] = arr;

    return x === root.val && (isValidSequence(root.left, xs) || isValidSequence(root.right, xs));
};
