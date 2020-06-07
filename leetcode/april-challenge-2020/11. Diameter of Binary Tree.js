// Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let max;

// diameterOfBinaryTree :: TreeNode T => T -> Number
const diameterOfBinaryTree = root {
    max = 0;
    search(root);
    return max;
};

function search(node) {
    if(node === null) return 0;

    let left = search(node.left);
    let right = search(node.right);

    max = Math.max(max, left + right);

    return Math.max(left, right) + 1;
}
